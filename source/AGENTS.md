<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Hazem-Tech Studio
- Chat UI lives in src/components/studio; data helpers in src/lib (pure, unit-tested in src/test). Why: keeps porting from the original single HTML file incremental.
- Built-in AI goes through server route /api/chat (src/lib/chat.server.ts); personal Gemini keys stay in the browser and call Google directly. Why: user chose both modes; keys never reach our server.
- Local chat store is versioned (hazem_studio_chats_v2) and never mutates the legacy hazem_tech_chats key. Why: rollback-safe migration.
- Account identity has one root auth subscriber; browser profile reads and writes use the generated RLS-scoped client. Why: public chat remains available without sign-in and private account rows stay owner-only.
- Profile avatars live in a private bucket with owner paths and short-lived signed URLs; uploads are decoded and re-encoded. Why: avoid public personal photos and forged image contents.
- Signed-in preferences use serialized database writes and owner-scoped realtime invalidation; guest preferences stay separate locally. Why: avoid cross-account leakage and out-of-order saves without syncing personal API keys or conversations.
- Tools use a browser-safe catalog and a one-time same-origin draft handoff to the existing chat composer. Why: reuse actual AI and attachment execution rather than fake tool results.
- Account conversation caches are owner-keyed; database saves use revision checks, deletion tombstones and conflict copies. Why: preserve guest storage and avoid overwriting cross-device changes.
- Device records are attendance metadata, not authoritative Auth sessions; use Auth local/others sign-out scopes for revocation. Why: respect managed Auth boundaries and disclose token expiry delays.
- Document extraction dynamically loads browser libraries and keeps extracted text in the existing attachment payload; PDF export uses browser printing. Why: preserve Arabic shaping and the account conversation synchronization path.
- Speech uses an authenticated server function returning SSE, sequential text chunks and durable denial state. Why: protect credits and avoid replaying denied synthesis across reloads.
