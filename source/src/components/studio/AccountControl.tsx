import { useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { UserRound, LogOut, Camera, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { validateAvatar } from "@/lib/account-rules";
import { useAccount } from "./AccountProvider";
import { useProfile } from "@/hooks/use-profile";
import { DeviceSessions } from "./DeviceSessions";

export function AccountControl() {
  const { user, ready } = useAccount(); const profile = useProfile();
  const [open, setOpen] = useState(false); const [name, setName] = useState(""); const [busy, setBusy] = useState(false); const [error, setError] = useState("");
  const uploadRef = useRef<HTMLInputElement>(null); const queryClient = useQueryClient(); const navigate = useNavigate();
  if (!ready) return <span className="h-9 w-20 animate-pulse rounded-md bg-surface"/>;
  if (!user) return <Button variant="outline" asChild><Link to="/auth"><UserRound/>تسجيل الدخول</Link></Button>;
  const id = user.id;
  async function update(fields: { display_name?: string; avatar_path?: string | null }) {
    const { error, data } = await supabase.from("profiles").update(fields).eq("id", id).select("id").single();
    if (error || !data) throw error || new Error("تعذّر حفظ الملف الشخصي.");
    await queryClient.invalidateQueries({ queryKey: ["profile", id] });
  }
  async function avatar(file?: File) {
    if (!file) return;
    setBusy(true); setError(""); let path: string | undefined;
    try {
      validateAvatar(file);
      // Decode and re-encode: reject forged MIME and strip metadata before storage.
      const bitmap = await createImageBitmap(file);
      const canvas = document.createElement("canvas"); const ratio = Math.min(1, 512 / Math.max(bitmap.width, bitmap.height));
      canvas.width = Math.max(1, Math.round(bitmap.width * ratio)); canvas.height = Math.max(1, Math.round(bitmap.height * ratio));
      const ctx = canvas.getContext("2d"); if (!ctx) { bitmap.close(); throw new Error("تعذّر تجهيز الصورة."); }
      ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height); bitmap.close();
      const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob((b) => b ? resolve(b) : reject(new Error("تعذّر تجهيز الصورة.")), "image/webp", 0.85));
      path = `${id}/${crypto.randomUUID()}.webp`;
      const old = profile.data?.avatar_path;
      const result = await supabase.storage.from("avatars").upload(path, blob, { contentType: "image/webp" });
      if (result.error) throw result.error;
      await update({ avatar_path: path });
      path = undefined;
      if (old) await supabase.storage.from("avatars").remove([old]);
      toast.success("تم حفظ الصورة");
    } catch (e) { if (path) await supabase.storage.from("avatars").remove([path]); setError((e as Error).message); } finally { setBusy(false); }
  }
  return <>
    <Button variant="ghost" className="max-w-40 gap-2" aria-label="الملف الشخصي" onClick={() => { setName(profile.data?.display_name || ""); setError(""); setOpen(true); }}>
      {profile.data?.avatarUrl ? <img src={profile.data.avatarUrl} className="h-7 w-7 shrink-0 rounded-full object-cover" alt="صورتك"/> : <UserRound/>}
      <span className="hidden truncate sm:inline">{profile.data?.display_name || "حسابي"}</span>
    </Button>
    <Dialog open={open} onOpenChange={setOpen}><DialogContent dir="rtl" className="max-h-[90dvh] overflow-y-auto sm:max-w-md"><DialogHeader className="text-right"><DialogTitle>الملف الشخصي</DialogTitle><DialogDescription className="break-all" dir="ltr">{user.email}</DialogDescription></DialogHeader>
      {profile.isLoading ? <p role="status">جارٍ تحميل الملف…</p> : profile.isError ? <><p role="alert" className="text-destructive">تعذّر تحميل الملف الشخصي.</p><Button variant="outline" onClick={() => void profile.refetch()}>إعادة المحاولة</Button></> : <>
        <div className="flex items-center gap-4">{profile.data?.avatarUrl ? <img src={profile.data.avatarUrl} alt="الصورة الشخصية" className="h-20 w-20 rounded-full object-cover"/> : <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-accent"><UserRound className="h-8 w-8 text-primary"/></div>}<div className="space-y-2"><input ref={uploadRef} type="file" accept="image/png,image/jpeg,image/webp" hidden onChange={(e) => { void avatar(e.target.files?.[0]); e.target.value = ""; }}/><Button variant="outline" disabled={busy} onClick={() => uploadRef.current?.click()}><Camera/>تغيير الصورة</Button><p className="text-xs text-muted-foreground">PNG، JPEG، WebP · حتى 5MB</p>{profile.data?.avatar_path && <Button variant="ghost" disabled={busy} onClick={async () => { setBusy(true); setError(""); try { const old = profile.data?.avatar_path; await update({ avatar_path: null }); if (old) await supabase.storage.from("avatars").remove([old]); } catch (e) { setError((e as Error).message); } finally { setBusy(false); } }}><Trash2/>إزالة الصورة</Button>}</div></div>
        <form className="space-y-4" onSubmit={async (e) => { e.preventDefault(); setBusy(true); setError(""); try { await update({ display_name: name.trim() }); toast.success("تم حفظ الاسم"); } catch (e) { setError((e as Error).message); } finally { setBusy(false); } }}><label className="block space-y-2">الاسم<Input value={name} onChange={(e) => setName(e.target.value)} maxLength={80} required autoComplete="name"/></label><Button type="submit" disabled={busy} className="w-full">{busy ? "جارٍ الحفظ…" : "حفظ الاسم"}</Button></form>
      </>}
      {error && <p role="alert" className="break-words text-sm text-destructive">{error}</p>}
      <DeviceSessions/>
      <Button variant="outline" disabled={busy} onClick={async () => { setBusy(true); setError(""); try { await queryClient.cancelQueries(); queryClient.clear(); const result = await supabase.auth.signOut({ scope: "local" }); if (result.error) throw result.error; setOpen(false); await navigate({ to: "/auth", replace: true }); } catch (e) { setError((e as Error).message); } finally { setBusy(false); } }}><LogOut/>تسجيل الخروج من هذا الجهاز</Button>
    </DialogContent></Dialog>
  </>;
}