import type { Conversation } from "./chat-store";
export type CloudConversation = { id: string; payload: Conversation; revision: number; deleted: boolean };
export function reconcileChats(remote: CloudConversation[], pending: Map<string, Conversation | null>): Conversation[] {
  const chats = new Map(remote.filter(r => !r.deleted).map(r => [r.id, r.payload]));
  for (const [id, chat] of pending) { if (chat) chats.set(id, chat); else chats.delete(id); }
  return [...chats.values()].sort((a, b) => b.updatedAt - a.updatedAt);
}
export function conflictCopy(chat: Conversation, id: string = crypto.randomUUID()): Conversation {
  return { ...chat, id, title: `${chat.title} — نسخة تعارض`, updatedAt: Date.now() };
}