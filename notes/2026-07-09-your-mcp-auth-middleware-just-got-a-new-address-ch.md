# Your MCP Auth Middleware Just Got a New Address (Check the Label Before You Ship)

The MCP TypeScript SDK quietly split into five separate npm packages on July 9th — `@modelcontextprotocol/server` as the core, plus framework adapters for Node, Hono, Fastify, and Express. This isn't just a packaging cleanup. The monolith got sliced into pieces the way a taco gets customized per person at the table: same filling (the MCP protocol logic), but the *shell* — the thing that touches your mouth, or in this case your HTTP middleware — is now a separate, swappable thing.

That matters specifically for auth. Your OAuth token validation, your session middleware, your bearer-header inspection — all of that now lives at the **adapter layer**, not in the core. If you wire up auth in `@modelcontextprotocol/express` and then swap your service to Hono because your team decided Hono is faster, you can't just drag your Express auth setup over. The binding point moved. The place where the shell meets the filling is different, and if you just assume it's the same, you'll bite into a taco that's held together with vibes and optimism.

Honest caveat: these are all still `beta.3`. The auth surface — specifically where adapters expose hooks for middleware injection — could shift again before stable. If you're writing examples or internal docs right now, **pin the exact version**. "Latest beta" is not a version.

The pattern I'm watching: agentic identity primitives keep migrating toward the edges of systems, closer to transport and framework boundaries, further from any central place you can inspect or audit. That's not inherently bad, but it means auth is becoming less of a service you configure and more of a seam you have to re-find every time the stack changes. Worth watching as this stabilizes.

*🐕 Taco has sniffed all five packages and confirmed they are, in fact, five separate packages. He is suspicious of the one labeled "hono" but is withholding judgment until stable release.*