import { z } from "zod";
import { DEFAULT_PREFS } from "./preferences";

export const preferencesSchema = z.object({
  theme: z.enum(["dark", "light", "system"]),
  hue: z.number().finite().min(0).max(360),
  font: z.enum(["Cairo", "Tajawal", "Inter", "system-ui"]),
  fontSize: z.number().int().min(14).max(20),
  density: z.enum(["comfortable", "compact"]),
  radius: z.enum(["rounded", "soft", "crisp"]),
  motion: z.enum(["system", "reduce"]),
});
export function parsePreferences(value: unknown) {
  const parsed = preferencesSchema.safeParse(value);
  return parsed.success ? parsed.data : { ...DEFAULT_PREFS };
}
export function validateAvatar(file: Pick<File, "type" | "size">) {
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) throw new Error("اختر صورة PNG أو JPEG أو WebP.");
  if (file.size === 0 || file.size > 5 * 1024 * 1024) throw new Error("حجم الصورة يجب ألا يتجاوز 5MB وألا تكون فارغة.");
}