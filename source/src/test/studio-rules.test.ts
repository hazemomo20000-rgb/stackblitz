import { describe, it, expect } from "vitest";
import { checkFile, MAX_FILE_BYTES } from "@/lib/files";
import { migrateLegacy, parseStore, groupChats } from "@/lib/chat-store";

describe("file validation", () => {
  it("rejects 0-byte files", () => expect(checkFile({ name: "a.txt", type: "text/plain", size: 0 }).ok).toBe(false));
  it("rejects files over 8MB", () => expect(checkFile({ name: "a.png", type: "image/png", size: MAX_FILE_BYTES + 1 }).ok).toBe(false));
  it("rejects fake extension (png MIME with .exe)", () => expect(checkFile({ name: "x.exe", type: "image/png", size: 10 }).ok).toBe(false));
  it("rejects disallowed MIME", () => expect(checkFile({ name: "x.zip", type: "application/zip", size: 10 }).ok).toBe(false));
  it("accepts Arabic file names", () => expect(checkFile({ name: "تقرير.txt", type: "text/plain", size: 10 })).toEqual({ ok: true, kind: "text" }));
  it("accepts jpeg image", () => expect(checkFile({ name: "p.jpg", type: "image/jpeg", size: 10 })).toEqual({ ok: true, kind: "image" }));
});

describe("chat storage", () => {
  it("migrates legacy chats using rawText", () => {
    const out = migrateLegacy([{ id: 1700000000000, title: "قديم", messages: [{ role: "user", text: "<b>hi</b>", rawText: "hi" }, { role: "model", text: "<p>hello</p>" }] }]);
    expect(out).toHaveLength(1);
    expect(out[0]!.messages.map((m) => [m.role, m.text])).toEqual([["user", "hi"], ["assistant", "hello"]]);
  });
  it("ignores non-array legacy data", () => expect(migrateLegacy({ bad: true })).toEqual([]));
  it("returns empty for corrupt JSON", () => expect(parseStore("{not json")).toEqual([]));
  it("handles thousands of chats", () => {
    const chats = Array.from({ length: 3000 }, (_, i) => ({ id: String(i), title: "t", pinned: i === 5, model: "m", messages: [], createdAt: 0, updatedAt: Date.now() - i * 3600_000 }));
    const g = groupChats(chats);
    expect(g[0]!.label).toBe("مثبّتة");
    expect(g.reduce((n, x) => n + x.items.length, 0)).toBe(3000);
  });
});
