# Cheaper API

NestJS, TypeScript, Prisma, and PostgreSQL backend for the Cheaper local marketplace. The API owns authentication, users, seller profiles, products, manual handoff confirmation, reviews, validation, error formatting, logging, and database seeding.

## Local Stack

- Backend: `http://localhost:3001`
- Web frontend: `http://localhost:3000`
- Database: PostgreSQL database named `cheaper`
- ORM: Prisma using `DATABASE_URL` from `.env`
- Auth: JWT after email or phone OTP verification

## Setup

1. Install dependencies:

```powershell
npm install
```

2. Create `.env`:

```powershell
Copy-Item .env.example .env
```

3. Use this local database URL unless your PostgreSQL password or port differs:

```env
DATABASE_URL="postgresql://postgres:cheaper@localhost:5432/cheaper?schema=public"
PORT=3001
FRONTEND_ORIGIN="http://localhost:3000"
JWT_SECRET="local-dev-secret"
```

4. Create the database if it does not exist:

```powershell
createdb -U postgres cheaper
```

5. Apply Prisma schema and generate the client:

```powershell
npx prisma db push
npx prisma generate
```

6. Import sample data from the web project's legacy JSON files:

```powershell
npm run db:seed
```

7. Start the API:

```powershell
npm run start:dev
```

## Data Model

- `User`: account record for buyers and sellers. Users can log in with email or phone OTP, update name/avatar, own seller profiles, confirm purchases, and write reviews.
- `OtpCode`: database-backed OTP records with channel, target, code, expiry, and used timestamp.
- `Seller`: seller profile owned by a user. Includes location, avatar, bio, latitude, longitude, products, and seller reviews.
- `Product`: listing owned by a seller. Includes title/name, description, pricing, media, category, location, latitude, longitude, purchase confirmations, and reviews.
- `Purchase`: manual handoff confirmation record. A buyer confirms they got the product, then the seller confirms it was sold.
- `ProductReview`: one product review per user per product.
- `SellerReview`: one seller review per user per seller.

## Authentication Workflow

1. Client requests an OTP:
   - `POST /auth/phone/request-otp`
   - `POST /auth/email/request-otp`
2. API stores the OTP in the database with a 60 second expiry.
3. For local development, the OTP is returned in the response. No real SMS or email is sent yet.
4. Client verifies the OTP:
   - `POST /auth/phone/verify-otp`
   - `POST /auth/email/verify-otp`
5. API finds or creates the user and returns a JWT.
6. Clients send protected requests with:

```text
Authorization: Bearer <accessToken>
```

`POST /auth/google` also exists for development/mock Google-token testing, but the product login flow is email or phone OTP.

## Profile Workflow

- `GET /auth/me` returns the current logged-in user.
- `GET /users/me` returns the current profile with owned seller profiles.
- `PATCH /users/me` updates profile fields such as `name` and `avatarUrl`.
- Avatar uploads are currently stored as URL/data URL strings by the client.

## Marketplace Workflow

1. A user logs in with email or phone OTP.
2. A user creates a seller profile with `POST /sellers`.
3. The seller creates products with `POST /products`.
4. Buyers browse products with `GET /products` and view details with `GET /products/:id`.
5. The buyer and seller meet in person. No payment is handled by this system.
6. The buyer confirms they received the item with `POST /products/confirm-bought`.
7. The seller confirms the item was sold with `POST /products/confirm-sold`.
8. Reviews are allowed after the handoff is confirmed by both sides.

## Review Rules

- Auth is required to create product and seller reviews.
- A seller cannot review their own product or their own seller profile.
- A buyer can review a product only after they have confirmed they received it and the seller has confirmed it was sold.
- A seller can review another seller's product only if they are acting as a buyer for that product and the handoff is confirmed.
- Prisma unique constraints enforce one review per user per product and one review per user per seller.
- Public review displays should expose only safe public fields: reviewer name, rating, comment, and created date. Do not expose email, phone, internal account details, or JWT data.
- Product and seller review visibility should follow the two-sided handoff policy: reviews become part of public product/seller reputation only after the relevant transaction is confirmed.

## Endpoints

### Auth

- `POST /auth/google`
- `POST /auth/phone/request-otp`
- `POST /auth/phone/verify-otp`
- `POST /auth/email/request-otp`
- `POST /auth/email/verify-otp`
- `GET /auth/me`

### Users

- `GET /users/me`
- `PATCH /users/me`
- `GET /users/:id`

### Sellers

- `POST /sellers`
- `GET /sellers`
- `GET /sellers/:id`

### Products

- `POST /products`
- `GET /products`
- `GET /products/:id`
- `POST /products/confirm-bought`
- `POST /products/confirm-sold`

`GET /products` supports basic filters such as search, seller, category, and location.

### Reviews

- `POST /seller-reviews`
- `GET /seller-reviews/:sellerId`
- `POST /product-reviews`
- `GET /product-reviews/:productId`

## Validation, Errors, And Logging

- DTOs use `class-validator`.
- The global validation pipe strips unknown fields and rejects invalid request bodies.
- A global exception filter returns consistent JSON errors.
- Logging middleware records incoming requests.
- Controllers stay thin; database and business rules live in services.

## Seed Data

`npm run db:seed` migrates legacy JSON data from `../cheaper/data` into PostgreSQL and creates sample users, sellers, products, confirmations, and reviews. The seed script avoids blocked external image/video URLs and lets the web app use local generated product images instead.

Run it again whenever you need to refresh local development data:

```powershell
npm run db:seed
```

## Development Commands

```powershell
npm run start:dev
npm run typecheck
npm run build
npm test -- --runInBand
```

## Troubleshooting

If port `3001` is already in use:

```powershell
Get-NetTCPConnection -LocalPort 3001 | Select-Object -ExpandProperty OwningProcess
Stop-Process -Id <PID> -Force
```

If CORS fails, confirm:

- API is running on `http://localhost:3001`
- Web is running on `http://localhost:3000`
- `.env` contains `FRONTEND_ORIGIN="http://localhost:3000"`

If OTP says it was sent but nothing arrives, that is expected in local development. Read the OTP from the API response or server logs. Real SMS/email delivery has not been connected yet.
