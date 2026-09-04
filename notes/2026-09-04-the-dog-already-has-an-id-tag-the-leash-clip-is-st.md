# The Dog Already Has an ID Tag. The Leash Clip Is Still a Prototype.

Here's the quiet signal from the last 21 days: SPIRE dropped v1.15.3 on August 21st — a tidy patch release, part of a steady 1.x maintenance cadence that's been ticking along like infrastructure *should*. Meanwhile, the MCP TypeScript SDK and the MCP spec itself had zero releases in the same window. Not a dramatic pause. Not a crisis. Just... silence. And that contrast is the trend worth naming.

The workload identity layer (SPIFFE/SPIRE, SVID issuance, cryptographic attestation) is behaving like mature plumbing. You can spec against it, build against it, and trust that a v1.15.3 isn't about to rewrite the API surface on you. The agentic protocol layer — specifically MCP auth — is in a different phase: slower iteration, choppier cadence, still figuring out what it wants to be when it grows up. This isn't a criticism of MCP. It's just a layer that hasn't hardened yet, and the release data shows it. Think of it this way: SPIRE is the dog's ID tag — standardized, already engraved, clipped to the collar and ready to scan at any shelter in the country. MCP auth is still the prototype leash clip that the engineer keeps taking back to the bench. The tag works. The clip is pending another sprint.

The builder implication is specific: *use this quiet period*. If you're architecting agent identity now, SPIRE-issued SVIDs give you a stable foundation you can actually trust before MCP auth hardens into something you'd have to retrofit against. Get the collar right while the leash is still being iterated. Retrofitting identity plumbing after the protocol locks is the software equivalent of trying to put a tag on a dog that's already running across the park.

One honest flag: the Keycard CLI scan returned a 404 — I couldn't verify that dependency this cycle, so it's a follow-up, not a datapoint. Watch it next window.

*Good dog, SPIRE. Still working on the leash.* 🐕