import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { TOOL_DRAFT_KEY } from "@/lib/studio-tools";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { type Conversation, type Message, groupChats, newConversation, titleFrom } from "@/lib/chat-store";
import { useConversations } from "@/hooks/use-conversations";
import { type Attachment, MAX_FILES, formatSize, readAttachment } from "@/lib/files";
import { GEMINI_MODELS, findModel } from "@/lib/models";
import { useStudioPreferences } from "@/hooks/use-studio-preferences";
import { AccountControl } from "./AccountControl";
import { streamGemini, validKeys } from "@/lib/gemini-client";
import { Markdown } from "./Markdown";
import { SettingsDialog } from "./SettingsDialog";
import * as I from "./icons";

const SUGGESTIONS = [
  { t: "لخّص لي ملفاً", p: "سأرفق ملفاً، لخّصه في نقاط واضحة مع أهم الأرقام." },
  { t: "اشرح كوداً", p: "اشرح لي هذا الكود سطراً بسطر واقترح تحسينات:\n" },
  { t: "سؤال ضريبي", p: "ما الفرق بين ضريبة القيمة المضافة وضريبة الدخل؟" },
  { t: "خطة مذاكرة", p: "اعمل لي خطة مذاكرة أسبوعية لمادة الرياضيات مع أوقات راحة." },
];

