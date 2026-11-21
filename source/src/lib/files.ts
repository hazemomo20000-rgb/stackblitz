export const MAX_FILE_BYTES = 8 * 1024 * 1024;
export const MAX_FILES = 6;

const IMAGE = { "image/png": ["png"], "image/jpeg": ["jpg", "jpeg"], "image/webp": ["webp"], "image/gif": ["gif"] } as const;
const TEXT_EXT = ["txt", "md", "csv", "json", "js", "ts", "tsx", "jsx", "py", "html", "css", "xml", "yaml", "yml", "sql", "log"];
const DOCUMENT_MIMES: Record<string, string> = { pdf: "application/pdf", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation" };

export type Attachment = {
  id: string;
  name: string;
  mime: string;
  size: number;
  kind: "image" | "text";
  data: string; // data URL for images, text content for text files
};

export type FileCheck = { ok: true; kind: "image" | "text" } | { ok: false; error: string };

export function extOf(name: string) {
  const i = name.lastIndexOf(".");
  return i > 0 ? name.slice(i + 1).toLowerCase() : "";
}

/** Validates by size, MIME and extension together — never trusts the name alone. */
export function checkFile(f: { name: string; type: string; size: number }): FileCheck {
  if (f.size === 0) return { ok: false, error: `الملف "${f.name}" فارغ.` };
  if (f.size > MAX_FILE_BYTES) return { ok: false, error: `الملف "${f.name}" أكبر من 8 ميجابايت.` };
  const ext = extOf(f.name);
  if (DOCUMENT_MIMES[ext] && (!f.type || f.type === DOCUMENT_MIMES[ext])) return { ok: true, kind: "text" };
  const imgExts = (IMAGE as Record<string, readonly string[]>)[f.type];
  if (imgExts) {
    if (!imgExts.includes(ext)) return { ok: false, error: `امتداد "${f.name}" لا يطابق نوع الصورة.` };
    return { ok: true, kind: "image" };
  }
  if (TEXT_EXT.includes(ext) && (f.type === "" || f.type.startsWith("text/") || f.type.includes("json") || f.type.includes("javascript") || f.type.includes("xml") || f.type.includes("typescript")))
    return { ok: true, kind: "text" };
  return { ok: false, error: `نوع الملف "${f.name}" غير مدعوم حالياً.` };
}

export function formatSize(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

export async function readAttachment(file: File): Promise<Attachment> {
  const c = checkFile(file);
  if (!c.ok) throw new Error(c.error);
  const documentMime = DOCUMENT_MIMES[extOf(file.name)];
  if (documentMime) {
    const { readDocument } = await import("./document-reader");
    return { id: crypto.randomUUID(), name: file.name, mime: file.type || documentMime, size: file.size, kind: "text", data: await readDocument(file) };
  }
  const data = await new Promise<string>((res, rej) => {
    const r = new FileReader();
    r.onerror = () => rej(new Error(`تعذّرت قراءة "${file.name}".`));
    r.onload = () => res(String(r.result));
    if (c.kind === "image") r.readAsDataURL(file);
    else r.readAsText(file);
  });
  if (c.kind === "image") {
    await new Promise<void>((res, rej) => {
      const img = new Image();
      img.onload = () => res();
      img.onerror = () => rej(new Error(`الصورة "${file.name}" تالفة.`));
      img.src = data;
    });
  }
  return { id: crypto.randomUUID(), name: file.name, mime: file.type || "text/plain", size: file.size, kind: c.kind, data };
}
