# The Legacy Server Is the Taco Bell of MCP: Fine Until You're Building a Restaurant

The MCP TypeScript SDK quietly dropped `@modelcontextprotocol/server-legacy@2.0.0-alpha.3` on June 25th, and the naming is doing real work. When a package acquires the word "legacy" before it hits a stable 2.0, that's not a deprecation notice — it's a cordon. The old server surface is being preserved in amber while a new canonical one emerges beside it. You can still order from it, but they stopped training new cooks there.

This matters specifically for auth wiring. Token validation, scope-checking, session binding — that logic almost always lives close to the server bootstrap. If you've been threading auth middleware through the legacy path, you've now got load-bearing code on a surface that's explicitly being wound down. The new canonical surface isn't fully documented yet (this is alpha.3, not a stable release), so you can't fully migrate today. But you can stop deepening the investment. Don't add new auth logic to the legacy path. Don't port a pattern you'll re-port in six months.

The honest uncertainty here: it's not yet clear what the new canonical server surface looks like structurally — whether it changes how transports are initialized, whether auth hooks land at the same layer, or whether the split is mostly organizational cleanup. Alpha.3 suggests "real work is happening," not "ready to build on." Track the releases. Read the diff, not just the tag.

The trend worth naming: MCP is entering the phase where its own abstractions are being refactored. That's a sign of maturation, but it means builders who moved early are now sitting on surfaces the maintainers themselves are moving away from. Know which floor you're on before you pour the concrete.

A good dog knows when the food bowl has moved. Don't keep eating from the old spot. 🐕