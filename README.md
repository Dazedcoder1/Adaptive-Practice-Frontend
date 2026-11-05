# AdaptiveLearn AI - Frontend

Next.js (App Router) + TypeScript web app for the AdaptiveLearn AI Student Portal and Super Admin
Portal. Tailwind CSS, shadcn/ui, TanStack Query, Zustand, React Hook Form + Zod, Framer Motion,
KaTeX. Vitest component tests and Playwright end-to-end tests.

The API is in the separate backend repo: Dazedcoder1/Adaptive-Practice-Backend.

## Setup (Windows PowerShell)

Copy `.env.local.example` to `.env.local`. `API_PROXY_TARGET` is where the backend runs: the
browser calls `/api/v1` on this app's own origin and Next.js forwards it there.

```powershell
npm install
npm run dev
```

Student portal: http://localhost:3000 - Admin: http://localhost:3000/admin/login
Start the backend first (see its README).

## Checks

```powershell
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
```

### End-to-end tests

Run the backend with `ENVIRONMENT=test` against a throwaway database (it exposes a test-only email
inbox), then:

```powershell
npx playwright install chromium
npm run test:e2e
```

CI runs the checks above, then checks out the backend repo and runs the Playwright suite against
both. If the backend repo is private, add a repository secret `BACKEND_REPO_TOKEN` (a fine-grained
token with read-only Contents access to the backend repo).
