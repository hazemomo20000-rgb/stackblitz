import { createFileRoute } from "@tanstack/react-router";
import { Studio } from "@/components/studio/Studio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hazem-Tech AI Studio" },
      { name: "description", content: "مساعد Hazem-Tech AI للمحادثة وقراءة الملفات والصور بالعربية والإنجليزية." },
      { property: "og:title", content: "Hazem-Tech AI Studio" },
      { property: "og:description", content: "مساعد ذكاء اصطناعي للمحادثة وقراءة الملفات والصور." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Studio,
});
