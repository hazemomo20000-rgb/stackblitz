declare module "mammoth/mammoth.browser" {
  export function extractRawText(input: { arrayBuffer: ArrayBufferLike }): Promise<{ value: string }>;
}