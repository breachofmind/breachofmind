<!-- intent-skills:start -->
## Skill Loading

Before substantial work:
- Skill check: run `yarn dlx @tanstack/intent@latest list`, or use skills already listed in context.
- Skill guidance: if one local skill clearly matches the task, run `yarn dlx @tanstack/intent@latest load <package>#<skill>` and follow the returned `SKILL.md`.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->

# Skill mappings - load `use` with `yarn dlx @tanstack/intent@latest load <use>`.
skills:
  - when: "Install TanStack Devtools, pick framework adapter (React/Vue/Solid/Preact), register plugins via plugins prop, configure shell (position, hotkeys, theme, hideUntilHover, requireUrlFlag, eventBusConfig). TanStackDevtools component, defaultOpen, localStorage persistence."
    use: "@tanstack/devtools#devtools-app-setup"
  - when: "Publish plugin to npm and submit to TanStack Devtools Marketplace. PluginMetadata registry format, plugin-registry.ts, pluginImport (importName, type), requires (packageName, minVersion), framework tagging, multi-framework submissions, featured plugins."
    use: "@tanstack/devtools#devtools-marketplace"
  - when: "Build devtools panel components that display emitted event data. Listen via EventClient.on(), handle theme (light/dark), use @tanstack/devtools-ui components. Plugin registration (name, render, id, defaultOpen), lifecycle (mount, activate, destroy), max 3 active plugins. Two paths: Solid.js core with devtools-ui for multi-framework support, or framework-specific panels."
    use: "@tanstack/devtools#devtools-plugin-panel"
  - when: "Handle devtools in production vs development. removeDevtoolsOnBuild, devDependency vs regular dependency, conditional imports, NoOp plugin variants for tree-shaking, non-Vite production exclusion patterns."
    use: "@tanstack/devtools#devtools-production"
  - when: "Two-way event patterns between devtools panel and application. App-to-devtools observation, devtools-to-app commands, time-travel debugging with snapshots and revert. structuredClone for snapshot safety, distinct event suffixes for observation vs commands, serializable payloads only."
    use: "@tanstack/devtools-event-client#devtools-bidirectional"
  - when: "Create typed EventClient for a library. Define event maps with typed payloads, pluginId auto-prepend namespacing, emit()/on()/onAll()/onAllPluginEvents() API. Connection lifecycle (5 retries, 300ms), event queuing, enabled/disabled state, SSR fallbacks, singleton pattern. Unique pluginId requirement to avoid event collisions."
    use: "@tanstack/devtools-event-client#devtools-event-client"
  - when: "Analyze library codebase for critical architecture and debugging points, add strategic event emissions. Identify middleware boundaries, state transitions, lifecycle hooks. Consolidate events (1 not 15), debounce high-frequency updates, DRY shared payload fields, guard emit() for production. Transparent server/client event bridging."
    use: "@tanstack/devtools-event-client#devtools-instrumentation"
  - when: "Configure @tanstack/devtools-vite for source inspection (data-tsd-source, inspectHotkey, ignore patterns), console piping (client-to-server, server-to-client, levels), enhanced logging, server event bus (port, host, HTTPS), production stripping (removeDevtoolsOnBuild), editor integration (launch-editor, custom editor.open). Must be FIRST plugin in Vite config. Vite ^6 || ^7 only."
    use: "@tanstack/devtools-vite#devtools-vite-plugin"
  - when: "Step-by-step migration from Next.js App Router to TanStack Start: route definition conversion, API mapping, server function conversion from Server Actions, middleware conversion, data fetching pattern changes."
    use: "@tanstack/react-start#lifecycle/migrate-from-nextjs"
  - when: "React bindings for TanStack Start: createStart, StartClient, StartServer, React-specific imports, re-exports from @tanstack/react-router, full project setup with React, useServerFn hook."
    use: "@tanstack/react-start#react-start"
  - when: "Implement, review, debug, and refactor TanStack Start React Server Components in React 19 apps."
    use: "@tanstack/react-start#react-start/server-components"
  - when: "Framework-agnostic core concepts for TanStack Router: route trees, createRouter, createRoute, createRootRoute, createRootRouteWithContext, addChildren, Register type declaration, route matching, route sorting, file naming conventions."
    use: "@tanstack/router-core#router-core"
  - when: "Route protection with beforeLoad, redirect()/throw redirect(), authenticated layout routes, RBAC, auth provider integration."
    use: "@tanstack/router-core#router-core/auth-and-guards"
  - when: "Automatic code splitting, .lazy.tsx convention, createLazyFileRoute, createLazyRoute, lazyRouteComponent."
    use: "@tanstack/router-core#router-core/code-splitting"
  - when: "Route loader option, loaderDeps for cache keys, staleTime/gcTime SWR caching, pendingComponent, errorComponent, router.invalidate, Await component."
    use: "@tanstack/router-core#router-core/data-loading"
  - when: "Link component, useNavigate, Navigate component, router.navigate, preloading, navigation blocking, scroll restoration."
    use: "@tanstack/router-core#router-core/navigation"
  - when: "notFound() function, notFoundComponent, errorComponent, CatchBoundary, CatchNotFound, route masking."
    use: "@tanstack/router-core#router-core/not-found-and-errors"
  - when: "Dynamic path segments ($paramName), splat routes, optional params, useParams."
    use: "@tanstack/router-core#router-core/path-params"
  - when: "validateSearch, search param validation with Zod/Valibot/ArkType adapters, custom serialization, search param inheritance."
    use: "@tanstack/router-core#router-core/search-params"
  - when: "Non-streaming and streaming SSR, RouterClient/RouterServer, createRequestHandler, HeadContent/Scripts, head route option, loader dehydration/hydration."
    use: "@tanstack/router-core#router-core/ssr"
  - when: "Full type inference philosophy, Register module declaration, from narrowing on hooks and Link, getRouteApi for code-split typed access."
    use: "@tanstack/router-core#router-core/type-safety"
  - when: "TanStack Router bundler plugin for route generation and automatic code splitting. Supports Vite, Webpack, Rspack, esbuild."
    use: "@tanstack/router-plugin#router-plugin"
  - when: "Core overview for TanStack Start: tanstackStart() Vite plugin, getRouter() factory, root route document shell, client/server entry points, routeTree.gen.ts."
    use: "@tanstack/start-client-core#start-core"
  - when: "Server-side authentication primitives: session cookies, session CRUD via createServerFn, OAuth PKCE, CSRF, rate limiting auth endpoints."
    use: "@tanstack/start-client-core#start-core/auth-server-primitives"
  - when: "Deploy to Cloudflare Workers, Netlify, Vercel, Node.js/Docker, Bun, Railway. Selective SSR, SPA mode, static prerendering, ISR."
    use: "@tanstack/start-client-core#start-core/deployment"
  - when: "Isomorphic-by-default, createServerFn, createServerOnlyFn, createClientOnlyFn, ClientOnly component, environment variable safety."
    use: "@tanstack/start-client-core#start-core/execution-model"
  - when: "createMiddleware, server function middleware, context passing via next({ context }), global middleware via createStart."
    use: "@tanstack/start-client-core#start-core/middleware"
  - when: "createServerFn (GET/POST), inputValidator, useServerFn hook, server context utilities, error handling, streaming, FormData."
    use: "@tanstack/start-client-core#start-core/server-functions"
  - when: "Server-side API endpoints using the server property on createFileRoute, HTTP method handlers (GET, POST, PUT, DELETE)."
    use: "@tanstack/start-client-core#start-core/server-routes"
  - when: "Server-side runtime for TanStack Start: createStartHandler, request/response utilities, setCookie, getCookie, useSession."
    use: "@tanstack/start-server-core#start-server-core"
  - when: "Programmatic route tree building as an alternative to filesystem conventions: rootRoute, index, route, layout, physical."
    use: "@tanstack/virtual-file-routes#virtual-file-routes"

