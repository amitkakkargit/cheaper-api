# Cheaper API

NestJS API using Prisma and PostgreSQL.

## Setup

1. Install dependencies:

```powershell
npm install
```

2. Create `.env` from the example:

```powershell
Copy-Item .env.example .env
```

3. Update `DATABASE_URL` in `.env` if your PostgreSQL credentials differ.

4. Sync Prisma and generate the client:

```powershell
npx prisma db push
npx prisma generate
```

5. Start the API:

```powershell
npm run start:dev
```

## Auth

Mock Google auth accepts any non-empty `idToken`. If the token contains `@`, it is treated as the email; otherwise a mock Google email is generated.

Mock phone OTP always returns and accepts `123456`.

Use returned JWTs with:

```text
Authorization: Bearer <accessToken>
```

## Endpoints

- `POST /auth/google`
- `POST /auth/phone/request-otp`
- `POST /auth/phone/verify-otp`
- `GET /auth/me`
- `GET /users/me`
- `GET /users/:id`
- `POST /sellers`
- `GET /sellers`
- `GET /sellers/:id`
- `POST /products`
- `GET /products`
- `GET /products/:id`
- `POST /seller-reviews`
- `GET /seller-reviews/:sellerId`
- `POST /product-reviews`
- `GET /product-reviews/:productId`

## Validation And Errors

DTOs use `class-validator`, and a global validation pipe strips unknown fields. A global exception filter returns consistent JSON error responses.