export function Studio() {
  const [hydrated, setHydrated] = useState(false);
  const { chats, setChats, sync: chatSync, retry: retryChats } = useConversations();
  const [activeId, setActiveId] = useState<string | null>(null);
  const { prefs, updatePrefs, sync, retry } = useStudioPreferences();
  const [model, setModel] = useState(GEMINI_MODELS[1]?.id ?? GEMINI_MODELS[0]?.id ?? "gemini-3.6-flash");
  const [input, setInput] = useState("");
  const [files, setFiles] = useState<Attachment[]>([]);
  const [busy, setBusy] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [query, setQuery] = useState("");
  const [settings, setSettings] = useState(false);
  const [confirmDel, setConfirmDel] = useState<string | "all" | null>(null);
  const [online, setOnline] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [listening, setListening] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const recRef = useRef<any>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(TOOL_DRAFT_KEY);
      if (raw) { const draft = JSON.parse(raw); setInput(String(draft.text || "")); if (Array.isArray(draft.files)) setFiles(draft.files); sessionStorage.removeItem(TOOL_DRAFT_KEY); }
    } catch { sessionStorage.removeItem(TOOL_DRAFT_KEY); }
    setOnline(navigator.onLine);
    setHydrated(true);
    const on = () => setOnline(true), off = () => setOnline(false);
    addEventListener("online", on); addEventListener("offline", off);
    if (matchMedia("(min-width: 1024px)").matches) setSidebar(true);
    return () => { removeEventListener("online", on); removeEventListener("offline", off); };
  }, []);

  const active = chats.find((c) => c.id === activeId) ?? null;
  useEffect(() => { endRef.current?.scrollIntoView({ block: "end" }); }, [active?.messages.length, active?.messages.at(-1)?.text]);
  useEffect(() => { taRef.current?.focus(); }, [activeId, busy]);

  const hasKeys = hydrated && validKeys().length > 0;
  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q ? chats.filter((c) => c.title.toLowerCase().includes(q) || c.messages.some((m) => m.text.toLowerCase().includes(q))) : chats;
    return groupChats(list);
  }, [chats, query]);

  const patch = (id: string, fn: (c: Conversation) => Conversation) => setChats((cs) => cs.map((c) => (c.id === id ? fn(c) : c)));

  const addFiles = useCallback(async (list: FileList | File[]) => {
    for (const f of Array.from(list)) {
      try {
        const a = await readAttachment(f);
        setFiles((cur) => (cur.length >= MAX_FILES ? (toast.error(`الحد الأقصى ${MAX_FILES} ملفات`), cur) : [...cur, a]));
      } catch (e) { toast.error((e as Error).message); }
    }
  }, []);

  async function send(textArg?: string) {
    const text = (textArg ?? input).trim();
    if ((!text && !files.length) || busy) return;
    if (!online) { toast.error("لا يوجد اتصال بالإنترنت."); return; }
    const m = findModel(model);
    if (!validKeys().length) { toast.error("أضف مفتاح Gemini من الإعدادات أولاً."); setSettings(true); return; }

    let conv = active;
    if (!conv) { const created = newConversation(m.id); conv = created; setChats((cs) => [created, ...cs]); setActiveId(created.id); }
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", text, attachments: files as any, createdAt: Date.now() };
    const botMsg: Message = { id: crypto.randomUUID(), role: "assistant", text: "", createdAt: Date.now() };
    const history = [...conv.messages.filter((x) => !x.error), userMsg];
    const cid = conv.id;
    patch(cid, (c) => ({ ...c, title: c.messages.length ? c.title : titleFrom(text || files[0]?.name || ""), model: m.id, updatedAt: Date.now(), messages: [...c.messages, userMsg, botMsg] }));
    setInput(""); setFiles([]); setBusy(true);
    const ctrl = new AbortController(); abortRef.current = ctrl;
    const append = (d: string) => patch(cid, (c) => ({ ...c, messages: c.messages.map((x) => (x.id === botMsg.id ? { ...x, text: x.text + d } : x)) }));
    try {
      await streamGemini(m.id, history, append, ctrl.signal);
      patch(cid, (c) => ({ ...c, messages: c.messages.map((x) => (x.id === botMsg.id && !x.text ? { ...x, error: "لم يصل أي رد. حاول مرة أخرى." } : x)) }));
    } catch (e) {
      const aborted = (e as Error).name === "AbortError";
      patch(cid, (c) => ({ ...c, messages: c.messages.map((x) => (x.id === botMsg.id ? (aborted ? { ...x, text: x.text || "_تم الإيقاف._" } : { ...x, error: (e as Error).message }) : x)) }));
    } finally { setBusy(false); abortRef.current = null; }
  }

  function toggleVoice() {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { toast.error("الإملاء الصوتي غير مدعوم في هذا المتصفح."); return; }
    if (listening) { recRef.current?.stop(); return; }
    const r = new SR(); r.lang = "ar-EG"; r.interimResults = false; r.continuous = true;
    r.onresult = (e: any) => { const t = Array.from(e.results).slice(e.resultIndex).map((x: any) => x[0].transcript).join(" "); setInput((v) => (v ? v + " " : "") + t); };
    r.onend = () => setListening(false); r.onerror = () => setListening(false);
    recRef.current = r; r.start(); setListening(true);
  }

  function exportAll() {
    const blob = new Blob([JSON.stringify({ version: 2, exportedAt: new Date().toISOString(), chats }, null, 2)], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "hazem-tech-chats.json"; a.click(); URL.revokeObjectURL(a.href);
  }
  function exportChat(c: Conversation) {
    const md = c.messages.map((m) => `### ${m.role === "user" ? "أنت" : "Hazem-Tech"}\n\n${m.text}`).join("\n\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([`# ${c.title}\n\n${md}`], { type: "text/markdown" })); a.download = `${c.title.slice(0, 40)}.md`; a.click();
  }

  const current = findModel(model);

  return (
    <div dir="rtl" className="flex h-dvh overflow-hidden bg-background text-foreground"
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }} onDragLeave={(e) => { if (e.currentTarget === e.target) setDragging(false); }}
      onDrop={(e) => { e.preventDefault(); setDragging(false); if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files); }}>
      {/* Sidebar */}
      {sidebar && <button aria-label="إغلاق القائمة" className="fixed inset-0 z-30 bg-background/70 lg:hidden" onClick={() => setSidebar(false)} />}
      <aside aria-label="سجل المحادثات" className={`fixed inset-y-0 right-0 z-40 flex w-[min(84vw,290px)] flex-col border-l bg-sidebar transition-app lg:static ${sidebar ? "translate-x-0" : "translate-x-full lg:hidden"}`}>
        <div className="flex items-center gap-2 px-4 pt-4 pb-3">
          <I.BrandMark />
          <span className="text-lg font-bold">Hazem-Tech <span className="text-primary">AI</span></span>
        </div>
        <div className="space-y-2 px-3">
          <button type="button" onClick={() => { setActiveId(null); if (!matchMedia("(min-width:1024px)").matches) setSidebar(false); }}
            className="flex w-full items-center gap-2 rounded-lg bg-primary px-3 py-2 font-semibold text-primary-foreground transition-app hover:opacity-90">
            <I.IconPlus /> محادثة جديدة
          </button>
          <label className="flex items-center gap-2 rounded-lg border bg-surface px-3 py-1.5 text-sm text-muted-foreground focus-within:border-primary">
            <I.IconSearch width={16} height={16} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ابحث في المحادثات" className="w-full bg-transparent text-foreground outline-none" aria-label="بحث في المحادثات" />
          </label>
        </div>
        <nav className="mt-3 flex-1 overflow-y-auto px-2 pb-3">
          {!hydrated ? (
            <div className="space-y-2 px-2">{[0, 1, 2].map((i) => <div key={i} className="h-8 animate-pulse rounded-md bg-surface" />)}</div>
          ) : groups.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-muted-foreground">{query ? "لا نتائج مطابقة." : "لا توجد محادثات بعد."}</p>
          ) : groups.map((g) => (
            <section key={g.label} className="mb-3">
              <h3 className="px-2 py-1 text-xs font-semibold text-muted-foreground">{g.label}</h3>
              <ul>{g.items.map((c) => (
                <li key={c.id} className={`group flex items-center rounded-md transition-app ${c.id === activeId ? "bg-sidebar-accent" : "hover:bg-sidebar-accent/60"}`}>
                  <button type="button" className="min-w-0 flex-1 truncate px-2 py-2 text-right text-sm" onClick={() => { setActiveId(c.id); if (!matchMedia("(min-width:1024px)").matches) setSidebar(false); }}>
                    {c.pinned && <I.IconPin width={13} height={13} className="ml-1 inline text-primary" />}{c.title}
                  </button>
                  <Popover>
                    <PopoverTrigger className="ml-1 rounded p-1 text-muted-foreground opacity-100 hover:text-foreground lg:opacity-0 lg:group-hover:opacity-100 lg:focus:opacity-100" aria-label={`خيارات ${c.title}`}>
                      <I.IconChevron width={16} height={16} />
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-44 p-1" dir="rtl">
                      <MenuItem onClick={() => patch(c.id, (x) => ({ ...x, pinned: !x.pinned }))} icon={<I.IconPin width={16} height={16} />}>{c.pinned ? "إلغاء التثبيت" : "تثبيت"}</MenuItem>
                      <MenuItem onClick={() => { const t = prompt("الاسم الجديد", c.title)?.trim(); if (t) patch(c.id, (x) => ({ ...x, title: t.slice(0, 120) })); }} icon={<I.IconEdit width={16} height={16} />}>إعادة تسمية</MenuItem>
                      <MenuItem onClick={() => exportChat(c)} icon={<I.IconDownload width={16} height={16} />}>تصدير Markdown</MenuItem>
                      <MenuItem danger onClick={() => setConfirmDel(c.id)} icon={<I.IconTrash width={16} height={16} />}>حذف</MenuItem>
                    </PopoverContent>
                  </Popover>
                </li>
              ))}</ul>
            </section>
          ))}
        </nav>
        <div className="border-t p-3">
          <Button variant="ghost" asChild className="w-full justify-start"><Link to="/tools"><I.IconFile width={18} height={18}/>الأدوات والمهارات</Link></Button>
          <button type="button" onClick={() => setSettings(true)} className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm transition-app hover:bg-sidebar-accent">
            <I.IconSettings width={18} height={18} /> الإعدادات
          </button>
          <p role="status" className="px-2 pt-1 text-xs text-muted-foreground">{chatSync}</p>
          {chatSync.includes("تعذّرت") && <Button variant="link" onClick={retryChats}>إعادة محاولة المزامنة</Button>}
        </div>
      </aside>

      {/* Main */}
      <main className="relative flex min-w-0 flex-1 flex-col stage-glow">
        <header className="relative flex items-center justify-between gap-2 px-3 py-2.5 sm:px-5">
          <button type="button" onClick={() => setSidebar((s) => !s)} className="rounded-md p-2 transition-app hover:bg-accent" aria-label="القائمة" aria-expanded={sidebar}><I.IconMenu /></button>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Popover>
              <PopoverTrigger className="flex max-w-[44vw] items-center gap-1.5 truncate rounded-full border bg-surface px-3.5 py-1.5 text-sm font-semibold transition-app hover:bg-surface-2" aria-label="اختيار النموذج">
                {current.label}<I.IconChevron width={16} height={16} className="shrink-0 text-muted-foreground" />
              </PopoverTrigger>
              <PopoverContent className="w-[min(92vw,320px)] p-1.5" dir="rtl" align="center">
                <ModelGroup title={hasKeys ? "Gemini (مفاتيحك)" : "Gemini — يحتاج مفتاحاً من الإعدادات"} models={GEMINI_MODELS} value={model} onPick={setModel} enabled={hasKeys} />
              </PopoverContent>
            </Popover>
          </span>
          <div className="mr-auto flex items-center gap-2">
          <AccountControl />
          <span className={`flex items-center gap-1.5 text-xs ${online ? "text-muted-foreground" : "text-destructive"}`} role="status">
            <span className={`h-2 w-2 rounded-full ${online ? "bg-success" : "bg-destructive"}`} />{online ? "متصل" : "غير متصل"}
          </span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          {!active || active.messages.length === 0 ? (
            <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center px-5 text-center">
              <I.BrandMark width={56} height={56} />
              <h1 className="mt-4 text-2xl font-bold sm:text-3xl">بماذا أساعدك اليوم؟</h1>
              <p className="mt-2 text-muted-foreground">اكتب سؤالك، أو أرفق صورة أو ملفاً نصياً.</p>
              <div className="mt-7 grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
                {SUGGESTIONS.map((s) => (
                  <button key={s.t} type="button" onClick={() => { setInput(s.p); taRef.current?.focus(); }}
                    className="rounded-xl border bg-surface px-4 py-3 text-right transition-app hover:border-primary/60 hover:bg-surface-2">
                    <span className="block text-sm font-semibold">{s.t}</span>
                    <span className="block truncate text-xs text-muted-foreground">{s.p}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl space-y-6 px-4 py-6 sm:px-6" aria-live="polite">
              {active.messages.map((m) => <MessageView key={m.id} m={m} streaming={busy && m === active.messages.at(-1)} />)}
              <div ref={endRef} />
            </div>
          )}
        </div>

        {/* Composer */}
        <div className="px-3 pb-3 sm:px-6 sm:pb-5">
          <form className="mx-auto max-w-3xl rounded-2xl border bg-surface shadow-pop transition-app focus-within:border-primary/70"
            onSubmit={(e) => { e.preventDefault(); send(); }}>
            {files.length > 0 && (
              <ul className="flex flex-wrap gap-2 p-2.5 pb-0" aria-label="المرفقات">
                {files.map((f) => (
                  <li key={f.id} className="flex max-w-[220px] items-center gap-2 rounded-lg border bg-surface-2 p-1.5 pl-2">
                    {f.kind === "image" ? <img src={f.data} alt="" className="h-9 w-9 rounded-md object-cover" /> : <span className="grid h-9 w-9 place-items-center rounded-md bg-accent text-primary"><I.IconFile width={18} height={18} /></span>}
                    <span className="min-w-0 text-xs"><span className="block truncate font-semibold">{f.name}</span><span className="text-muted-foreground">{formatSize(f.size)}</span></span>
                    <button type="button" aria-label={`إزالة ${f.name}`} className="rounded p-0.5 text-muted-foreground hover:text-destructive" onClick={() => setFiles((x) => x.filter((y) => y.id !== f.id))}><I.IconX width={14} height={14} /></button>
                  </li>
                ))}
              </ul>
            )}
            <textarea ref={taRef} value={input} rows={1} dir="auto"
              onChange={(e) => { setInput(e.target.value); e.target.style.height = "auto"; e.target.style.height = Math.min(e.target.scrollHeight, 220) + "px"; }}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); send(); } }}
              onPaste={(e) => { if (e.clipboardData.files.length) { e.preventDefault(); addFiles(e.clipboardData.files); } }}
              placeholder="اكتب رسالتك…" title="Enter للإرسال، Shift+Enter لسطر جديد" aria-label="الرسالة"
              className="block max-h-[220px] w-full resize-none bg-transparent px-4 pt-3.5 pb-1 outline-none placeholder:text-muted-foreground" />
            <div className="flex items-center gap-1 px-2 pb-2">
              <input ref={fileRef} type="file" multiple hidden accept="image/png,image/jpeg,image/webp,image/gif,.pdf,.docx,.xlsx,.pptx,.txt,.md,.csv,.json,.js,.ts,.tsx,.jsx,.py,.html,.css,.xml,.yaml,.yml,.sql,.log"
                onChange={(e) => { if (e.target.files) addFiles(e.target.files); e.target.value = ""; }} />
              <button type="button" onClick={() => fileRef.current?.click()} className="rounded-full p-2 text-muted-foreground transition-app hover:bg-accent hover:text-foreground" aria-label="إرفاق ملف"><I.IconClip /></button>
              <button type="button" onClick={toggleVoice} aria-pressed={listening} className={`rounded-full p-2 transition-app hover:bg-accent ${listening ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} aria-label={listening ? "إيقاف الإملاء" : "إملاء صوتي"}><I.IconMic /></button>
              <span className="flex-1" />
              {busy ? (
                <button type="button" onClick={() => abortRef.current?.abort()} className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background transition-app" aria-label="إيقاف التوليد"><I.IconStop /></button>
              ) : (
                <button type="submit" disabled={!input.trim() && !files.length} className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition-app disabled:opacity-40" aria-label="إرسال"><I.IconSend className="-scale-x-100" /></button>
              )}
            </div>
          </form>
          <p className="mt-1.5 text-center text-xs text-muted-foreground">قد يخطئ الذكاء الاصطناعي؛ تحقّق من المعلومات المهمة.</p>
        </div>
        {dragging && <div className="pointer-events-none absolute inset-3 grid place-items-center rounded-2xl border-2 border-dashed border-primary bg-background/80 text-lg font-semibold">أفلت الملفات هنا</div>}
      </main>

      <SettingsDialog open={settings} onOpenChange={setSettings} prefs={prefs} onPrefs={updatePrefs} sync={sync} onRetry={retry} onExport={exportAll} onClearAll={() => setConfirmDel("all")} />
      <AlertDialog open={!!confirmDel} onOpenChange={(o) => !o && setConfirmDel(null)}>
        <AlertDialogContent dir="rtl" className="bg-popover">
          <AlertDialogHeader className="text-right">
            <AlertDialogTitle>{confirmDel === "all" ? "حذف كل المحادثات؟" : "حذف هذه المحادثة؟"}</AlertDialogTitle>
            <AlertDialogDescription>لا يمكن التراجع عن هذا الإجراء.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel>إلغاء</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={() => {
              if (confirmDel === "all") { setChats([]); setActiveId(null); setSettings(false); }
              else { setChats((cs) => cs.filter((c) => c.id !== confirmDel)); if (activeId === confirmDel) setActiveId(null); }
              setConfirmDel(null); toast.success("تم الحذف");
            }}>حذف</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function MenuItem({ children, icon, onClick, danger }: { children: React.ReactNode; icon: React.ReactNode; onClick: () => void; danger?: boolean }) {
  return <button type="button" onClick={onClick} className={`flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm transition-app hover:bg-accent ${danger ? "text-destructive" : ""}`}>{icon}{children}</button>;
}

function ModelGroup({ title, models, value, onPick, enabled }: { title: string; models: ReturnType<typeof findModel>[]; value: string; onPick: (id: string) => void; enabled: boolean }) {
  return (
    <div className="mb-1">
      <p className="px-2 py-1 text-xs font-semibold text-muted-foreground">{title}</p>
      {models.map((m) => (
        <button key={m.id} type="button" disabled={!enabled} onClick={() => onPick(m.id)} aria-pressed={value === m.id}
          className={`flex w-full items-center justify-between rounded-md px-2 py-2 text-right transition-app disabled:opacity-45 ${value === m.id ? "bg-accent" : "enabled:hover:bg-accent/60"}`}>
          <span><span className="block text-sm font-semibold">{m.label}</span><span className="block text-xs text-muted-foreground">{m.description} · {m.caps.join("، ")}</span></span>
          {value === m.id && <I.IconCheck width={16} height={16} className="text-primary" />}
        </button>
      ))}
    </div>
  );
}

function MessageView({ m, streaming }: { m: Message; streaming: boolean }) {
  const atts = (m.attachments ?? []) as any[];
  if (m.role === "user") {
    return (
      <div className="flex flex-col items-start gap-1.5">
        {atts.length > 0 && <div className="flex flex-wrap gap-2">{atts.map((a) => a.kind === "image" && a.data
          ? <img key={a.id} src={a.data} alt={a.name} className="max-h-40 rounded-lg border" />
          : <span key={a.id} className="flex items-center gap-1.5 rounded-lg border bg-surface px-2 py-1 text-xs"><I.IconFile width={14} height={14} />{a.name}</span>)}</div>}
        {m.text && <div dir="auto" className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tr-md bg-bubble px-4 py-2.5 text-bubble-foreground">{m.text}</div>}
      </div>
    );
  }
  return (
    <div className="flex gap-3">
      <I.BrandMark width={26} height={26} className="mt-1 shrink-0" />
      <div className="min-w-0 flex-1" dir="auto">
        {m.error ? <p role="alert" className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">{m.error}</p>
          : m.text ? <Markdown text={m.text} />
          : streaming ? <span className="inline-flex gap-1 py-2" aria-label="جار
