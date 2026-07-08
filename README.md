# OpsBridge FE

React/TypeScript product frontend for operations approval workflow.

## Resume proof points

- Shared HTTP layer uses `ky.create` with auth refresh hooks in `src/shared/api/client.ts`.
- D3 chart rendering is isolated in `src/features/chart/d3-trend.ts`.
- jQuery/Ajax legacy compatibility is represented by `src/features/legacy/jquery-adapter.ts`.
- TanStack Query manages dashboard cache invalidation and mutations.
- Playwright smoke test covers the primary product workflow.
