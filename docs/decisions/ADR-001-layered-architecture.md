# ADR-001 — Layered Backend Architecture

## Status

Accepted

---

## Context

When building an Express backend, application logic can be organized in different ways.

One approach is to place most logic inside controllers. Another approach is to separate responsibilities into different layers.

For this project, the backend is expected to grow with multiple modules such as authentication, product catalog, orders, and payments. Therefore a maintainable architecture is required.

---

## Decision

The backend will follow a layered architecture.

Request flow:

Route → Controller → Service → Utility

Each layer has a clear responsibility.

Route  
Defines API endpoints.

Controller  
Handles HTTP concerns such as reading requests and returning responses.

Service  
Contains business logic.

Utility  
Contains shared helper functions.

---

## Alternatives Considered

### Option A — Fat Controllers

Controllers contain both HTTP handling and business logic.

Rejected because controllers quickly become large and difficult to maintain.

---

### Option B — Layered Architecture (Chosen)

Separate business logic into service layer.

Chosen because it improves maintainability and scalability.

---

## Consequences

Positive outcomes:

- better separation of concerns
- easier testing
- cleaner code structure
- easier collaboration between developers

Possible limitations:

- slightly more files and folders

---

## Reasoning

Layered architecture is widely used in production backend systems.

It helps maintain a clean structure as the application grows.
