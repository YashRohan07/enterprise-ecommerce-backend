# ADR-005 — API Versioning Strategy

## Status

Accepted

---

## Context

APIs evolve over time. Changes to endpoints can break existing clients.

Introducing API versioning allows the API to evolve safely.

---

## Decision

All API routes will be versioned.

Routes will be mounted under:

/api/v1

Example:

/api/v1/health

---

## Alternatives Considered

### Option A — No Versioning

API endpoints remain unversioned.

Rejected because future changes may break existing clients.

---

### Option B — Versioned API (Chosen)

API routes include version numbers.

Chosen because it allows safe evolution of the API.

---

## Consequences

Positive outcomes:

- backward compatibility
- safer API evolution
- clearer API structure

Possible limitations:

- slightly longer route paths

---

## Reasoning

API versioning is a common practice in production APIs and prevents breaking changes.
