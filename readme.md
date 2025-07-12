# 🚀 Prisma Playground

Welcome to the **Prisma Playground** – your all-in-one learning hub to master **Prisma** ORM with hands-on examples and clear concepts.

![Prisma](https://raw.githubusercontent.com/prisma/docs/main/static/img/prisma-logo.svg)

---

## 📚 Table of Contents

* [🔍 What is Prisma?](#-what-is-prisma)
* [💡 Why Prisma?](#-why-prisma)
* [⚙️ Getting Started](#️-getting-started)
* [✨ Features of Prisma](#-features-of-prisma)
* [🧩 Prisma Queries](#-prisma-queries)
* [🔓 Raw SQL Queries](#-raw-sql-queries)
* [📦 Prisma Schema Overview](#-prisma-schema-overview)
* [🛠 Common Commands](#-common-commands)
* [🧠 Resources](#-resources)
* [📄 License](#-license)

---

## 🔍 What is Prisma?

**Prisma** is a next-generation **TypeScript ORM** (Object-Relational Mapping) that simplifies database access with auto-generated and type-safe queries.

It consists of:

* **Prisma Client** – Auto-generated, type-safe query builder.
* **Prisma Migrate** – Migration system for evolving your database schema.
* **Prisma Studio** – GUI to view and edit data in your database.

---

## 💡 Why Prisma?

* 🧠 **Type-safe:** Catch database issues during development, not at runtime.
* 🚀 **Fast Prototyping:** Powerful tools for quick development and iteration.
* 🛡️ **Auto-completion:** Write queries with intelligent IntelliSense support.
* 🔐 **Secure:** Prevent common SQL injection attacks.
* 👨‍💻 **Developer Friendly:** Cleaner syntax and better dev experience.

---

## ⚙️ Getting Started

```bash
# Install dependencies
npm install prisma --save-dev
npm install @prisma/client

# Initialize Prisma
npx prisma init

# Generate Prisma Client
npx prisma generate
```

---

## ✨ Features of Prisma

* ✅ Type-safe database queries
* ✅ Auto-generated client
* ✅ Relations handling (1:1, 1\:N, M\:N)
* ✅ Migrations with version control
* ✅ Embedded support for PostgreSQL, MySQL, SQLite, MongoDB
* ✅ Easy integration with REST/GraphQL
* ✅ Raw SQL execution

---

## 🧩 Prisma Queries

### 🔎 Find (Read)

```ts
const allUsers = await prisma.user.findMany();
const user = await prisma.user.findUnique({ where: { id: 1 } });
```

### ➕ Create

```ts
const newUser = await prisma.user.create({
  data: {
    name: "John Doe",
    email: "john@example.com"
  }
});
```

### 🔄 Update

```ts
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: { name: "Jane Doe" }
});
```

### ❌ Delete

```ts
const deletedUser = await prisma.user.delete({
  where: { id: 1 }
});
```

### 🔗 Relations (Example)

```ts
const userWithPosts = await prisma.user.findUnique({
  where: { id: 1 },
  include: { posts: true }
});
```

---

## 🔓 Raw SQL Queries

Prisma supports executing raw SQL queries using:

```ts
const result = await prisma.$queryRaw`SELECT * FROM "User" WHERE id = ${userId}`;
```

You can also use unsafe string queries:

```ts
const raw = await prisma.$executeRawUnsafe('DELETE FROM "User" WHERE id = 1');
```

⚠️ Use raw queries carefully to avoid SQL injection. Prefer `$queryRaw` with template strings for safety.

---

## 📦 Prisma Schema Overview

Example `schema.prisma`:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

---

## 🛠 Common Commands

```bash
npx prisma init                   # Setup Prisma in your project
npx prisma migrate dev            # Create & apply migrations
npx prisma db push                # Push schema changes to DB
npx prisma generate               # Generate Prisma client
npx prisma studio                 # Launch visual database GUI
npx prisma format                 # Format your schema
```

---

## 🧠 Resources

* 📘 [Official Prisma Docs](https://www.prisma.io/docs)
* 💬 [Prisma Community](https://www.prisma.io/community)
* 🔗 [Awesome Prisma](https://github.com/catalinmiron/awesome-prisma)

---

## 📄 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and share!

---

> ✨ *Happy coding with Prisma!* — Explore, break, and build confidently 💪
