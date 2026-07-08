# OpsBridge FE

운영 변경 요청, 승인 상태, 감사 로그 흐름을 확인하는 React 대시보드입니다.

## 기능

- 변경 요청 metric 카드
- 승인 대기/승인 완료 상태 목록
- rollback 준비 상태 표시
- D3 기반 운영 상태 추세 차트
- `ky` 공통 API client
- TanStack Query 기반 dashboard cache

## 구조

```text
src/features/dashboard/api.ts
src/features/dashboard/hooks.ts
src/features/dashboard/types.ts
src/features/dashboard/dashboard.tsx
src/features/chart/d3-trend.ts
src/shared/api/client.ts
```

## 실행

```bash
npm install
npm run dev
npm run build
npm run test:e2e
```

## 환경 변수

```bash
VITE_API_URL=http://localhost:8000/api
```
