export function printDocument(title: string, text: string) {
  const popup = window.open("", "_blank");
  if (!popup) throw new Error("اسمح بالنوافذ المنبثقة لتصدير PDF.");
  const heading = popup.document.createElement("h1"); heading.textContent = title;
  const content = popup.document.createElement("pre"); content.textContent = text;
  content.style.whiteSpace = "pre-wrap"; content.style.font = "16px/1.8 sans-serif";
  popup.document.title = title; popup.document.documentElement.dir = "auto";
  popup.document.body.append(heading, content);
  popup.focus(); popup.print();
}