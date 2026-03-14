# Phase 1 — Express Architecture & Project Foundation

## Goal

The goal of Phase 1 is to establish a clean and scalable Express backend architecture.

Instead of implementing business features immediately, this phase focuses on building the **technical foundation** required for a maintainable backend system.

The focus is on:

- Express application setup
- layered backend architecture
- configuration management
- logging infrastructure
- middleware design
- standardized API responses
- versioned API routing

This foundation ensures that future modules such as authentication, product catalog, orders, and payments can be added without restructuring the backend architecture.

---

# Scope

### Included

This phase includes the core architectural setup required before implementing application features.

- Express application bootstrap
- layered project structure
- centralized environment configuration
- logging infrastructure
- utility helpers for responses and errors
- middleware architecture
- API versioning
- health check endpoint
- code quality tools (ESLint and Prettier)

---

### Not Included

The following components are intentionally deferred to later phases:

- authentication
- role-based access control (RBAC)
- database connection
- ORM models
- repository data access logic
- product catalog APIs
- cart and checkout APIs
- order processing
- background jobs and queues
- Redis caching

These will be implemented gradually in future phases.

---

# Deliverables

The following outputs were completed during this phase:

- Express backend architecture
- clean layered project structure
- centralized configuration system
- structured logging setup
- utility helpers for errors and responses
- middleware-based request lifecycle
- versioned API routing
- health check endpoint
- code linting and formatting configuration

These deliverables form the architectural foundation of the backend system.

---

# What I Learned

During this phase I focused on understanding how to structure an Express backend using clean architecture principles.

Key learnings include:

- separating application bootstrap from server startup
- designing layered backend architecture
- separating HTTP logic from business logic
- centralizing configuration management
- implementing middleware pipelines
- standardizing API responses
- introducing API versioning early

These concepts are important for building maintainable backend systems.

---

# Key Takeaways

Important lessons from this phase:

- backend architecture should be designed before implementing business logic
- controllers should remain small and focused on HTTP concerns
- business logic should live in the service layer
- middleware should handle cross-cutting concerns
- configuration and logging should be centralized
- API versioning should be introduced early

---

# System Design Focus

This phase focuses on understanding architectural patterns commonly used in production Express backends.

Key concepts explored include:

- layered backend architecture
- separation of concerns
- request lifecycle in Express
- middleware design
- centralized error handling
- configuration management
- API versioning strategy
- standardized API responses

The reasoning behind major architecture decisions is documented in:

docs/decisions/

---

# Design Questions

Key system design questions explored during this phase:

- Why should business logic not be placed in controllers?
- What problems occur if controllers become too large?
- Why should app.js and server.js be separated?
- Where should request validation happen?
- Where should centralized error handling live?
- What responsibilities belong in middleware?
- What responsibilities belong in services?
- How does layered architecture help scale engineering teams?
- How can a new developer understand the codebase quickly?
- Why should configuration be centralized?
- Why should API responses be standardized?
- Why should API versioning be introduced early?

---

# Design Insights

### Why should business logic not be placed in controllers?

Controllers should handle only HTTP concerns such as reading request data and returning responses.

Business logic should live in the service layer.  
This keeps controllers small and easier to maintain.

---

### What problems occur if controllers become too large?

Large controllers often lead to:

- duplicated logic
- poor readability
- difficult testing
- fragile code during refactoring

Keeping controllers small improves maintainability.

---

### Why separate app.js and server.js?

`app.js` is responsible for assembling the Express application.

It configures middleware, routes, and error handling.

`server.js` is responsible for starting the server and listening on a port.

This separation improves clarity and makes testing easier.

---

### Where should request validation happen?

Request validation should happen before the controller executes.

This ensures invalid requests are rejected early and business logic runs only on valid input.

Validation middleware will use **Zod schemas** in later phases.

---

### Where should centralized error handling live?

Error handling should be implemented as a global middleware at the end of the middleware pipeline.

Controllers throw errors, and the global error middleware formats the response.

This avoids repeating try–catch logic in multiple controllers.

---

### What responsibilities belong in middleware?

Middleware handles cross-cutting concerns such as:

- request validation
- authentication
- logging
- rate limiting
- error handling

---

### What responsibilities belong in services?

Services contain business logic such as:

