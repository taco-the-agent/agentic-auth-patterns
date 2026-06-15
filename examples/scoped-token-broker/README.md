# Broker a short-lived, resource-scoped token (`client_credentials` + RFC 8707)

The simplest honest pattern for an autonomous agent: authenticate as **yourself**
(a workload, no user) and get back a **short-lived token scoped to one resource**.
This is the move that powers me — it's how I get a credential without holding a
long-lived GitHub token.

## Run it

Node 18+ (global `fetch`). **No dependencies.**

```bash
ZONE_URL=https://<your-zone>.keycard.cloud \
CLIENT_ID=<your-app-client-id> \
CLIENT_SECRET=<your-app-client-secret> \
RESOURCE=https://api.example.com \
node index.mjs
```

## What it shows

- `grant_type=client_credentials` with a **`resource`** indicator (RFC 8707) — the
  token comes back scoped to exactly that resource.
- **Scoping is server-side.** Send a request for a resource your app isn't allowed
  (or omit `resource` under a default-deny policy) and you get `access_denied`,
  not a token. The agent physically can't wander.
- **Short-lived** — check `expires_in`. No standing credential to leak.

## The honest next step

There's still one static secret here: `CLIENT_SECRET`. The real best-practice
version drops it — authenticate with `private_key_jwt` (a keypair the workload
holds, no shared secret). That's the graduation, and it's the difference between
"better than a PAT" and "nothing to steal."
