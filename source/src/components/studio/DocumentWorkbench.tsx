import { useState } from "react";
import { FileDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConversations } from "@/hooks/use-conversations";
import { readAttachment } from "@/lib/files";
import { printDocument } from "@/lib/document-export";

export function DocumentWorkbench() {
  const { chats } = useConversations();
  const [text, setText] = useState(""); const [title, setTitle] = useState("مستند Hazem-Tech");
  const [busy, setBusy] = useState(false); const [error, setError] = useState("");
  return <section className="space-y-4 border-t pt-6">
    <h2 className="flex items-center gap-2 text-xl font-semibold"><FileText/>المستندات</h2>
    <div className="flex flex-wrap gap-3">
      <label className="min-w-0 space-y-2">قراءة PDF أو Office<input className="block max-w-full text-sm" aria-label="قراءة PDF أو Office" type="file" accept=".pdf,.docx,.xlsx,.pptx" disabled={busy} onChange={async e => { const f = e.target.files?.[0]; if (!f) return; setBusy(true); setError(""); try { const a = await readAttachment(f); setText(a.data); setTitle(a.name); } catch (err) { setError((err as Error).message); } finally { setBusy(false); e.target.value = ""; } }}/></label>
      <label className="min-w-0 space-y-2">من محادثة<select aria-label="اختيار محادثة للتصدير" className="block w-full rounded-md border bg-background p-2" defaultValue="" onChange={e => { const c = chats.find(c => c.id === e.target.value); if (c) { setTitle(c.title); setText(c.messages.map(m => `${m.role === "user" ? "أنت" : "Hazem-Tech"}\n${m.text}`).join("\n\n")); } }}><option value="">اختر محادثة</option>{chats.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}</select></label>
    </div>
    <label className="block space-y-2">النص<textarea aria-label="نص المستند" className="w-full rounded-md border bg-background p-3" rows={8} value={text} onChange={e => setText(e.target.value)}/></label>
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" disabled={!text.trim() || busy} onClick={() => { setError(""); try { printDocument(title, text); } catch (err) { setError((err as Error).message); } }}><FileDown/>طباعة / حفظ PDF</Button>
      <Button variant="outline" disabled title="لم يكتمل ربط Google Docs">Google Docs · غير مفعّل</Button>
    </div>
    {error && <p role="alert" className="break-words text-destructive">{error}</p>}
  </section>;
}