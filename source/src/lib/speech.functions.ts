import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const startSpeech = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(z.object({ text: z.string().trim().min(1).max(1200) }))
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const state = await supabaseAdmin.from("studio_speech_access").select("blocked,reason,status").eq("user_id", context.userId).maybeSingle();
    if (state.error) throw new Error("تعذّر التحقق من إتاحة الصوت.");
    if (state.data?.blocked) throw new Error(state.data.reason);
const key = process.env["AI_GATEWAY_API_KEY"] || process.env["LOVABLE_API_KEY"];
    if (!key) throw new Error("خدمة الصوت غير مهيأة.");
    const { requestSpeech } = await import("./speech-request.server");
    const response = await requestSpeech({ baseURL: "https://ai.gateway.lovable.dev", apiKey: key, model: "google/gemini-3.1-flash-tts-preview", format: "gemini", voice: "Kore" }, data.text);
    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      const reason = body.message || body.error?.message || `تعذّرت القراءة الصوتية (${response.status}).`;
      if (response.status === 402 || response.status === 403) await supabaseAdmin.from("studio_speech_access").upsert({ user_id: context.userId, blocked: true, reason, status: response.status });
      throw new Error(reason);
    }
    return new Response(response.body, { status: response.status, headers: { "Content-Type": response.headers.get("Content-Type") || "text/event-stream", "Cache-Control": "no-cache" } });
  });