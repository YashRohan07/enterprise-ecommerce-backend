# ADR-002 — app.js and server.js Separation

## Status

Accepted

---

## Context

Express applications can be structured in different ways.

Some projects combine application configuration and server startup inside a single file.

However, separating these responsibilities can improve clarity and flexibility.

---

## Decision

The application setup and server startup will be separated into two files.

app.js  
Responsible for configuring the Express application.

server.js  
Responsible for starting the server.

---

## Alternatives Considered

### Option A — Single File Application

Application setup and server start in the same file.

Rejected because it mixes responsibilities.

---

### Option B — Separate Files (Chosen)

Application configuration and server startup are separated.

Chosen for better structure and flexibility.

---

## Consequences

Positive outcomes:

- cleaner architecture
- easier testing
- clearer responsibilities

Possible limitations:

- one extra file in the project

---

## Reasoning

Separating application setup from server startup is a common practice in production backend systems.
