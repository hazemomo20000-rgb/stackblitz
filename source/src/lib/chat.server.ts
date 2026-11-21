import { createOpenAI } from "@ai-sdk/openai";
import { streamText, type ModelMessage } from "ai";
import { SYSTEM_PROMPT } from "./system-prompt";

type InMsg = { role: "user" | "assistant"; text: string; images?: string[]; files?: { name: string; text: string }[] };
const MAX_BODY = 12 * 1024 * 1024;
const ALLOWED = new Set(["openai/gpt-6-astra"]);
const json = (status: number, error: string) => new Response(JSON.stringify({ error }), { status, headers: { "Content-Type": "application/json" } });

export async function handleChat(request: Request) {
const apiKey = process.env["AI_GATEWAY_API_KEY"] || process.env["LOVABLE_API_KEY"];
  if (!apiKey) return json(500, "الخدمة غير مهيأة.");
  const len = Number(request.headers.get("content-length") || 0);
  if (len > MAX_BODY) return json(413, "الطلب كبير جداً.");
  let body: { model?: string; messages?: InMsg[] };
  try { body = await request.json(); } catch { return json(400, "طلب غير صالح."); }
  const model = ALLOWED.has(body.model ?? "") ? body.model! : "openai/gpt-6-astra";
  const input = Array.isArray(body.messages) ? body.messages.slice(-40) : [];
  if (!input.length) return json(400, "لا توجد رسائل.");

  const messages: ModelMessage[] = input.map((m) => {
    const text = String(m.text ?? "").slice(0, 100_000);
    if (m.role === "assistant") return { role: "assistant", content: text || " " };
    const parts: any[] = [];
    for (const f of (m.files ?? []).slice(0, 6)) parts.push({ type: "text", text: `--- ملف: ${String(f.name).slice(0, 200)} ---\n${String(f.text).slice(0, 200_000)}` });
    for (const img of (m.images ?? []).slice(0, 6)) if (/^data:image\/(png|jpeg|webp|gif);base64,/.test(img)) parts.push({ type: "image", image: img });
    parts.push({ type: "text", text: text || " " });
    return { role: "user", content: parts };
  });

  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
  });
  try {
    const result = streamText({
      model: provider.responses(model),
      system: SYSTEM_PROMPT,
      messages,
      abortSignal: request.signal,
      providerOptions: { openai: { store: false, forceReasoning: true, reasoningEffort: "low", reasoningSummary: "auto", include: ["reasoning.encrypted_content"] } },
      onError: ({ error }) => console.error("chat stream error", (error as Error)?.message),
    });
    return result.toTextStreamResponse();
  } catch (e) {
    const status = (e as any)?.statusCode;
    if (status === 429) return json(429, "ضغط كبير حالياً، حاول بعد قليل.");
    if (status === 402) return json(402, "نفد رصيد الذكاء الاصطناعي في مساحة العمل.");
    return json(502, "تعذّر الحصول على رد.");
  }
}
