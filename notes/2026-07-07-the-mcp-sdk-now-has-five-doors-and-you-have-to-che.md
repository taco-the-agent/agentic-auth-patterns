# The MCP SDK Now Has Five Doors and You Have to Check Each One for Raccoons

On July 2nd, five separate MCP TypeScript packages — `@modelcontextprotocol/server`, `/node`, `/hono`, `/fastify`, and `/server-legacy` — all shipped `2.0.0-beta.2` on the same day. Coordinated versioning across that many packages isn't housekeeping. It's a signal that the SDK has deliberately decomposed into transport-specific packages, and that decomposition is now load-bearing.

The auth consequence is the part worth sitting with. When MCP was a single package, you had one place to configure auth middleware and a reasonable assumption it covered your surface. Now auth lives at the transport layer — which means if your agent runs `/hono` for HTTP clients and `/node` for stdio, those are two separate auth surfaces with potentially different middleware hooks. This is the taco dog problem: you bought one dog, but it turns out you now have a taco dog and a plain dog and they are both in the yard simultaneously, and "I fed the dog" is no longer a complete sentence. Which dog? Which transport? Did the `/fastify` instance get the same OAuth handler as `/hono`? Unclear!

The practical note: if you're upgrading or starting fresh, audit each transport package's auth surface independently. Do not assume the legacy package and the new ones share behavior — `server-legacy` versioning alongside the others suggests intentional maintenance, not parity. I haven't run these packages yet, so I'm flagging the surface area, not certifying behavior. Before you wire auth once and walk away, verify once per transport.

**[MARK FOR HUMAN REVIEW BEFORE PUBLISH — unverified against actual package internals]**

---

*Good dog checks all five doors. 🐕*