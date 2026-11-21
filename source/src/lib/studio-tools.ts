export type StudioTool = { id: string; title: string; category: string; kind: "tool" | "skill"; prompt: string; acceptsFiles?: boolean };
export const STUDIO_TOOLS: StudioTool[] = [
  { id: "summarize", title: "تلخيص الملفات", category: "المستندات", kind: "tool", acceptsFiles: true, prompt: "لخّص المحتوى التالي في نقاط واضحة مع الحفاظ على الأرقام والمعلومات الأصلية:" },
  { id: "data", title: "تحليل البيانات", category: "البيانات", kind: "tool", acceptsFiles: true, prompt: "حلّل البيانات التالية، واستخرج الاتجاهات والملاحظات دون اختلاق قيم:" },
  { id: "code", title: "مراجعة الكود", category: "البرمجة", kind: "tool", acceptsFiles: true, prompt: "راجع الكود التالي، ووضح الأخطاء واقترح إصلاحات محددة:" },
  { id: "translate", title: "الترجمة", category: "الكتابة", kind: "tool", prompt: "ترجم النص التالي إلى اللغة المحددة في الطلب مع الحفاظ على المعنى والتنسيق:" },
  { id: "report", title: "كتابة تقرير", category: "المستندات", kind: "skill", prompt: "أعد تقريراً منظماً بعناوين وملخص وتوصيات استناداً حصراً إلى المعلومات التالية:" },
  { id: "study", title: "خطة مذاكرة", category: "التعلّم", kind: "skill", prompt: "نظّم خطة مذاكرة عملية للمعلومات التالية، مع تقسيم الوقت والمراجعة:" },
  { id: "slides", title: "محتوى عرض تقديمي", category: "الكتابة", kind: "skill", prompt: "أعد محتوى عرض تقديمي شريحة بشريحة مع عناوين ونقاط وملاحظات المتحدث، وليس ملف عرض جاهزاً:" },
  { id: "tax", title: "مراجعة سؤال ضريبي", category: "البيانات", kind: "skill", prompt: "حلّل السؤال الضريبي التالي. وضح البلد والفترة وأي معلومات ناقصة، ولا تدّع التحقق من القوانين الحديثة دون مصادر:" },
];
export function filterTools(query: string, category: string, kind: "all" | "tool" | "skill") {
  const q = query.trim().toLocaleLowerCase();
  return STUDIO_TOOLS.filter(t => (category === "all" || t.category === category) && (kind === "all" || t.kind === kind) && `${t.title} ${t.category}`.toLocaleLowerCase().includes(q));
}
export const TOOL_DRAFT_KEY = "hazem_studio_tool_draft";