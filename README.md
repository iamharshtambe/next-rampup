# Next.js Routing Complete Guide

A comprehensive guide covering all aspects of Next.js App Router, from basic routing to advanced concepts like parallel routes and middleware.

## Table of Contents

- [Basic Routing](#basic-routing)
- [Dynamic Routes](#dynamic-routes)
- [Advanced Routing](#advanced-routing)
- [Special Files](#special-files)
- [Navigation](#navigation)
- [Error Handling](#error-handling)
- [Advanced Features](#advanced-features)
- [Route Handlers (API Routes)](#route-handlers-api-routes)
- [Middleware](#middleware)

---

## Basic Routing

### File-based Routing System

Next.js uses a file-based routing system where your folder structure determines your routes.

#### Scenario 1: Root Pages

```
/app/page.tsx          → /
```

#### Scenario 2: Static Routes

```
/app/about/page.tsx    → /about
/app/profile/page.tsx  → /profile
```

### Nested Routes

#### Scenario 3: Nested Static Routes

```
/app/blog/first/page.tsx   → /blog/first
/app/blog/second/page.tsx  → /blog/second
```

---

## Dynamic Routes

### Single Dynamic Routes

#### Scenario 4: Product Pages

```
/app/products/page.tsx              → /products
/app/products/[productId]/page.tsx  → /products/:productId
```

**Parameters Access:**

```typescript
{params}: {params: {productId: string}}
```

### Nested Dynamic Routes

#### Scenario 5: Product Reviews

```
/app/products/[productId]/reviews/[reviewId]/page.tsx
→ /products/:productId/reviews/:reviewId
```

### Catch-All Segments

#### Scenario 6: Documentation Routes

```
/app/docs/[[...slug]]/page.tsx
```

**Matches:**

- `/docs` (optional catch-all)
- `/docs/getting-started`
- `/docs/api/authentication`
- `/docs/guides/deployment/vercel`

---

## Advanced Routing

### File Colocation

You can colocate components with pages:

```
/app/dashboard/
  ├── page.tsx
  └── line-chart.tsx  // Component used by page
```

### Private Folders

Prefix folders with `_` to make them private:

```
/app/_lib/          // Not accessible via URL
```

### Route Groups

Use parentheses to group routes without affecting URL structure:

```
/app/(auth)/
  ├── login/page.tsx     → /login
  └── register/page.tsx  → /register

/app/(marketing)/
  ├── about/page.tsx     → /about
  └── contact/page.tsx   → /contact
```

---

## Special Files

### Not Found Pages

```typescript
// app/not-found.tsx
export default function NotFound() {
  return <h1>Page Not Found</h1>;
}

// In page components
import { notFound } from 'next/navigation';
import { usePathname } from 'next/navigation';
```

### Layouts

#### Shared UI Elements

```typescript
// app/layout.tsx - Root layout
// app/dashboard/layout.tsx - Nested layout
```

**Key Features:**

- Shared UI across multiple pages
- State preservation during navigation
- Nested layouts support

#### Multiple Root Layouts

```
/app/(marketing)/layout.tsx  // Marketing layout
/app/(auth)/layout.tsx       // Authentication layout
```

### Templates vs Layouts

| Feature            | Layout             | Template               |
| ------------------ | ------------------ | ---------------------- |
| State Preservation | ✅ Input preserved | ❌ Fresh on navigation |
| File Name          | `layout.tsx`       | `template.tsx`         |
| Use Case           | Persistent UI      | Fresh instances        |

### Loading UI

```typescript
// app/loading.tsx
export default function Loading() {
  return <div>Loading...</div>;
}
```

---

## Navigation

### Link Component

```typescript
import Link from 'next/link';

<Link href="/" replace>
  Blog
</Link>;
```

### Active Links

```typescript
const isActive =
  pathname === link.href ||
  (pathname.startsWith(link.href) && link.href !== '/');
```

### Parameters and Search Params

```typescript
// URL: /articles/breaking-news?lang=en
type Props = {
  params: { articleId: string };
  searchParams: Promise<{ lang?: 'en' | 'fr' | 'es' }>;
};

// Note: layout.tsx only receives params, not searchParams
```

### Programmatic Navigation

```typescript
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

// Client-side
const router = useRouter();
router.push('/dashboard');

// Server-side
redirect('/login');
```

---

## Error Handling

### Error Pages

```typescript
// app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

### Error Boundaries Scope

- **error.tsx**: Catches errors up to two segments deep
- **Can't catch layout errors** at the same segment level
- Use **global-error.tsx** for global error handling

### Global Error Handling

```typescript
// app/global-error.tsx
'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
```

**Note:** Global error only works in production mode and requires `html` and `body` tags.

---

## Advanced Features

### Parallel Routes

#### Scenario 7: Dashboard with Multiple Sections

```
/app/dashboard/
  ├── @notifications/page.tsx
  ├── @user/page.tsx
  ├── @revenue/page.tsx
  └── page.tsx
```

**Benefits:**

- Independent route handling
- Own loading and error states
- Sub-navigation support

#### Unmatched Routes

```typescript
// app/dashboard/@notifications/default.tsx
export default function Default() {
  return <div>Default notifications</div>;
}
```

#### Conditional Routes

```typescript
// Show different content based on authentication
/app/@login/page.tsx
/app/@dashboard/page.tsx
```

### Intercepting Routes

Intercept routes to show them in different contexts (e.g., modals):

```
/app/f1/(..)f2/page.tsx     // Intercepts /f2 when navigating from /f1
/app/f1/(...)f3/page.tsx    // Intercepts /f3 from root
```

**Intercepting Patterns:**

- `(.)` - Same level
- `(..)` - One level up
- `(..)(..)` - Two levels up
- `(...)` - From root

---

## Metadata

### Static Metadata

```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page',
  description: 'Page description',
};
```

### Dynamic Metadata

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: `Product ${params.id}`,
  };
}
```

### Title Templates

```typescript
export const metadata = {
  title: {
    default: 'My App',
    template: '%s | My App',
    absolute: 'Exact Title', // Ignores template
  },
};
```

**Priority:** Page Metadata > Layout Metadata

**Important:** Cannot use `'use client'` with metadata exports.

---

## Route Handlers (API Routes)

### Basic Setup

```typescript
// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: 'Hello World' });
}

export async function POST(request: Request) {
  const data = await request.json();
  return Response.json(data);
}
```

### Supported Methods

- `GET` `POST` `PUT` `PATCH` `DELETE` `HEAD` `OPTIONS`
- Unsupported methods return `405 Method Not Allowed`

### Dynamic Route Handlers

```typescript
// app/api/comments/[id]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  return Response.json({ id: params.id });
}
```

### Query Parameters

```typescript
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  return Response.json({ query });
}
```

### Headers and Cookies

```typescript
import { headers, cookies } from 'next/headers';

export async function GET() {
  // Headers
  const headersList = headers();
  const userAgent = headersList.get('user-agent');

  // Cookies
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  return Response.json({ userAgent, token });
}
```

### Redirects

```typescript
import { redirect } from 'next/navigation';

export async function GET() {
  redirect('/');
}
```

### Caching

```typescript
// Force static caching
export const dynamic = 'force-static';

// Revalidate every 10 seconds
export const revalidate = 10;

// Note: Only GET methods are cached by default
// Using headers() or cookies() disables caching
```

---

## Middleware

### Basic Setup

```typescript
// src/middleware.ts or middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirect logic
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // URL rewrite
  if (request.nextUrl.pathname.startsWith('/api/old')) {
    return NextResponse.rewrite(new URL('/api/new', request.url));
  }
}

// Configure paths
export const config = {
  matcher: [
    '/admin/:path*',
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
```

### Use Cases

- **Authentication**: Protect routes
- **Redirects**: Route users based on conditions
- **URL Rewrites**: Internal routing changes
- **Headers**: Add custom headers
- **Cookies**: Manage user sessions

### Path Matching

```typescript
// Custom matcher
export const config = {
  matcher: ['/dashboard/:path*', '/profile'],
};

// Conditional statements
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // API middleware logic
  }
}
```

---

## Best Practices

### 🏗️ Structure

- Use route groups `()` for organization
- Colocate related components
- Keep layouts minimal and focused

### 🚀 Performance

- Implement proper loading states
- Use parallel routes for independent sections
- Leverage middleware for early redirects

### 🛡️ Error Handling

- Always implement error boundaries
- Use global-error.tsx for fallbacks
- Provide meaningful error messages

### 🔍 SEO

- Use metadata exports for better SEO
- Implement proper page titles and descriptions
- Consider dynamic metadata for content-driven pages

---

## Quick Reference

| File            | Purpose             | Can Use              |
| --------------- | ------------------- | -------------------- |
| `page.tsx`      | Route UI            | params, searchParams |
| `layout.tsx`    | Shared UI           | params only          |
| `template.tsx`  | Fresh UI            | params only          |
| `loading.tsx`   | Loading UI          | -                    |
| `error.tsx`     | Error UI            | error, reset         |
| `not-found.tsx` | 404 UI              | -                    |
| `route.ts`      | API endpoint        | HTTP methods         |
| `middleware.ts` | Request interceptor | NextRequest          |

---

_This guide covers Next.js App Router features. For more detailed information, refer to the [official Next.js documentation](https://nextjs.org/docs)._
