import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { accountHead } from "@/lib/page-head";
import { useAccount } from "@/components/studio/AccountProvider";
export const Route = createFileRoute("/reset-password")({ head: () => accountHead("تعيين كلمة مرور", "تعيين كلمة مرور جديدة لحساب Hazem-Tech من رابط الاستعادة."), component: ResetPassword });
function ResetPassword() {
  const [valid, setValid] = useState(false); const [password, setPassword] = useState(""); const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false); const [error, setError] = useState(""); const [done, setDone] = useState(false);
  const { recovery: recoverySession, user } = useAccount();
  useEffect(() => {
    const recovery = new URLSearchParams(window.location.hash.slice(1)).get("type") === "recovery";
    void supabase.auth.getUser().then(({ data }) => setValid(recovery && !!data.user));
  }, []);
  useEffect(() => { if (recoverySession && user) setValid(true); }, [recoverySession, user]);
  return <main dir="rtl" className="mx-auto flex min-h-dvh max-w-sm flex-col justify-center gap-5 px-5"><h1 className="text-2xl font-bold">كلمة مرور جديدة</h1>
    {done ? <p role="status" className="text-success">تم تغيير كلمة المرور.</p> : valid ? <form className="space-y-4" onSubmit={async (e) => {
      e.preventDefault(); setError(""); if (password !== confirm) { setError("كلمتا المرور غير متطابقتين."); return; }
      setBusy(true); try { const { error: failure } = await supabase.auth.updateUser({ password }); if (failure) throw failure; setDone(true); } catch (e) { setError((e as Error).message); } finally { setBusy(false); }
    }}><label className="block space-y-2">كلمة المرور الجديدة<Input type="password" dir="ltr" autoComplete="new-password" minLength={8} required value={password} onChange={(e) => setPassword(e.target.value)}/></label><label className="block space-y-2">تأكيد كلمة المرور<Input type="password" dir="ltr" autoComplete="new-password" minLength={8} required value={confirm} onChange={(e) => setConfirm(e.target.value)}/></label>{error && <p role="alert" className="text-destructive">{error}</p>}<Button type="submit" disabled={busy} className="w-full">حفظ كلمة المرور</Button></form> : <p role="alert">افتح رابط الاستعادة من بريدك، أو اطلب رابطاً جديداً.</p>}
    <Button asChild variant="outline"><Link to="/auth">العودة لتسجيل الدخول</Link></Button>
  </main>;
}