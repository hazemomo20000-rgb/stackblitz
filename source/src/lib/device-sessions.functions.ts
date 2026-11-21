import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
export const registerDevice = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator(z.object({ label: z.string().min(1).max(80) })).handler(async ({ data, context }) => {
  const sessionId = context.claims["session_id"];
  if (typeof sessionId !== "string") throw new Error("تعذّر تحديد الجلسة.");
  const result = await context.supabase.from("studio_device_sessions").upsert({ user_id: context.userId, session_id: sessionId, device_label: data.label, last_seen: new Date().toISOString() });
  if (result.error) throw new Error("تعذّر حفظ الجهاز.");
  const list = await context.supabase.from("studio_device_sessions").select("session_id,device_label,last_seen").eq("user_id", context.userId).order("last_seen", { ascending: false });
  if (list.error) throw new Error("تعذّر تحميل الأجهزة.");
  return { currentId: sessionId, devices: list.data };
});