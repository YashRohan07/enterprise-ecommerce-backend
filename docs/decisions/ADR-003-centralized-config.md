# ADR-003 — Centralized Configuration Strategy

## Status

Accepted

---

## Context

Node.js applications often use environment variables for configuration.

Accessing `process.env` directly throughout the codebase can lead to inconsistent configuration usage.

---

## Decision

A centralized configuration module will be used.

Environment variables will be loaded through a configuration layer.

Files used:

config/env.js  
config/index.js

---

## Alternatives Considered

### Option A — Direct process.env Usage

Each file accesses environment variables directly.

Rejected because it leads to inconsistent usage.

---

### Option B — Centralized Configuration (Chosen)

Environment variables are loaded and validated once.

Chosen because it improves maintainability.

---

## Consequences

Positive outcomes:

- consistent configuration access
- easier validation of environment variables
- easier environment management

Possible limitations:

- requires initial configuration setup

---

## Reasoning

Centralized configuration improves reliability and prevents configuration errors.
