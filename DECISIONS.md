Decision 1: Use Node.js with Express.js for the Backend

Context:
The assignment required building backend APIs for an e-commerce workflow, with flexibility in choosing the technology stack.

Options Considered:

Option A: Node.js with Express.js

Option B: Python with Flask/FastAPI

Choice:
Node.js with Express.js

Why:
I chose Node.js with Express because it allows rapid development of REST APIs, has a simple middleware-based architecture, and aligns well with Neustack’s primary technology stack (Node.js/TypeScript). Express also provides flexibility without enforcing heavy abstractions, which was suitable for an in-memory, API-focused assignment.

Decision 2: Use an In-Memory Data Store Instead of a Database

Context:
The assignment explicitly mentioned that a database was not required and that an in-memory store was acceptable.

Options Considered:

Option A: Use an in-memory JavaScript object

Option B: Use a database like MongoDB or SQLite

Choice:
In-memory JavaScript object

Why:
Using an in-memory store reduced complexity and setup time while still fulfilling all functional requirements. It also made the business logic easier to reason about and test. Since persistence across restarts was not required, a database would have added unnecessary overhead.

Decision 3: Separate Business Logic into Service Layers

Context:
As the application grew (cart logic, checkout logic, discount logic), placing all logic inside routes would reduce readability and maintainability.

Options Considered:

Option A: Put all logic inside route handlers

Option B: Separate logic into service files

Choice:
Service-layer architecture

Why:
Separating business logic into services improves code clarity, reusability, and testability. Routes remain thin and focused on request/response handling, while services encapsulate core business rules like discount validation and checkout calculations. This structure also makes unit testing easier.

Decision 4: Implement Discount Codes as Single-Use and Order-Level

Context:
The discount system required validating discount codes and applying them during checkout.

Options Considered:

Option A: Allow reusable discount codes

Option B: Make discount codes single-use and order-level

Choice:
Single-use, order-level discount codes

Why:
Single-use discount codes prevent repeated misuse and simplify validation logic. Applying discounts at the order level (instead of per-item) keeps the checkout logic simple and aligns with the assignment description. This design can also be easily extended later for more complex discount strategies.

Decision 5: Build an API-First Backend Without a Frontend UI

Context:
The assignment mentioned that a frontend was optional and backend APIs were the primary requirement.

Options Considered:

Option A: Build both frontend and backend

Option B: Build backend APIs only and test via Postman

Choice:
Backend APIs only

Why:
Focusing on the backend ensured that core business logic, API design, and correctness were prioritized. A frontend was not required, and APIs were tested using Postman with documented request/response examples. This approach aligned with the assignment requirements and avoided unnecessary scope creep.

✅ Summary

The design decisions focused on:

Simplicity and clarity

Alignment with assignment requirements

Clean separation of concerns

Ease of testing and explanation during interviews
