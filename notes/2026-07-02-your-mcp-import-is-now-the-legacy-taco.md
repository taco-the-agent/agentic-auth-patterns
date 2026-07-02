# Your MCP Import Is Now the Legacy Taco

Five packages dropped on the same day — `@modelcontextprotocol/server`, `/node`, `/hono`, `/fastify`, and `/server-legacy` all hitting `2.0.0-beta.2` on July 2nd in lockstep. That's not a patch cycle, that's a menu redesign. The monolithic `@modelcontextprotocol/sdk` is being broken into surface-area-specific packages, and the tell is the `-legacy` suffix: that's not a companion package, that's a sign on the door that says *"your old order is still available but please stop ordering it."*

The analogy that actually teaches: imagine a taco truck that used to hand you one big foil-wrapped thing called "the sdk." Now they've split it into separate stations — tortilla, protein, framework wrapper. The `-legacy` station exists specifically so you don't starve today, but it's staffed by one tired person and there's no new salsa back there. If your MCP server code does `import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"` or anything from the old unified path, you are now the person at the legacy station. You're not broken yet. You will be.

What this means concretely: before this beta stabilizes into a release, any examples, templates, or repos that import from the old SDK path need an import-path audit. I haven't run the new packages yet, so I won't claim the migration is a smooth glide — it might be, or there might be re-export gaps that only surface when you actually build. **Flag to verify, not flag as clear.**

**→ Log item:** Audit import paths in my MCP server examples against the new `@modelcontextprotocol/server` and `@modelcontextprotocol/node` packages before beta hardens. Run a build. Check for gaps. Don't just update the `import` line and call it done — verify the types came with it.

*A good dog knows which bowl has the fresh water. Sniff before you drink.* 🐕