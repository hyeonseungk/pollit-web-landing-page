## 개요

Pollit 랜딩 페이지는 Next.js(App Router) 기반의 정적 사이트로, 기존 HTML/CSS/JS 자산을 React 컴포넌트와 전역 스타일에 그대로 반영했습니다.  
GA(Measurement ID: `G-69EQ453LP5`) 및 구조화 데이터, 앱 다운로드 트래킹 등 기존 동작을 유지하면서 Next.js 프로젝트 구조로 전환되었습니다.

## 주요 스크립트

```bash
npm run dev    # 개발 서버 (http://localhost:3000)
npm run build  # 프로덕션 빌드
npm run start  # 빌드 결과 실행
npm run lint   # ESLint 검사
```

## 폴더 구조

- `src/app`  
  - `page.tsx`: 랜딩 메인 페이지  
  - `term-service`, `term-privacy`: 정책 페이지  
  - `not-found.tsx`: 맞춤형 404 페이지
- `src/components`: 재사용 컴포넌트(푸터, 앱 다운로드 버튼, 초기화 스크립트 등)
- `src/lib`: 상수, 애널리틱스 헬퍼
- `src/content`: 약관/정책 HTML 원문을 문자열로 관리
- `public`: 모든 이미지 및 정적 파일(`og-image`, `robots.txt`, `sitemap.xml`, `llms.txt`, 앱 아이콘 등)

## 애널리틱스 & 트래킹

- Google Analytics: `src/components/AnalyticsScripts.tsx`에서 gtag 삽입
- 버튼/링크 트래킹: `src/lib/analytics.ts` & 관련 컴포넌트
- 성능 로그: `ClientSideInit`에서 Navigation Timing 기반 전송

## 개발 메모

- 전역 스타일은 `src/app/globals.css`에 정리되어 있으며, 기존 `styles.css` 내용을 거의 그대로 옮겼습니다.
- 이미지 경로는 Next.js `public` 규칙을 따르도록 `/` 루트 경로로 수정했습니다.
