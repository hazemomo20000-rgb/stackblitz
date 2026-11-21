import { describe, expect, it } from "vitest";
import { reconcileChats, conflictCopy } from "@/lib/conversation-sync";
import type { Conversation } from "@/lib/chat-store";
const chat: Conversation = { id: "one", title: "سؤال", model: "model", pinned: true, createdAt: 1, updatedAt: 2, messages: [{ id: "m", role: "user", text: "اختبار", createdAt: 1 }] };
describe("cross-device reconciliation", () => {
  it("restores complete remote conversations", () => expect(reconcileChats([{ id: "one", payload: chat, revision: 1, deleted: false }], new Map())).toEqual([chat]));
  it("does not resurrect remotely deleted chats", () => expect(reconcileChats([{ id: "one", payload: chat, revision: 2, deleted: true }], new Map())).toEqual([]));
  it("retains unsaved local edits", () => expect(reconcileChats([], new Map([["one", chat]]))).toEqual([chat]));
  it("preserves conflicting messages in a separate conversation", () => { const copy = conflictCopy(chat, "copy"); expect(copy.id).toBe("copy"); expect(copy.messages).toEqual(chat.messages); expect(copy.id).not.toBe(chat.id); });
  it("restores attachment contents, model and pinned state", () => {
    const full: Conversation = { ...chat, messages: [{ ...chat.messages[0], id: "file", role: "user", text: "اقرأ", createdAt: 1, attachments: [{ id: "pdf", name: "تقرير.pdf", mime: "application/pdf", size: 120, kind: "text", data: "مبيعات 123" }] }] };
    expect(reconcileChats([{ id: full.id, payload: full, revision: 1, deleted: false }], new Map())).toEqual([full]);
  });
});