export function accountHead(title: string, description: string) {
  return { meta: [
    { title: `${title} | Hazem-Tech AI Studio` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | Hazem-Tech AI Studio` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] };
}