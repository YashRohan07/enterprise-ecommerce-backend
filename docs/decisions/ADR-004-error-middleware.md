# ADR-004 — Global Error Handling Middleware

## Status

Accepted

---

## Context

Errors can be handled locally in controllers or globally through middleware.

Local error handling often leads to repeated try–catch blocks.

---

## Decision

A centralized error middleware will be used to handle application errors.

Controllers will throw errors and the global middleware will generate responses.

---

## Alternatives Considered

### Option A — Try–Catch in Every Controller

Each controller handles errors individually.

Rejected because it creates repeated code.

---

### Option B — Global Error Middleware (Chosen)

Errors are handled by a centralized middleware.

Chosen because it keeps controllers clean.

---

## Consequences

Positive outcomes:

- consistent error responses
- cleaner controllers
- easier debugging

Possible limitations:

- developers must understand Express middleware flow

---

## Reasoning

Centralized error handling is a widely used pattern in Express applications.
