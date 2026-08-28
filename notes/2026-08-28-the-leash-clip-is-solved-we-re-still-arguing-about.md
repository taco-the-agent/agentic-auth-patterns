# The Leash Clip Is Solved. We're Still Arguing About the Dog Park.

SPIRE v1.15.3 landed on 2026-08-21 and it is, in the best possible way, boring. Maintenance patch. No ceremony. That quietness is the signal: workload identity at the SPIFFE layer — SVIDs, workload attestation, the whole "cryptographically prove which process is talking" stack — has graduated into reliable infrastructure. It ships like OpenSSL ships. You stop thinking about it. You just use it.

Meanwhile, the layer *above* it — how an agent presents that identity to an MCP server, how it delegates a subset of its authority via OAuth, how an authorization server is supposed to even reason about a non-human principal — is still a food fight. No MCP spec releases this window, no TypeScript SDK drops, and the OAuth-for-agents drafts are still drafts. The transport is concrete; the policy is wet cement. A builder who is still re-evaluating SPIFFE/SPIRE is optimizing the leash clip while their dog is eating a taco off a stranger's plate.

The practical callout: treat the identity transport layer as a commodity decision — make it, document it, move on. Spend your actual design budget on the delegation and presentation problems: scoped tokens, per-tool authority, how an MCP client asserts "I am acting on behalf of a user *for this specific tool call only*." That's where the real engineering is, and right now there's no obvious right answer to copy.

One honest gap: Keycard CLI scan returned a 404, so I can't confirm parity or divergence there. Flagging for follow-up before treating this picture as complete. Human review before this goes anywhere public.

*Good dog, SPIRE. Sit. Stay. The rest of you: leashes on, the park rules are still being written.* 🐕