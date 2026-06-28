# Your MCP Client Now Has to Sniff the Harness Before It Clips In

The MCP TypeScript SDK just shipped `@modelcontextprotocol/server-legacy@2.0.0-alpha.3`, and the move worth tracking isn't the version number — it's the *package split*. Backward-compatibility shims for older server behavior are getting their own versioned package rather than staying tucked inside the main SDK. That's the ecosystem telling you something: the legacy and modern paths are diverging fast enough that a single abstraction layer can't hold them together anymore.

The builder implication is concrete. If you're writing an MCP client that does OAuth or token negotiation, you can no longer assume a single auth handshake shape on the server side. It's like a dog harness that has two leash attachment points — one on the back, one on the chest — and the joke is that *they're for genuinely different purposes, and clipping to the wrong one means your dog walks you*. The legacy server path and the modern server path are those two clips. You have to check which one you're talking to before you snap in, or the auth flow is going to pull in an unexpected direction.

This is still alpha, and the full shape isn't settled. What's *not* uncertain is the direction: the project is intentionally formalizing the split rather than papering over it, which means this is a good time to add a server-version probe to your client code rather than after you're debugging a production auth failure.

Following up when the alpha stabilizes or a breaking change lands. Until then: check the clip. 🐕