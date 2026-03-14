# Architecture Comparisons — Phase 1

This document compares different architectural approaches considered during **Phase 1 — Express Architecture & Project Foundation**.

The goal of this document is to explain **why certain architectural choices were made** while setting up the backend foundation.

While the Phase 1 document explains **what was implemented**, this document explains **why specific design decisions were chosen over alternatives**.

---

# 1 — Express vs Fastify

## Problem

When building a Node.js backend API, different web frameworks can be used.

Two popular options are:

1. Express
2. Fastify

Both frameworks are widely used in production systems.

The goal was to choose a framework suitable for building a scalable backend while supporting the learning goals of this project.

---

## Option 1 — Express (Chosen)

Express is one of the most widely used Node.js web frameworks.

### Advantages

- very large ecosystem
- widely used in production systems
- strong community support
- many middleware libraries available
- easy to learn and understand
- extensive documentation and tutorials

### Disadvantages

- slightly slower than Fastify in some benchmarks
- middleware chains can become complex in large applications

---

## Option 2 — Fastify

Fastify is a modern Node.js web framework designed with performance in mind.

### Advantages

- very high performance
- built-in schema validation support
- optimized request lifecycle
- structured plugin system

### Disadvantages

- smaller ecosystem compared to Express
- fewer learning resources
- fewer tutorials and real-world examples

---

## Decision

Express was chosen for this project because:

- it has a larger ecosystem
- it is easier to learn
- it is widely used in production systems
- it provides an excellent learning environment for backend architecture

Since this project focuses on **learning industry backend architecture**, Express provides the best balance between simplicity and real-world relevance.

---

# 2 — Layered Architecture vs Fat Controllers

## Problem

When building an Express backend, application logic can be organized in different ways.

Two common approaches are:

1. Fat Controllers
2. Layered Architecture

Choosing the correct structure is important for long-term maintainability.

---

## Option 1 — Fat Controllers

In this approach, controllers contain most of the application logic.

Controllers handle:

- request parsing
- business logic
- database queries
- response generation

### Example structure

Route → Controller

### Advantages

- fewer files
- simple structure for very small applications
- faster initial development

### Disadvantages

- controllers become very large
- business logic tightly coupled to HTTP logic
- difficult to test business logic independently
- harder to maintain as the system grows

---

## Option 2 — Layered Architecture (Chosen)

In layered architecture, responsibilities are separated into different layers.

Example request flow:

Route → Controller → Service → Utility

### Responsibilities

Route  
Defines API endpoints.

Controller  
Handles HTTP concerns such as request parsing and response formatting.

Service  
Contains business logic.

Utility / Helpers  
Provide reusable helper functions.

---

### Advantages

- clear separation of responsibilities
- easier testing
- easier maintenance
- easier onboarding for new developers
- scalable architecture for larger systems

### Disadvantages

- more files and folders
- slightly more setup required

---

## Decision

Layered architecture was chosen because it provides:

- better maintainability
- clearer code organization
- strong separation of concerns
- easier scalability for larger backend systems

The final architecture decision is documented in:

docs/decisions/ADR-001-layered-architecture.md

---

# 3 — Centralized Error Handling vs Local Try–Catch

## Problem

Errors can be handled in different ways in an Express application.

Two common approaches are:

1. Local try–catch blocks in controllers
2. Centralized error middleware

The goal is to ensure consistent error handling while keeping controllers clean.

---

## Option 1 — Try–Catch in Every Controller

Each controller handles errors using try–catch blocks.

Example pattern:

try {
// business logic
} catch (error) {
// handle error
}

### Advantages

- easy to understand initially
- simple approach for very small applications

### Disadvantages

- repeated code across controllers
- inconsistent error responses
- controllers become cluttered
- difficult to maintain

---

## Option 2 — Centralized Error Middleware (Chosen)

In this approach, controllers throw errors and a global middleware handles them.

Example flow:

Controller → throw error → Global Error Middleware

### Advantages

- consistent error responses
- cleaner controllers
- centralized error management
- easier debugging and logging

### Disadvantages

- requires understanding Express middleware flow

---

## Decision

Centralized error middleware was chosen because it provides:

- cleaner controller logic
- consistent API error responses
- easier debugging and maintenance

This approach is widely used in production Express applications.

---

# Summary of Decisions

| Topic                 | Decision                     |
| --------------------- | ---------------------------- |
| Web framework         | Express                      |
| Application structure | Layered Architecture         |
| Error handling        | Centralized Error Middleware |

These decisions form the **architectural foundation of the backend system**.

---

# Relationship With ADRs

The final architecture decisions based on these comparisons are documented in:

docs/decisions/
ADR-001-layered-architecture.md
ADR-002-app-server-separation.md
ADR-003-centralized-config.md
ADR-004-error-middleware.md
ADR-005-api-versioning.md

---

# Relationship With Phase Documentation

This document explains **why certain architecture decisions were made**.

The implementation details are documented in:

docs/phases/01-express-architecture.md
