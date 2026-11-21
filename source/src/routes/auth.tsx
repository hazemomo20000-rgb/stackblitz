import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrandMark } from "@/components/studio/icons";
import { GoogleButton } from "@/components/studio/GoogleButton";
import { useAccount } from "@/components/studio/AccountProvider";
import { accountHead } from "@/lib/page-head";

export const Route = createFileRoute("/auth")({
  head: () => accountHead("تسجيل الدخول", "ادخل إلى حساب Hazem-Tech واحفظ ملفك الشخصي وتفضيلاتك."),
  component: AuthPage,
});

type AuthMode = "login" | "signup" | "forgot";

const LOCAL_URL = "http://localhost:8158";

function friendlyAuthError(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error || "");
  const normalized = message.toLowerCase();
  if (normalized.includes("invalid login credentials")) return "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
  if (normalized.includes("email not confirmed")) return "يجب تأكيد بريدك الإلكتروني أولاً. راجع صندوق الوارد.";
  if (normalized.includes("user already registered")) return "هذا البريد مسجّل بالفعل. جرّب تسجيل الدخول.";
  if (normalized.includes("password should be at least")) return "كلمة المرور يجب ألا تقل عن 8 أحرف.";
  if (normalized.includes("network") || normalized.includes("fetch")) return "تعذّر الاتصال بالخدمة. تحقق من الإنترنت وحاول مرة أخرى.";
  return message || "حدث خطأ غير متوقع. حاول مرة أخرى.";
}

function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const { user, ready } = useAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (ready && user) void navigate({ to: "/", replace: true });
  }, [ready, user, navigate]);

  function changeMode(next: AuthMode) {
    setMode(next);
    setError("");
    setNotice("");
  }

  async function submit() {
    if (busy) return;
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const cleanEmail = email.trim().toLowerCase();
      if (!cleanEmail) throw new Error("اكتب البريد الإلكتروني.");
      if (mode !== "forgot" && !password) throw new Error("اكتب كلمة المرور.");

      if (mode === "forgot") {
        const result = await supabase.auth.resetPasswordForEmail(cleanEmail, {
          redirectTo: `${LOCAL_URL}/reset-password`,
        });
        if (result.error) throw result.error;
        setNotice("إذا كان البريد مسجلاً، ستصلك رسالة لاستعادة كلمة المرور.");
      } else if (mode === "signup") {
        const result = await supabase.auth.signUp({
          email: cleanEmail,
          password,
          options: {
            emailRedirectTo: `${LOCAL_URL}/`,
            data: { display_name: name.trim() },
          },
        });
        if (result.error) throw result.error;
        setNotice("تم إرسال طلب إنشاء الحساب. وصلتك رسالة على بريدك لتأكيد الحساب، ثم سجّل الدخول.");
      } else {
        const result = await supabase.auth.signInWithPassword({ email: cleanEmail, password });
        if (result.error) throw result.error;
        await navigate({ to: "/", replace: true });
      }
    } catch (failure) {
      setError(friendlyAuthError(failure));
    } finally {
      setBusy(false);
    }
  }

  async function google() {
    if (busy) return;
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const result = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${LOCAL_URL}/`,
        },
      });
      if (result.error) throw result.error;
    } catch (failure) {
      setError(friendlyAuthError(failure));
      setBusy(false);
    }
  }

  if (!ready) {
    return <main dir="rtl" className="grid min-h-dvh place-items-center px-5">
      <p role="status" className="text-sm text-muted-foreground">جارٍ التحقق من حالة تسجيل الدخول…</p>
    </main>;
  }

  return (
    <main dir="rtl" className="flex min-h-dvh items-center justify-center bg-background px-5 py-10">
      <section className="w-full max-w-sm space-y-6">
        <header className="flex flex-col items-center gap-3 text-center">
          <BrandMark width={44} height={44} />
          <h1 className="text-base font-bold">Hazem-Tech AI Studio</h1>
          <h2 className="text-2xl font-semibold">
            {mode === "signup" ? "إنشاء حساب جديد" : mode === "forgot" ? "استعادة كلمة المرور" : "تسجيل الدخول"}
          </h2>
        </header>

        {mode !== "forgot" && <GoogleButton onClick={() => void google()} disabled={busy} />}

        <form className="space-y-4 text-right" onSubmit={(event) => { event.preventDefault(); void submit(); }}>
          {mode === "signup" && (
            <label className="block space-y-2 text-sm font-medium">
              الاسم
              <Input value={name} onChange={(event) => setName(event.target.value)} required maxLength={80} autoComplete="name" placeholder="اسمك" />
            </label>
          )}
          <label className="block space-y-2 text-sm font-medium">
            البريد الإلكتروني
            <Input dir="ltr" type="email" inputMode="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="email" placeholder="name@example.com" />
          </label>
          {mode !== "forgot" && (
            <label className="block space-y-2 text-sm font-medium">
              كلمة المرور
              <Input dir="ltr" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required minLength={8} autoComplete={mode === "signup" ? "new-password" : "current-password"} placeholder="••••••••" />
            </label>
          )}
          {error && <p role="alert" className="break-words rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">{error}</p>}
          {notice && <p role="status" className="rounded-md border border-primary/20 bg-primary/5 p-3 text-sm">{notice}</p>}
          <Button className="w-full" disabled={busy} type="submit">
            {busy ? "جارٍ المتابعة…" : mode === "signup" ? "إنشاء حساب" : mode === "forgot" ? "إرسال رابط الاستعادة" : "دخول"}
          </Button>
        </form>

        <div className="flex items-center justify-between gap-3 text-sm">
          <Button variant="link" className="h-auto p-0" onClick={() => changeMode(mode === "signup" ? "login" : "signup")}>
            {mode === "signup" ? "لديك حساب جديد؟ تسجيل الدخول" : "إنشاء حساب جديد"}
          </Button>
          {mode !== "signup" && (
            <Button variant="link" className="h-auto p-0" onClick={() => changeMode(mode === "forgot" ? "login" : "forgot")}>
              {mode === "forgot" ? "العودة للدخول" : "نسيت كلمة المرور؟"}
            </Button>
          )}
        </div>
        <Button variant="ghost" asChild className="w-full">
          <Link to="/">العودة للمحادثات</Link>
        </Button>
      </section>
    </main>
  );
}
