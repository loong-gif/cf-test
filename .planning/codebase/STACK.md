# Technology Stack

**Analysis Date:** 2026-01-12

## Languages

**Primary:**
- TypeScript 5 - All application code (`tsconfig.json`)

**Secondary:**
- CSS - Design tokens and Tailwind utilities (`src/app/globals.css`)

## Runtime

**Environment:**
- Node.js (version not pinned, no `.nvmrc`)
- Browser (Next.js App Router SSR + client hydration)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 16.1.1 - App Router, SSR/SSG (`package.json`)
- React 19.2.3 - UI components (`package.json`)

**Testing:**
- None configured (no test framework)

**Build/Dev:**
- Tailwind CSS v4 - Styling (`@tailwindcss/postcss`)
- TypeScript - Compilation and type checking
- Biome 2.3.11 - Linting and formatting (`biome.json`)

## Key Dependencies

**Critical:**
- `@phosphor-icons/react` 2.1.10 - Icon library (only icon source allowed per CLAUDE.md)
- `next` 16.1.1 - App Router, SSR, routing
- `react` 19.2.3 - Component model, hooks, context

**Dev Dependencies:**
- `@biomejs/biome` 2.3.11 - Code quality enforcement
- `eslint` 9 + `eslint-config-next` 16.1.1 - Next.js-specific rules
- `ultracite` 7.0.10 - Referenced in scripts

## Configuration

**Environment:**
- No `.env` files committed (gitignored at line 39)
- No `.env.example` present
- All data from mock layer (no external API keys required)

**Build:**
- `tsconfig.json` - Strict mode, ES2017 target, `@/*` path alias
- `next.config.ts` - Images unoptimized (Cloudinary-ready)
- `biome.json` - Formatting (2-space, single quotes, no semicolons)

## Platform Requirements

**Development:**
- Any platform with Node.js
- No external dependencies (mock data only)

**Production:**
- Vercel deployment target
- Cloudinary for images (configured, not connected)
- Supabase for database (schema ready, backend team integrates)

---

*Stack analysis: 2026-01-12*
*Update after major dependency changes*
