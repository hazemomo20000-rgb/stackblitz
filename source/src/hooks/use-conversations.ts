import { useCallback, useEffect, useRef, useState, type SetStateAction } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAccount } from "@/components/studio/AccountProvider";
import { loadChats, saveChats, parseStore, type Conversation } from "@/lib/chat-store";
import { conflictCopy, reconcileChats, type CloudConversation } from "@/lib/conversation-sync";

export function useConversations() {
  const { user, ready } = useAccount();
  const [chats, render] = useState<Conversation[]>([]); const [sync, setSync] = useState("جارٍ تحميل المحادثات…");
  const current = useRef<Conversation[]>([]); const pending = useRef(new Map<string, Conversation | null>());
  const identity = useRef<string | undefined>(undefined); const initialized = useRef(false); const running = useRef(false);
  const synchronize = useRef<() => Promise<void>>(async () => {});
  const [version, setVersion] = useState(0);
  const setChats = useCallback((action: SetStateAction<Conversation[]>) => {
    const before = current.current; const next = typeof action === "function" ? action(before) : action;
    if (!initialized.current) return;
    if (identity.current) {
      for (const c of next) if (JSON.stringify(before.find(x => x.id === c.id)) !== JSON.stringify(c)) pending.current.set(c.id, c);
      for (const c of before) if (!next.some(x => x.id === c.id)) pending.current.set(c.id, null);
      setSync("جارٍ حفظ المحادثات…");
      try { localStorage.setItem(`hazem_account_chats_${identity.current}`, JSON.stringify({ version: 2, chats: next, pending: [...pending.current] })); } catch { setSync("المساحة المحلية ممتلئة؛ جارٍ محاولة الحفظ في الحساب…"); }
    } else saveChats(next);
    current.current = next; render(next); setVersion(v => v + 1);
  }, []);
  useEffect(() => {
    if (!ready) return;
    const accountId = user?.id; identity.current = accountId; initialized.current = false; pending.current = new Map(); running.current = false;
    const id = accountId ?? "";
    let alive = true; const revisions = new Map<string, number>();
    const key = id ? `hazem_account_chats_${id}` : "";
    let cached: Conversation[] = [];
    if (id) {
      try { const raw = localStorage.getItem(key); cached = parseStore(raw); const saved = JSON.parse(raw || "{}"); if (Array.isArray(saved.pending)) pending.current = new Map(saved.pending); } catch { /* retain server as source */ }
    } else cached = loadChats();
    current.current = cached; render(cached);
    if (!id) { initialized.current = true; setSync("المحادثات محفوظة في هذا المتصفح"); return; }
    const dirty = pending.current;
    const persist = () => { try { localStorage.setItem(key, JSON.stringify({ version: 2, chats: current.current, pending: [...dirty] })); } catch { /* server save remains active */ } };
    async function run() {
      if (!alive || running.current || !navigator.onLine) return;
      running.current = true;
      try {
        const result = await supabase.from("studio_conversations").select("id,payload,revision,deleted").eq("user_id", id);
        if (result.error) throw result.error; if (!alive) return;
        let rows = (result.data || []) as unknown as CloudConversation[];
        for (const r of rows) if (!revisions.has(r.id)) revisions.set(r.id, r.revision);
        if (!initialized.current && !localStorage.getItem(`${key}_imported`)) {
          for (const c of loadChats()) if (!rows.some(r => r.id === c.id) && !dirty.has(c.id)) dirty.set(c.id, c);
        }
        initialized.current = true;
        for (const [cid, change] of [...dirty]) {
          const payload = change || rows.find(r => r.id === cid)?.payload;
          if (!payload) { dirty.delete(cid); continue; }
          const saved = await supabase.rpc("save_studio_conversation", { p_id: cid, p_payload: payload as any, p_revision: revisions.get(cid) || 0, p_deleted: change === null });
          if (saved.error) throw saved.error; if (!alive) return;
          const answer = saved.data as unknown as { saved: boolean; row: CloudConversation };
          if (!answer.saved && change) { const copy = conflictCopy(change); dirty.set(copy.id, copy); }
          if (dirty.get(cid) === change) dirty.delete(cid);
          revisions.set(cid, answer.row.revision);
          rows = [...rows.filter(r => r.id !== cid), answer.row];
        }
        for (const r of rows) if (!dirty.has(r.id)) revisions.set(r.id, r.revision);
        current.current = reconcileChats(rows, dirty); render(current.current); persist();
        if (!dirty.size) { localStorage.setItem(`${key}_imported`, "1"); setSync("المحادثات محفوظة في حسابك"); }
        else setSync("جارٍ حفظ المحادثات…");
      } catch { if (alive) { initialized.current = true; persist(); setSync("تعذّرت مزامنة المحادثات؛ أعد المحاولة"); } }
      finally { if (alive) running.current = false; }
    }
    synchronize.current = run; void run(); const timer = setInterval(() => void run(), 5000);
    const wake = () => void run(); window.addEventListener("online", wake); window.addEventListener("focus", wake);
    return () => { alive = false; clearInterval(timer); window.removeEventListener("online", wake); window.removeEventListener("focus", wake); };
  }, [user?.id, ready]);
  useEffect(() => { const timer = setTimeout(() => void synchronize.current(), 750); return () => clearTimeout(timer); }, [version]);
  return { chats, setChats, sync, retry: () => void synchronize.current() };
}