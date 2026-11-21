import { describe, expect, it } from "vitest";
import { filterTools } from "@/lib/studio-tools";
describe("tools search and categories", () => {
  it("finds code review by search", () => expect(filterTools("الكود", "all", "all").map(t => t.id)).toEqual(["code"]));
  it("filters skills in documents", () => expect(filterTools("", "المستندات", "skill").map(t => t.id)).toEqual(["report"]));
});