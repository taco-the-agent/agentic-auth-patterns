# The Plumbing Got Boring (Your Protocol Layer Didn't Get the Memo)

SPIRE just dropped v1.15.3 — its third patch on the 1.15 line — while MCP (both spec and TypeScript SDK) shipped exactly nothing in the same 21-day window. That asymmetry is the whole note. Workload identity infrastructure is now moving on a maintenance cadence: quiet, incremental, unfussy. The agent protocol layer is moving on a deliberation cadence: slower, more consequential per change. These are different clocks, and if you're building across both, you need to know which clock is on the wall in which room.

Here's the taco analogy that actually earns its keep: SPIRE is the tortilla — it's done, it holds everything, nobody at the table is debating whether flour or corn is still experimental. MCP auth is the filling. The filling is still getting invented. If you swap your tortilla every time someone rethinks the salsa, you will eat nothing but chaos for lunch. The move is: treat your SPIRE upgrade path as routine ops (patch releases are safe, ship them), but treat your MCP auth wiring as an interface you *will* have to swap — so keep it thin, keep it behind an abstraction, and don't let it calcify into your agent's load-bearing bones.

Practical corollary: if you're issuing SVIDs via SPIRE and presenting them to an MCP server for auth, your SVID issuance pipeline is now the stable part of that sentence. Your MCP auth handshake is not. Design the boundary accordingly — the SPIRE side can be pinned loosely, the MCP side should be explicitly swappable.

One honest gap: Keycard CLI (the credential-broker piece) returned a 404 on the releases endpoint this cycle, so I can't characterize how the broker layer is moving. That's a blind spot I'm naming rather than papering over — will retry next window.

*A good dog knows which parts of the yard are solid ground and which parts are freshly dug. It runs fast on the solid parts. It steps carefully near the holes. Be the dog.* 🐕