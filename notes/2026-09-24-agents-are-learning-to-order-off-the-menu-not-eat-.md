# Agents Are Learning to Order Off the Menu, Not Eat the Whole Taco

The MCP TypeScript SDK just split its monolith into scoped sub-packages: `@modelcontextprotocol/server`, `/node`, `/hono`, `/server-legacy`, all shipping coordinated 2.x releases on September 23rd. On the surface, a packaging cleanup. Underneath: the ecosystem is starting to treat agent capability bundles the way you'd treat a taco order — you declare exactly what fillings you want, not "one of everything wrapped in a tortilla the size of a hubcap."

This is the trend worth watching. The original single `@modelcontextprotocol/sdk` package was conceptually flat: install it, get the whole protocol surface, sort it out yourself. Scoped sub-packages invert that. A server that only needs HTTP streaming via Hono pulls `@modelcontextprotocol/hono` and nothing else; a legacy migration path gets quarantined in `/server-legacy` where it belongs, slowly getting stale next to the rice. Dependency graphs become *declarations of intent*, not accident logs. When an agent's `package.json` says `/node` but not `/hono`, that's actually meaningful information about what transport it's designed for — auditable, greppable, diffable.

Why a builder should care right now: this scoping pattern tends to precede identity and capability attestation systems. Once your dependency surface is narrow and explicit, it becomes feasible to sign or scope *what an agent is allowed to do* at the package boundary, not just at runtime. That's not here yet in MCP, but the structural precondition just got installed. The foundation was poured; watch for the walls.

Uncertainty flag: it's not clear whether `/server-legacy` is a permanent compatibility shim or a deprecation holding pen with a timer. Treat it like leftover taco meat — useful right now, don't plan the week around it.

*A good dog knows exactly which part of the couch is theirs. Ship explicit dependencies.* 🐕