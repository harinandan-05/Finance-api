# 📊 Finance Dashboard API

An elegant, role-based backend system for a robust Finance Dashboard built with **Node.js, Express, TypeScript, and MongoDB**. 🚀

This system supports comprehensive storage and management of financial entries, sophisticated user privilege protocols, comprehensive validations, and analytical summary logic to serve any frontend dashboard dynamically.

---

## 🎯 Project Scenario & Core Features

### 1. 🔐 User & Role Management (Access Control)
Secure authentication flow powered by `jsonwebtoken` and `bcrypt` enforcing strict Access Control Logic:
- **Viewer**: Read-only access to records and summaries.
- **Analyst**: Has privileges to both read records and derive metrics (dashboard insights).
- **Admin**: Full authority to create, read, update, delete records, and manage user roles.

### 2. 💵 Financial Records Management
Full CRUD actions for financial transactions with the following schema logic:
- Fields: `Amount`, `Type` (Income/Expense), `Category`, `Date`, `Description/Notes`.
- Endpoints are properly guarded by JWT and role middlewares.

### 3. 📈 Dashboard Summary
Analytical APIs returning aggregated metrics like totals and history over time. Designed efficiently for frontend dashboards to query aggregated calculations rather than iterating raw arrays on the client.

### 4. 🛡️ Validation & Error Handling
Standardized handling of failed input, illegal requests, and invalid JWT verifications with respective semantic HTTP Status Codes (e.g., `401 Unauthorized`, `403 Forbidden`, `404 Not Found`).

---

## 🛠️ Technology Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (via Mongoose)
- **Security**: JWT & Bcrypt

---

## 💻 Setup & Installation Guide

Follow these steps to get the API running locally:

**1. Clone the repository and navigate into it**
```bash
cd Finance
```

**2. Install Dependencies**
```bash
npm install
```

**3. Configure Environment Variables**
A `.env` file must be located at the root of the project with your secrets:
```env
JWT_SECRET=your_super_secret_jwt_key
```

**4. Build the Application**
Transpile the TypeScript code base into JavaScript.
```bash
npm run build
```

**5. Start the Server**
Run the development environment locally (port 3000 by default).
```bash
npm run dev
```

Server should successfully connect to the database and will be accessible on `http://localhost:3000` ✨

---

## 🔌 API Endpoints Structure

Below are the mapped routes available within the application natively prefixing `/api/v1`:

### 👤 Auth Routes (`/api/v1/auth`)
- `POST /register` – Register a new user securely.
- `POST /login` – Authenticate to retrieve the Authorization Token.

### 👥 User Routes (`/api/v1/user`)
- `GET /` – Fetch all registered users. *(Admin)*
- `PUT /:id/role` – Elevate or demote user permissions (`viewer`, `analyst`, `admin`). *(Admin)*

### 📂 Financial Records (`/api/v1/record`)
- `POST /` – Generate a new financial record. *(Admin, Analyst)*
- `GET /` – Fetch all financial records with filter parameters (e.g., category, type, date). *(Admin, Analyst, Viewer)*
- `GET /:id` – Fetch a specific record. *(Admin, Analyst, Viewer)*
- `PUT /:id` – Update existing record data. *(Admin, Analyst)*
- `DELETE /:id` – Wipe a record from the database. *(Admin, Analyst)*

### 📊 Dashboard Insights (`/api/v1/dashboard`)
- `GET /` – Obtain analytical summaries (Total expenses, Income, Net Balance, Categories breakdown). *(Admin, Analyst, Viewer)*

---

## 🧠 Design Philosophy

- **Simplicity & Maintainability**: Adhered to clean, concise routing with specialized controllers separating concerns logically.
- **Modularity**: Codebase splits into `/auth`, `/dashboard`, `/record`, and `/user` components representing isolated and flexible enterprise domains.
- **RESTful**: Strict adherence to stateless transfer rules and predictable HTTP verbs/methods. 
- **Security First**: Authentication gates integrated as router middlewares filtering out malicious/unauthorized activity efficiently.

Happy Coding Start! 
