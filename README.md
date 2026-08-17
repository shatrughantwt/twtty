**Project Title**: Twtty (monorepo)

**Short Description**:
Twtty is a Next.js-based monorepo (Turborepo) that demonstrates a frontend-first component-driven application. It contains a Next 13+ app under `apps/web` and a shared `packages/ui` component library. The application uses the Next app router, Tailwind CSS for styling and mock data for UI demos.

**Overview**
This repository is a developer-focused monorepo demonstrating:
- A Next.js (app router) frontend application in `apps/web`.
- A small shared UI package in `packages/ui` with utility helpers.
- Workspace orchestration using Turborepo (root `package.json` + `turbo.json`).

Key intent: showcase component design, theming, and page composition — not a backend API or production data store.

**Key Features**
- Next.js (app router) single-page entry at `/` that renders a `Navbar` and a `Trending E-lafda` section.
- Shared UI primitives and helpers in `packages/ui` (utility `cn`, exported module entry).
- Tailwind + CSS utilities for styling (`apps/web/src/app/globals.css`).
- Mock data-driven UI (see `apps/web/src/mock-data/mock-lafda-data.ts`).
- Dialog / sign-in UI flows (client-side components) demonstrating composition of primitives.

**Architecture**
This is a frontend monorepo with a simple architecture:
- Monorepo root: orchestrates workspaces via Turborepo. `packageManager` is configured to `bun@1.3.5` in `package.json`.
- `apps/web`: Primary Next.js application (app-router). It imports shared components from `packages/ui` and local `src/components`.
- `packages/ui`: Shared component library and small utilities consumed by `apps/web`.

There is no backend service, API server, message broker, or database in this repository. All dynamic content in the app is provided by in-repo mock data.

**Services and Responsibilities**
- `apps/web`:
  - Responsibility: UI application / routes / pages. Contains the Next.js app router files (`src/app/layout.tsx`, `src/app/page.tsx`) and UI components used by pages.
  - Key files: `src/app/page.tsx`, `src/app/layout.tsx`, `src/components/*`, `src/mock-data/*`.
- `packages/ui`:
  - Responsibility: shared UI helpers and component building blocks (small library used by `apps/web`).
  - Key files: `index.ts`, `src/utils.ts` (exports `cn` helper).
- `packages/eslint-config` and `packages/typescript-config`:
  - Responsibility: shared developer configuration (eslint / tsconfig presets).

**How the Services Communicate**
All communication is local within the repository via ES module imports. `apps/web` imports components and utilities from `packages/ui` (and internal `src/components`). There is no networked inter-service communication.

**Tech Stack**
- Next.js 16 (app router)
- React 19
- Turborepo
- Bun (package manager configured in root package.json)
- TypeScript
- Tailwind CSS (v4) and `tailwind-merge`
- Utility libs: `clsx`, `class-variance-authority`, `lucide-react`, `@phosphor-icons/react`

**Project Structure**
Key files and folders (trimmed):

```
/
├─ apps/
│  └─ web/
│     ├─ package.json
│     └─ src/
│        ├─ app/
        │  ├─ layout.tsx
        │  ├─ page.tsx
        │  └─ globals.css
        ├─ components/  (Navbar, cards, dialog, many UI primitives)
        └─ mock-data/
           └─ mock-lafda-data.ts
├─ packages/
│  ├─ ui/  (shared component helpers)
│  ├─ eslint-config/
│  └─ typescript-config/
├─ package.json
└─ turbo.json
```

**Request / Event Flow**
- There is no server-side API or message broker. The app renders UI by importing mock data (`mock-lafda-data.ts`) and rendering components. User interactions (dialog opens, theme toggle) are handled client-side by React components.

**Prerequisites**
- Node 18+ (the root `engines.node` specifies >=18). The repo's `packageManager` is set to `bun@1.3.5`, so using Bun is recommended.
- Bun, npm, or pnpm installed. (This repo lists `bun` as the package manager; `npm`/`pnpm` should also work if you prefer but the manifest favors Bun.)

**Installation & Setup**
From the repository root:

```bash
# Install deps (recommended: Bun)
bun install

# Or with npm/pnpm if you prefer
# npm install
# pnpm install
```

**Environment Variables**
- This repository does not include or require any application-specific environment variables. The project contains `.gitignore` entries for `.env*`, but no `.env.example` or runtime secrets are present.

**How to Run the Project**
- Start the full monorepo (uses Turborepo to run workspace scripts):

```bash
# recommended (Bun)
bun run dev

# or with npm (runs turbo):
npm run dev
```

- Run only the web app directly:

```bash
cd apps/web
bun run dev
# or
npm run dev
```

- Build for production:

```bash
bun run build
# or
npm run build
```

- Lint / format:

```bash
bun run lint
bun run format
```

**Available Scripts**
- Root (`/package.json`):
  - `dev`: `turbo run dev` — runs dev for all workspaces
  - `build`: `turbo run build`
  - `lint`: `turbo run lint`
  - `format`: `prettier --write "**/*.{ts,tsx,md}"`
  - `check-types`: `turbo run check-types`
- Web app (`apps/web/package.json`):
  - `dev`: `next dev`
  - `build`: `next build`
  - `start`: `next start`
  - `lint`: `eslint`

**API Endpoints**
- This repository does not include a backend API or API routes (`pages/api` or app-router `route.ts`) implemented by the application. All data shown is served from in-repo mock data (`apps/web/src/mock-data/mock-lafda-data.ts`).

**Example Usage**
- Visit the app in the browser after starting dev server (default Next port `http://localhost:3000`). The home page (`/`) renders:
  - `Navbar` with links (some pages are placeholders)
  - `Trending E-lafda` cards rendered from `mock-lafda-data`
  - Sign-in dialog (client-side UI) demo

**Screenshots**
- (Add screenshots here: `/screenshots` or `docs/images/` — placeholder.)

**What I Learned / Demonstrates**
- How to structure a small monorepo with Turborepo and a Next.js app.
- Component-driven design and sharing UI primitives between packages.
- Building interactive client components (dialogs, toggles) with the Next app router.

**Future Improvements**
- Add a backend API (Express / Next API routes) and a persistent datastore for real data.
- Add a CI workflow and tests (unit / integration) to validate components.
- Add a README in `packages/ui` to document exported utilities and components.
- Add a LICENSE file and deploy configuration (Vercel / Cloud) if publishing.

**Contributing**
- Contributions are welcome — open an issue or PR describing the change. Add a license before accepting external contributions.

**License**
- No license file found in the repository. Add a `LICENSE` to clarify reuse (e.g., MIT).

--
If you'd like, I can also:
- add a `LICENSE` template,
- create a `README` for `packages/ui`, or
- add sample API stubs and a small Express/Next API to demonstrate full-stack flow.
