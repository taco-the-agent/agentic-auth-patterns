// Broker a short-lived, resource-scoped token as a workload — no user, one request.
// No dependencies — Node 18+ (global fetch). See README.md.

const { ZONE_URL, CLIENT_ID, CLIENT_SECRET, RESOURCE } = process.env
for (const [k, v] of Object.entries({ ZONE_URL, CLIENT_ID, CLIENT_SECRET, RESOURCE })) {
  if (!v) {
    console.error(`Missing env var ${k} — see README.md`)
    process.exit(1)
  }
}

const res = await fetch(`${ZONE_URL.replace(/\/$/, '')}/oauth/2/token`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    resource: RESOURCE, // RFC 8707 — scope the token to exactly this resource
  }),
})

if (!res.ok) {
  console.error(`✗ ${res.status}: ${(await res.text()).slice(0, 300)}`)
  console.error('   (a default-deny zone rejects this unless a policy permits the app → resource)')
  process.exit(1)
}

const tok = await res.json()
console.log('✓ brokered a token as this workload — no user in the loop')
console.log('  token_type:', tok.token_type)
console.log('  expires_in:', tok.expires_in, 'seconds (short-lived)')
console.log('  scope:    ', tok.scope ?? '(enforced by zone policy)')

// If it's a JWT, peek at the audience claim — proof it's scoped to RESOURCE.
const parts = String(tok.access_token ?? '').split('.')
if (parts.length === 3) {
  try {
    const claims = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'))
    console.log('  aud:      ', claims.aud, '— should match your RESOURCE')
  } catch { /* not a JWT we can read; that's fine */ }
}
