export type Prefs = {
  theme: "dark" | "light" | "system";
  hue: number;
  font: "Cairo" | "Tajawal" | "Inter" | "system-ui";
  fontSize: number;
  density: "comfortable" | "compact";
  radius: "rounded" | "soft" | "crisp";
  motion: "system" | "reduce";
};
export const DEFAULT_PREFS: Prefs = { theme: "dark", hue: 178, font: "Cairo", fontSize: 16, density: "comfortable", radius: "rounded", motion: "system" };
export const ACCENTS = [
  { hue: 178, name: "تركواز" }, { hue: 150, name: "زمردي" }, { hue: 215, name: "أزرق" }, { hue: 75, name: "عنبري" }, { hue: 25, name: "مرجاني" },
];
const KEY = "hazem_studio_prefs_v1";

export function loadPrefs(): Prefs {
  try { return { ...DEFAULT_PREFS, ...JSON.parse(localStorage.getItem(KEY) || "{}") }; } catch { return DEFAULT_PREFS; }
}
export function savePrefs(p: Prefs) { localStorage.setItem(KEY, JSON.stringify(p)); }

export function applyPrefs(p: Prefs) {
  const r = document.documentElement;
  const dark = p.theme === "dark" || (p.theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  r.classList.toggle("light", !dark);
  r.classList.toggle("dark", dark);
  r.style.setProperty("--hue", String(p.hue));
  r.style.setProperty("--app-font", p.font === "system-ui" ? "system-ui" : `"${p.font}"`);
  r.style.setProperty("--app-font-size", `${p.fontSize}px`);
  r.dataset["density"] = p.density;
  r.dataset["radius"] = p.radius;
  r.dataset["motion"] = p.motion;
}
