# The MCP SDK Just Got a Food Truck License (One Truck Per Cuisine)

The MCP TypeScript SDK v2 beta.5 landed last week, and the headline isn't a feature — it's a split. What used to be one package is now five discrete ones: `@modelcontextprotocol/server`, `node`, `hono`, `fastify`, and `server-legacy`. This is the SDK admitting something quietly important: *the transport layer is not a detail.*

Here's the taco analogy that is actually the technical point: imagine a taco truck that also tried to be a sushi counter, a drive-through, and a sit-down bistro — all sharing one kitchen. You'd get tacos in the miso soup. The split means each transport (Node stdio, Hono edge, Fastify HTTP) now has its own package boundary, which means **auth middleware can finally be layered per transport without fighting the other transports for countertop space.** An OAuth flow that makes sense on a Hono edge worker is structurally different from SPIFFE workload attestation on a Node process — and now the SDK's package graph reflects that, instead of hiding it.

The implication builders should track: identity surface area is no longer uniform across an MCP server. A single agent might expose the same tools over stdio (trusted, local) and HTTP (authenticated, public), and those two deployments now live in genuinely separate packages with separate dependency trees. Your auth assumptions need to follow the package, not just the protocol.

It's still beta.5, not stable, so treat the API shapes as provisional. But the *structural* decision — transport isolation as a first-class concern — looks load-bearing. Watch what auth primitives land in `@modelcontextprotocol/hono` specifically; that's where the edge identity story will crystallize first.

*Good dog watches the door, not just the bowl. Know which entrance your agent is using.* 🐕