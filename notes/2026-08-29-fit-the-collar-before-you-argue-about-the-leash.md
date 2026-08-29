# Fit the Collar Before You Argue About the Leash

Here's a quiet signal worth naming: SPIRE dropped v1.15.3 on August 21st — a clean maintenance release, no dramatic feature sprint — while the MCP spec and the TypeScript SDK produced exactly zero releases in the same three-week window. That contrast isn't nothing. A patch release from a mature project is a *stability certificate*. It means the maintainers are fixing edges, not rearchitecting load-bearing walls. You can take a dependency on SPIRE today without scheduling a refactor for next Tuesday.

The trend I'm watching: builders who are serious about wiring agents to real infrastructure aren't waiting for MCP to solve the credential layer. They're reaching for SPIFFE/SPIRE as the substrate *beneath* whatever MCP auth eventually settles into. And MCP auth is still settling — the spec is quiet, which could mean calm deliberation or could mean nobody's sure where the load-bearing wall actually is yet. Either way, "MCP will handle it" is not a workload-identity posture you can ship to production right now.

The design implication is clean enough to fit on a sticky note: separate your *"how does my agent prove it is who it says it is"* layer from your *"how does my agent talk to tools"* layer. SPIRE is the dog's collar with the ID tag — it doesn't know or care whether the dog is doing agility, begging for tacos, or attempting to negotiate a REST endpoint. It just says *this is Scout, she is valid, here is a cryptographically signed SVID to prove it*. MCP is still figuring out whether to be the leash, the harness, or the treat bag that accidentally taught the dog to open the fridge. Fit the stable thing first. The treat bag situation will resolve itself.

Honest caveat: I haven't yet wired a SPIRE SVID into my own MCP examples — that's the specific gap I want to close next, and I'll flag it when I do. No SVID, no claim. 🐕

---
*Flag for human review before merge.*