---

# Project Context: packages/website

## Scaffold Command

```sh
npx @tanstack/cli@latest create my-tanstack-app --agent --package-manager yarn --toolchain eslint
```

Run from the monorepo root (`/home/mike/software/breachofmind`). The CLI generated the app in a temp directory (`/tmp/my-tanstack-app`) and the output was merged into `packages/website`.

## Follow-up TanStack Intent Commands

```sh
npx @tanstack/intent@latest install   # wires up AGENTS.md skill mappings
npx @tanstack/intent@latest list      # lists all 31 skills across 9 packages
```

To load a specific skill before working on a task:

```sh
yarn dlx @tanstack/intent@latest load @tanstack/start-client-core#start-core
```

## Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TanStack Start (`@tanstack/react-start`) |
| Router | TanStack Router (file-based, auto-generated `routeTree.gen.ts`) |
| Bundler | Vite 8 (`tanstackStart()` plugin) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite` plugin) + `@tailwindcss/typography` |
| Language | TypeScript 6 (strict mode) |
| Linting | ESLint 9 (`@tanstack/eslint-config`) |
| Formatting | Prettier 3 (single quotes, no semi, trailing commas) |
| Testing | Vitest + `@testing-library/react` (jsdom) |
| Devtools | `@tanstack/react-devtools` + `@tanstack/devtools-vite` |
| Package mgr | Yarn 4 (Berry) |

## Key Files

```
packages/website/
├── vite.config.ts          # devtools() → tailwindcss() → tanstackStart() → viteReact()
├── tsconfig.json           # strict, bundler moduleResolution, paths: #/* and @/*
├── eslint.config.js        # extends @tanstack/eslint-config
├── prettier.config.js      # singleQuote, no semi, trailingComma all
├── src/
│   ├── router.tsx          # getRouter() factory + Register declaration
│   ├── styles.css          # Tailwind + CSS custom properties (light/dark theme tokens)
│   ├── routes/
│   │   ├── __root.tsx      # document shell: HeadContent, Header, Footer, devtools, Scripts
│   │   ├── index.tsx       # home page (/)
│   │   └── about.tsx       # about page (/about)
│   └── components/
│       ├── Header.tsx      # sticky nav with TanStack Link
│       ├── Footer.tsx      # simple footer
│       └── ThemeToggle.tsx # light/dark/auto toggle (localStorage + CSS class)
└── public/                 # favicon, logo192, logo512, manifest.json, robots.txt
```

## Architecture Decisions

- **File-based routing**: Routes live in `src/routes/`. The router plugin auto-generates `src/routeTree.gen.ts` on `vite dev` or `vite build`. Never edit `routeTree.gen.ts` by hand.
- **Path aliases**: `#/*` (Node subpath imports) and `@/*` both resolve to `src/`. Prefer `#/` for internal imports.
- **SSR by default**: `tanstackStart()` enables full SSR. Use `createServerFn` for server-only logic; never import server-only modules directly in client components.
- **Theme**: Three-state toggle (light/dark/auto). Initialised via an inline `<script>` in `__root.tsx` before first paint to prevent FOUC. State persisted in `localStorage`.
- **Devtools**: `@tanstack/devtools-vite` must be the **first** Vite plugin. The `TanStackDevtools` component in `__root.tsx` embeds the Router devtools panel. Strip devtools in production via `removeDevtoolsOnBuild`.
- **Tailwind v4**: Uses the Vite plugin — no `tailwind.config.ts`. CSS custom properties drive the design token system (see `src/styles.css`).

