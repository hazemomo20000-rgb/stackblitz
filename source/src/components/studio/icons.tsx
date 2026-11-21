import type { SVGProps } from "react";
type P = SVGProps<SVGSVGElement>;
const base = (d: React.ReactNode) => (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>{d}</svg>
);
export const IconPlus = base(<path d="M12 5v14M5 12h14" />);
export const IconSend = base(<path d="M5 12h12M12 6l6 6-6 6" />);
export const IconStop = base(<rect x="7" y="7" width="10" height="10" rx="2" fill="currentColor" stroke="none" />);
export const IconMenu = base(<path d="M4 7h16M4 12h16M4 17h10" />);
export const IconSearch = base(<><circle cx="11" cy="11" r="6" /><path d="m20 20-4.5-4.5" /></>);
export const IconPin = base(<path d="M9 4h6l-1 6 3 3H7l3-3-1-6ZM12 13v7" />);
export const IconTrash = base(<path d="M5 7h14M10 11v6M14 11v6M6 7l1 12h10l1-12M9 7V4h6v3" />);
export const IconEdit = base(<path d="M4 20h4L19 9l-4-4L4 16v4ZM13 7l4 4" />);
export const IconClip = base(<path d="m20 11-8 8a5 5 0 0 1-7-7l8-8a3.5 3.5 0 0 1 5 5l-8 8a2 2 0 0 1-3-3l7-7" />);
export const IconX = base(<path d="M6 6l12 12M18 6 6 18" />);
export const IconCopy = base(<><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a1 1 0 0 1 1-1h9" /></>);
export const IconCheck = base(<path d="m5 12 5 5 9-10" />);
export const IconSettings = base(<><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 14H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0 1.2 2.9H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" /></>);
export const IconChevron = base(<path d="m7 10 5 5 5-5" />);
export const IconFile = base(<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5" /></>);
export const IconMic = base(<><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>);
export const IconDownload = base(<path d="M12 4v11M7 10l5 5 5-5M5 20h14" />);
/** Brand mark: a teal ripple — not a generic sparkle. */
export const BrandMark = (p: P) => (
  <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" {...p}>
    <circle cx="16" cy="16" r="14" fill="var(--primary)" opacity=".18" />
    <path d="M9 20c2.5-6 4.5-6 7 0s4.5 6 7 0" fill="none" stroke="var(--primary)" strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="16" cy="10" r="2.4" fill="var(--primary)" />
  </svg>
);
