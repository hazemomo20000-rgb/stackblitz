import type { Attachment } from "./files";

export type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
  attachments?: Omit<Attachment, "data">[] & { data?: string }[];
  error?: string;
  createdAt: number;
};
export type Conversation = {
  id: string;
  title: string;
  pinned: boolean;
  model: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
};

export const STORE_KEY = "hazem_studio_chats_v2";
export const LEGACY_KEY = "hazem_tech_chats";
export const MAX_CHATS = 500;

const uid = () => crypto.randomUUID();

/** Converts the original app's chats ({id,title,messages:[{role,text,rawText}]}) to v2. Legacy data is left untouched (rollback-safe). */
export function migrateLegacy(raw: unknown): Conversation[] {
  if (!Array.isArray(raw)) return [];
  const now = Date.now();
  return raw
    .filter((c): c is any => !!c && typeof c === "object")
    .map((c: any, i: number) => {
      const msgs = Array.isArray(c.messages) ? c.messages : [];
      const ts = Number(c.id) > 1e12 ? Number(c.id) : now - i * 1000;
      return {
        id: String(c.id ?? uid()),
        title: String(c.title ?? "محادثة").slice(0, 120),
        pinned: !!c.pinned,
        model: "openai/gpt-6-astra",
        createdAt: ts,
        updatedAt: ts,
        messages: msgs
          .filter((m: any) => m && typeof m === "object")
          .map((m: any) => ({
            id: uid(),
            role: m.role === "user" ? ("user" as const) : ("assistant" as const),
            text: String(m.rawText ?? stripHtml(String(m.text ?? ""))),
            createdAt: ts,
          })),
      };
    });
}

function stripHtml(s: string) {
  return s.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function parseStore(json: string | null): Conversation[] {
  if (!json) return [];
  try {
    const v = JSON.parse(json);
    if (v && v.version === 2 && Array.isArray(v.chats)) return v.chats.filter(isConversation);
  } catch { /* corrupt store → start empty, legacy untouched */ }
  return [];
}

function isConversation(c: any): c is Conversation {
  return c && typeof c.id === "string" && Array.isArray(c.messages);
}

export function loadChats(): Conversation[] {
  if (typeof window === "undefined") return [];
  const cur = localStorage.getItem(STORE_KEY);
  if (cur !== null) return parseStore(cur);
  let legacy: unknown = [];
  try { legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) || "[]"); } catch { legacy = []; }
  const migrated = migrateLegacy(legacy);
  saveChats(migrated);
  return migrated;
}

export function saveChats(chats: Conversation[]) {
  try {
    // Strip image data from older chats to stay within storage quota.
    const slim = chats.slice(0, MAX_CHATS);
    localStorage.setItem(STORE_KEY, JSON.stringify({ version: 2, chats: slim }));
  } catch {
    /* quota exceeded — keep in memory */
  }
}

export function newConversation(model: string): Conversation {
  const now = Date.now();
  return { id: uid(), title: "محادثة جديدة", pinned: false, model, messages: [], createdAt: now, updatedAt: now };
}

export function titleFrom(text: string) {
  const t = text.replace(/\s+/g, " ").trim();
  return t ? (t.length > 48 ? t.slice(0, 48) + "…" : t) : "محادثة جديدة";
}

type G = { label: string; items: Conversation[] };
export function groupChats(chats: Conversation[], now = Date.now()) {
  const day = 86400000;
  const groups: [G, G, G, G] = [
    { label: "مثبّتة", items: [] }, { label: "اليوم", items: [] }, { label: "آخر 7 أيام", items: [] }, { label: "أقدم", items: [] },
  ];
  for (const c of [...chats].sort((a, b) => b.updatedAt - a.updatedAt)) {
    if (c.pinned) groups[0].items.push(c);
    else if (now - c.updatedAt < day) groups[1].items.push(c);
    else if (now - c.updatedAt < 7 * day) groups[2].items.push(c);
    else groups[3].items.push(c);
  }
  return groups.filter((g) => g.items.length);
}