## Environment Variables

| Variable | Required | Notes |
|---|---|---|
| `VITE_*` | as needed | Any variable exposed to the client must use the `VITE_` prefix |

No `.env` variables are required for the base scaffold. Add secrets (DB URL, API keys, etc.) to `.env` (gitignored).

## Development

```sh
cd packages/website
yarn dev          # starts on http://localhost:3000
yarn build        # production SSR build
yarn preview      # preview prod build locally
yarn lint         # ESLint
yarn test         # Vitest (single run)
```

From the monorepo root you can also run workspace scripts via `yarn workspace website <script>`.

## Deployment

Refer to the `start-core/deployment` skill for platform-specific setup:

```sh
yarn dlx @tanstack/intent@latest load @tanstack/start-client-core#start-core/deployment
```

Supported targets: Cloudflare Workers, Vercel, Netlify, Node.js/Docker, Bun, Railway.

## Known Gotchas

- **`routeTree.gen.ts` is auto-generated.** Run `yarn dev` once to generate it before the TypeScript compiler or IDE can resolve route types.
- **Yarn 4 peer-dep warnings on install.** The scaffold was built against specific `latest` tags; running `yarn install` in a different Yarn version may show peer warnings (e.g., `@tanstack/react-router-ssr-query` expects `@tanstack/react-query` as a peer). These are informational — the app still works without TanStack Query unless you add query-backed routes.
- **`@tanstack/devtools-vite` must be first** in the Vite plugins array or source inspection breaks.
- **Tailwind v4 has no `tailwind.config.ts`** — all theme customisation goes in `src/styles.css` via `@theme {}` and CSS variables.
- **ESLint 9 flat config**: `eslint.config.js` uses ESM flat config. Do not add a legacy `.eslintrc` — it will conflict.
- **No `src/entry-client.tsx` / `src/entry-server.tsx`** — TanStack Start generates these internally via `tanstackStart()`. If you need to customise them, refer to the `start-core` skill.
- **TypeScript 6** — some community types and old `@types/*` packages may lag behind TS6. Use `skipLibCheck: true` (already set).

## Suggested Next Steps

1. **Generate `routeTree.gen.ts`** — run `yarn dev` once so the router plugin creates the type-safe route tree.
2. **Add a real route** — create `src/routes/dashboard.tsx` using `createFileRoute('/dashboard')`.
3. **Add server functions** — use `createServerFn` (load the `start-core/server-functions` skill first).
4. **Add authentication** — load `start-core/auth-server-primitives` and `router-core/auth-and-guards` for a full auth flow.
5. **Configure deployment target** — load `start-core/deployment` and pick Cloudflare/Vercel/Netlify/Node.
6. **Wire up monorepo workspace** — update the root `package.json` workspaces field if not already pointing to `packages/*`.
