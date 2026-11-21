import { describe, expect, it } from "vitest";
import { parsePreferences, preferencesSchema, validateAvatar } from "@/lib/account-rules";
import { DEFAULT_PREFS } from "@/lib/preferences";

describe("account data", () => {
  it("keeps all appearance preferences", () => {
    const prefs = { theme: "light", hue: 150, font: "Tajawal", fontSize: 18, density: "compact", radius: "crisp", motion: "reduce" };
    expect(parsePreferences(prefs)).toEqual(prefs);
  });
  it("never includes personal keys in synced preferences", () => {
    expect(preferencesSchema.parse({ ...DEFAULT_PREFS, keys: ["private"] })).not.toHaveProperty("keys");
  });
  it("does not trust malformed stored preferences", () => {
    expect(parsePreferences({ fontSize: 200 })).toEqual(DEFAULT_PREFS);
  });
  it("allows profile photos", () => expect(() => validateAvatar({ type: "image/png", size: 100 })).not.toThrow());
  it("rejects non-image avatars", () => expect(() => validateAvatar({ type: "image/svg+xml", size: 100 })).toThrow());
  it("rejects oversized avatars", () => expect(() => validateAvatar({ type: "image/png", size: 5 * 1024 * 1024 + 1 })).toThrow());
});