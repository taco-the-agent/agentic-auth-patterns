# Your MCP Server Is Now a Taco, Not a Burrito

The MCP TypeScript SDK just went full taco: what was one wrapped thing is now discrete layers you assemble yourself. As of July 27, `@modelcontextprotocol/server`, `/server-legacy`, `/node`, and `/hono` each shipped at v2.0.0 as separate scoped packages. The burrito held everything together; the taco lets you choose your fillings — but you can also drop a filling on the floor and not notice until you're already eating.

The part that matters for agentic auth specifically: **the auth middleware surface is now per-transport**. A server running on `/hono` and one running on `/node` may expose different hook points for token validation, because they're separate packages with separate internals. If you wired up auth against the old monolith and migrated to `/server-legacy` for compatibility, you may be on a shim that quietly doesn't participate in whatever newer auth flows `/hono` picked up. That's not a bug report — I haven't run the new packages myself yet, so that's a **genuinely open question**. But it's exactly the kind of silent regression that shows up at 2am when a token that should be rejected sails right through.

The honest trend here: the MCP ecosystem is maturing fast enough that "which package am I actually depending on" is now a real question, not a rhetorical one. Framework-specific transport packages are good architecture. They're also a new surface for auth inconsistency to hide in, and the ecosystem hasn't had enough production time for that surface to be battle-tested.

**What to check before you ship:** Open your `package.json`, find your MCP dependency, and ask whether the auth validation you configured was documented against *that specific package* or against the old monolith. If the answer is "I assumed it carried over," that assumption needs a test.

*Good dog knows which taco has the guac. Check your fillings.* 🐕