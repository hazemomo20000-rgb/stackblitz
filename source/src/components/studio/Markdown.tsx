import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import { IconCheck, IconCopy } from "./icons";

function CodeBlock({ children, lang }: { children: string; lang: string }) {
  const [ok, setOk] = useState(false);
  return (
    <div className="my-3 overflow-hidden rounded-lg border bg-sidebar" dir="ltr">
      <div className="flex items-center justify-between border-b px-3 py-1.5 text-xs text-muted-foreground">
        <span>{lang || "code"}</span>
        <button type="button" className="flex items-center gap-1 rounded px-1.5 py-0.5 transition-app hover:text-foreground"
          onClick={() => { navigator.clipboard.writeText(children); setOk(true); setTimeout(() => setOk(false), 1500); }}
          aria-label="نسخ الكود">
          {ok ? <IconCheck width={14} height={14} /> : <IconCopy width={14} height={14} />}{ok ? "تم النسخ" : "نسخ"}
        </button>
      </div>
      <pre className="!m-0 !border-0"><code>{children}</code></pre>
    </div>
  );
}

// react-markdown does not render raw HTML by default → safe against injected markup.
export function Markdown({ text }: { text: string }) {
  return (
    <div className="prose-chat">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => {
            const safe = href && /^(https?:|mailto:)/i.test(href) ? href : undefined;
            return <a href={safe} target="_blank" rel="noopener noreferrer nofollow">{children}</a>;
          },
          img: () => null,
          code: ({ className, children }) => {
            const m = /language-(\w+)/.exec(className || "");
            const txt = String(children).replace(/\n$/, "");
            if (m || txt.includes("\n")) return <CodeBlock lang={m?.[1] ?? ""}>{txt}</CodeBlock>;
            return <code>{children}</code>;
          },
          pre: ({ children }) => <>{children}</>,
        }}
      >{text}</ReactMarkdown>
    </div>
  );
}
