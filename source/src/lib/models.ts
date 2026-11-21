export type ModelDef = {
  id: string;
  label: string;
  provider: "gemini";
  description: string;
  caps: string[];
};

export const GEMINI_MODELS: ModelDef[] = [
  { id: "gemini-3.5-flash-lite", label: "Hazem-Tech lite", provider: "gemini", description: "أسرع الإجابات", caps: ["نص", "صور", "ملفات"] },
  { id: "gemini-3.6-flash", label: "Hazem-Tech", provider: "gemini", description: "مساعدة متكاملة", caps: ["نص", "صور", "ملفات"] },
  { id: "gemini-3.7-flash", label: "Hazem-Tech Pro", provider: "gemini", description: "مهام أعمق", caps: ["نص", "صور", "ملفات"] },
  { id: "gemini-3.8-flash", label: "التفكير العميق", provider: "gemini", description: "استدلال مطوّل", caps: ["نص", "صور", "ملفات"] },
];

export const BUILTIN_MODELS: ModelDef[] = [];
export const ALL_MODELS = [...GEMINI_MODELS];
export const findModel = (id: string) => ALL_MODELS.find((m) => m.id === id) ?? GEMINI_MODELS[0]!;