- order processing
- pricing calculations
- inventory updates

Separating services from controllers keeps the architecture clean.

---

### How does layered architecture help scaling teams?

Layered architecture separates responsibilities across routes, controllers, services, and middleware.

This allows multiple developers to work on different parts of the system without conflicts.

The final decision is documented in:

docs/decisions/ADR-001-layered-architecture.md

---

### How can a new developer understand the codebase quickly?

The backend follows a predictable request lifecycle:

Client → Route → Controller → Service → Response

Each layer has a clear responsibility.

---

### Why should configuration be centralized?

Environment variables are loaded through a configuration layer instead of accessing `process.env` directly.

This ensures consistent configuration access and allows validation at application startup.

---

### Why should API responses be standardized?

All API responses follow a consistent format.

This makes frontend integration easier and ensures predictable API behavior.

---

### Why introduce API versioning early?

All routes are mounted under `/api/v1`.

Example:

/api/v1/health

This allows the API to evolve without breaking existing clients.

---

# Request Lifecycle

The request lifecycle in the backend follows this flow:

Client
→ Express Route
→ Controller
→ Service
→ Utility (if needed)
→ Response

If an error occurs:

Controller / Service
→ Error thrown
→ Global Error Middleware
→ Standardized Error Response

---

# Step-by-Step Implementation

This phase was completed through structured implementation steps.

---

### Step 0 — Define Phase Scope

The scope of Phase 1 was defined before writing code.

This ensured architectural work was completed before implementing features.

---

### Step 1 — Create Phase Documentation

A documentation file was created:

docs/phases/01-express-architecture.md

This document records architectural decisions and implementation details.

---

### Step 2 — Create Backend Folder Structure

The backend folder structure was created to separate responsibilities.

Placeholder folders were also created for future phases:

- repositories
- models
- jobs

---

### Step 3 — Install Core Dependencies

Runtime dependencies installed:

- express
- dotenv
- winston
- zod

Development dependencies installed:

- nodemon
- eslint
- prettier

Zod will be used for schema-based request validation in later phases.

---

### Step 4 — Configure NPM Scripts

Useful scripts were added to `package.json`.

Examples:

- `npm run dev`
- `npm start`
- `npm run lint`
- `npm run format`

---

### Step 5 — Implement Environment Configuration

A centralized configuration system was implemented.

Files created:

config/env.js
config/index.js

This system loads and validates environment variables.

---

### Step 6 — Implement Logging System

Structured logging was implemented using Winston.

File:

config/logger.js

This replaces console logging and prepares the system for observability.

---

### Step 7 — Create Utility Layer

Utility helpers were implemented:

- ApiError
- apiResponse
- asyncHandler

These utilities provide reusable helpers for consistent error handling and response formatting.

---

### Step 8 — Implement Middleware Architecture

Core middleware components were created:

- validate.middleware
- notFound.middleware
- error.middleware

These manage validation, error handling, and request flow.

---

### Step 9 — Bootstrap Express Application

The Express application was assembled.

Files created:

app.js
server.js

`app.js` configures middleware and routes.

`server.js` starts the server.

---

### Step 10 — Configure Code Quality Tools

Code quality tools were configured.

Tools used:

- ESLint
- Prettier

These tools ensure consistent formatting and detect coding issues.

---

# What Can Go Wrong

Potential risks during this phase include:

- placing business logic inside controllers
- incorrect middleware order
- inconsistent API responses
- accessing environment variables directly
- missing global error handling

---

# Observability

Basic observability was introduced using structured logging with Winston.

Future phases will introduce:

- request logging
- performance monitoring
- metrics collection

---

# Outcome

After completing Phase 1, the backend now has:

- a clean Express architecture
- layered backend structure
- centralized configuration management
- structured logging
- middleware-based request lifecycle
- standardized API responses
- versioned API routing
- a working health check endpoint

This foundation allows the project to move forward with implementing real application modules.

---

# Phase 2 Entry Criteria

Before starting Phase 2, the following conditions must be satisfied:

- Express server starts successfully
- Health endpoint works correctly
- Global error middleware functions correctly
- Code quality tools are configured
- Phase documentation is complete

Once these conditions are satisfied, the project can move to:

**Phase 2 — Authentication & RBAC**
