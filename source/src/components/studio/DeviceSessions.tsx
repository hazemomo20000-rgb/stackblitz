import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { MonitorSmartphone, LogOut } from "lucide-react";
import { registerDevice } from "@/lib/device-sessions.functions";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
export function DeviceSessions() {
  const register = useServerFn(registerDevice); const [data, setData] = useState<Awaited<ReturnType<typeof registerDevice>>>(); const [error, setError] = useState(""); const [busy, setBusy] = useState(false);
  useEffect(() => { void register({ data: { label: /Android|iPhone|Mobile/i.test(navigator.userAgent) ? "هاتف · متصفح" : "كمبيوتر · متصفح" } }).then(setData).catch(() => setError("تعذّر تحميل الأجهزة.")); }, [register]);
  return <section className="space-y-3 border-t pt-4"><h3 className="flex items-center gap-2 font-semibold"><MonitorSmartphone/>الأجهزة والجلسات</h3><p className="text-xs text-muted-foreground">أجهزة فتحت التطبيق بهذا الحساب؛ آخر ظهور ليس ضماناً لاستمرار الجلسة.</p>{data?.devices.map(d => <div key={d.session_id} className="flex flex-wrap justify-between gap-2 text-sm"><span>{d.device_label}{d.session_id === data.currentId ? " · هذا الجهاز" : ""}</span><time className="text-xs text-muted-foreground">{new Date(d.last_seen).toLocaleString("ar-EG")}</time></div>)}{error && <p role="status" className="text-sm text-destructive">{error}</p>}<Button variant="outline" disabled={busy} className="w-full" onClick={async () => { setBusy(true); setError(""); const result = await supabase.auth.signOut({ scope: "others" }); if (result.error) setError("تعذّر إنهاء الجلسات الأخرى."); else setError("تم إلغاء تجديد الجلسات الأخرى؛ قد يظل الوصول سارياً حتى انتهاء رمز الدخول الحالي."); setBusy(false); }}><LogOut/>تسجيل خروج الأجهزة الأخرى</Button></section>;
}