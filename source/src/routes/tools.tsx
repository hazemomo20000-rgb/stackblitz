import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Search, FileText, Code2, ChartNoAxesCombined, GraduationCap, Play, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountControl } from "@/components/studio/AccountControl";
import { DocumentWorkbench } from "@/components/studio/DocumentWorkbench";
import { BrandMark } from "@/components/studio/icons";
import { accountHead } from "@/lib/page-head";
import { STUDIO_TOOLS, filterTools, TOOL_DRAFT_KEY, type StudioTool } from "@/lib/studio-tools";
import { readAttachment, type Attachment } from "@/lib/files";

export const Route = createFileRoute("/tools")({ head: () => accountHead("الأدوات والمهارات", "أدوات Hazem-Tech لتحليل البيانات ومراجعة الكود والكتابة والتعلّم."), component: ToolsPage });
function ToolsPage() {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("all");
  const [kind, setKind] = useState<"all" | "tool" | "skill">("all");
  const [selected, setSelected] = useState<StudioTool | null>(null); const [text, setText] = useState("");
  const [files, setFiles] = useState<Attachment[]>([]); const [error, setError] = useState(""); const [busy, setBusy] = useState(false);
  const navigate = useNavigate(); const results = filterTools(query, category, kind);
  return <main dir="rtl" className="min-h-dvh bg-background text-foreground">
    <header className="flex items-center gap-3 border-b px-4 py-3 sm:px-8"><Button asChild variant="ghost" size="icon" aria-label="العودة للمحادثات"><Link to="/"><ArrowRight/></Link></Button><BrandMark/><span className="flex-1 font-bold">Hazem-Tech AI Studio</span><AccountControl/></header>
    <section className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-8">
      <h1 className="text-3xl font-bold">الأدوات والمهارات</h1>
      <div className="flex flex-wrap items-center gap-4"><label className="relative min-w-0 flex-1"><Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground"/><Input aria-label="بحث في الأدوات والمهارات" placeholder="بحث في الأدوات والمهارات" value={query} onChange={e => setQuery(e.target.value)} className="pr-9"/></label><Tabs value={kind} onValueChange={v => { if (v === "all" || v === "tool" || v === "skill") setKind(v); }}><TabsList><TabsTrigger value="all">الكل</TabsTrigger><TabsTrigger value="tool">الأدوات</TabsTrigger><TabsTrigger value="skill">المهارات</TabsTrigger></TabsList></Tabs></div>
      <nav aria-label="التصنيفات" className="flex flex-wrap gap-2">{["all", ...new Set(STUDIO_TOOLS.map(t => t.category))].map(c => <Button key={c} variant={category === c ? "default" : "outline"} aria-pressed={category === c} onClick={() => setCategory(c)}>{c === "all" ? "كل التصنيفات" : c}</Button>)}</nav>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{results.map(t => { const Icon = t.category === "البرمجة" ? Code2 : t.category === "البيانات" ? ChartNoAxesCombined : t.category === "التعلّم" ? GraduationCap : FileText; return <article key={t.id} className="flex min-h-44 flex-col gap-4 rounded-lg border bg-surface p-5"><div className="flex items-center justify-between"><Icon className="h-6 w-6 text-primary"/><span className="text-xs text-muted-foreground">{t.kind === "skill" ? "مهارة" : "أداة"} · {t.category}</span></div><h2 className="flex-1 text-lg font-semibold">{t.title}</h2><Button variant="outline" onClick={() => { setSelected(t); setText(""); setFiles([]); setError(""); }}><Play className="h-4 w-4"/>فتح</Button></article>; })}</div>
      {!results.length && <p role="status" className="py-12 text-center text-muted-foreground">لا توجد نتائج مطابقة.</p>}
      <DocumentWorkbench />
    </section>
    <Dialog open={!!selected} onOpenChange={o => { if (!o) setSelected(null); }}><DialogContent dir="rtl" className="max-h-[90dvh] overflow-y-auto"><DialogHeader className="text-right"><DialogTitle>{selected?.title}</DialogTitle><DialogDescription>{selected?.category}</DialogDescription></DialogHeader><form className="space-y-4" onSubmit={e => { e.preventDefault(); if (!selected || (!text.trim() && !files.length)) return; try { sessionStorage.setItem(TOOL_DRAFT_KEY, JSON.stringify({ text: `${selected.prompt}\n\n${text.trim()}`, files })); void navigate({ to: "/" }); } catch { setError("الملفات كبيرة على مساحة المتصفح. جرّب ملفاً أصغر."); } }}><label className="block space-y-2">المحتوى أو الطلب<textarea aria-label="المحتوى أو الطلب" value={text} onChange={e => setText(e.target.value)} rows={6} className="w-full resize-y rounded-md border bg-background p-3"/></label>{selected?.acceptsFiles && <label className="flex cursor-pointer items-center gap-2 text-sm"><Paperclip className="h-4 w-4"/>إرفاق ملف نصي أو صورة<input aria-label="ملف الأداة" type="file" disabled={busy} onChange={async e => { const file = e.target.files?.[0]; if (!file) return; setBusy(true); setError(""); try { setFiles([await readAttachment(file)]); } catch (failure) { setError((failure as Error).message); } finally { setBusy(false); } }}/></label>}{files.map(f => <p key={f.id} className="break-all text-sm">{f.name}</p>)}{error && <p role="alert" className="text-destructive">{error}</p>}<Button disabled={busy || (!text.trim() && !files.length)} type="submit" className="w-full"><Play/>المتابعة في المحادثة</Button></form></DialogContent></Dialog>
  </main>;
}