import { describe, expect, it } from "vitest";
import { checkFile } from "@/lib/files";
import { chunkText } from "@/lib/chunk-text";
describe("document formats", () => {
  for (const [ext, type] of Object.entries({ pdf: "application/pdf", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation" })) {
    it(`accepts ${ext}`, () => expect(checkFile({ name: `file.${ext}`, type, size: 100 }).ok).toBe(true));
  }
  it("rejects disguised executable", () => expect(checkFile({ name: "file.pdf", type: "application/x-msdownload", size: 100 }).ok).toBe(false));
});
describe("complete speech input", () => {
  it("does not drop long Arabic text", () => { const input = "هذا نص عربي طويل. ".repeat(200); const chunks = chunkText(input); expect(chunks.join("")).toBe(input); expect(chunks.every(c => Array.from(c).length <= 1200)).toBe(true); });
});