import { SYSTEM_PROMPT } from "./system-prompt";
import type { Message } from "./chat-store";

export const GEMINI_API_KEYS: readonly string[] = [
  "AQ.Ab8RN6I63YIuiCJ6JYuUkYmYxgcuWtyAuQhs5HgzyB7Kuvq-qA",
  "AQ.Ab8RN6IoUDjelQUVEqZGX44DiZjMazK0zXibpqk4W4XfSkcw0g",
  "AQ.Ab8RN6IqWsivWQjOqD6Y0xtr6dozQrWvLt1_SrMysBZlU950sg",
];

let nextKeyIndex = 0;

function getOrderedKeys(): string[] {
  const keys = GEMINI_API_KEYS.map((k) => k.trim()).filter(Boolean);
  if (keys.length === 0) return [];
  const start = nextKeyIndex % keys.length;
  return [...keys.slice(start), ...keys.slice(0, start)];
}

function advanceKeyIndex(usedKey: string): void {
  const keys = GEMINI_API_KEYS.map((k) => k.trim()).filter(Boolean);
  const idx = keys.indexOf(usedKey);
  if (idx >= 0 && keys.length > 0) {
    nextKeyIndex = (idx + 1) % keys.length;
  } else if (keys.length > 0) {
    nextKeyIndex = (nextKeyIndex + 1) % keys.length;
  }
}

export function loadKeys(): string[] {
  return [...GEMINI_API_KEYS];
}

export function saveKeys(_keys: string[]): void {
  // Keys are managed internally in code
}

export const validKeys = (_keys = loadKeys()): string[] =>
  GEMINI_API_KEYS.map((k) => k.trim()).filter(Boolean);

function toContents(history: Message[]) {
  return history.map((m) => {
    const parts: any[] = [];
    for (const a of (m.attachments ?? []) as any[]) {
      if (a.kind === "image" && a.data) {
        const [, mime, b64] = /^data:([^;]+);base64,(.*)$/.exec(a.data) ?? [];
        if (b64) parts.push({ inline_data: { mime_type: mime, data: b64 } });
      } else if (a.kind === "text" && a.data) {
        parts.push({ text: `--- ملف: ${a.name} ---\n${a.data}` });
      }
    }
    parts.push({ text: m.text || " " });
    return { role: m.role === "user" ? "user" : "model", parts };
  });
}

function isRetryableStatus(status: number): boolean {
  return status === 429 || status === 403 || status >= 500;
}

export async function streamGemini(
  model: string,
  history: Message[],
  onDelta: (t: string) => void,
  signal: AbortSignal
) {
  const orderedKeys = getOrderedKeys();
  if (orderedKeys.length === 0) {
    throw new Error("لا توجد مفاتيح Gemini مفعّلة في الكود.");
  }

  let lastError: Error = new Error("تعذّر الاتصال بـ Gemini.");

  for (let i = 0; i < orderedKeys.length; i++) {
    if (signal.aborted) {
      throw new DOMException("Aborted", "AbortError");
    }

    const apiKey = orderedKeys[i]!;
    let streamedAnyText = false;

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:streamGenerateContent?alt=sse`,
        {
          method: "POST",
          signal,
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey,
          },
          body: JSON.stringify({
            contents: toContents(history),
            systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          }),
        }
      );

      if (!res.ok || !res.body) {
        const msg =
          res.status === 429
            ? "تم تجاوز حد الاستخدام لهذا المفتاح."
            : `خطأ من Gemini (${res.status}).`;
        const err = new Error(msg);
        if (isRetryableStatus(res.status)) {
          advanceKeyIndex(apiKey);
          lastError = err;
          continue;
        }
        throw err;
      }

      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let buf = "";

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        let nl: number;
        while ((nl = buf.indexOf("\n")) >= 0) {
          const line = buf.slice(0, nl).trim();
          buf = buf.slice(nl + 1);
          if (!line.startsWith("data:")) continue;
          try {
            const j = JSON.parse(line.slice(5));
            const t = (j.candidates?.[0]?.content?.parts ?? [])
              .filter((p: any) => !p.thought)
              .map((p: any) => p.text ?? "")
              .join("");
            if (t) {
              streamedAnyText = true;
              onDelta(t);
            }
          } catch {
            /* partial line */
          }
        }
      }

      return;
    } catch (e) {
      if ((e as Error).name === "AbortError") {
        throw e;
      }
      if (!streamedAnyText && i < orderedKeys.length - 1) {
        advanceKeyIndex(apiKey);
        lastError = e as Error;
        continue;
      }
      throw e;
    }
  }

  throw lastError;
}
