# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 참고하는 안내 문서입니다.

## 명령어

```bash
npm install       # 의존성 설치
npm run dev       # 개발 서버 실행 (Express + Vite 미들웨어) — http://localhost:3000
npm run build     # Vite 프로덕션 빌드
npm run preview   # 프로덕션 빌드 미리보기
npm run lint      # TypeScript 타입 검사 (tsc --noEmit)
```

테스트 스위트는 없습니다.

## 아키텍처

React 19 + TypeScript + Vite로 구축된 **DataCraft AI 마케팅/랜딩 페이지**이며, Express 백엔드로 서빙됩니다.

**서버 구조 (`server.ts`):** Express가 API와 프론트엔드를 함께 처리합니다. 개발 모드에서는 Vite를 미들웨어로 붙이고(`middlewareMode: true`), 프로덕션에서는 정적 `dist/` 폴더를 서빙합니다. `vite dev`가 아닌 `tsx server.ts`로 실행됩니다.

**라우팅:** React Router 없이 `App.tsx`의 `currentPage` 상태로만 페이지를 전환합니다. 네비게이션은 `onNavigate` prop으로 전달된 `setCurrentPage`를 호출하는 방식입니다. 페이지: `home`, `company`, `pricing`, `contact`.

**다국어 처리:** `App.tsx`에 `language: 'ko' | 'en'` 상태가 있으며 모든 컴포넌트에 prop으로 전달됩니다. 외부 i18n 라이브러리 없이 각 컴포넌트 내부에서 `t` 객체나 조건식으로 문자열을 인라인 정의합니다.

**스타일링:** Tailwind CSS는 npm 패키지가 아닌 `index.html`의 CDN으로 로드됩니다(`tailwind.config.js` 없음). 커스텀 유틸리티(`glass-card`, `purple-glow`, `animate-float`)는 `index.html`의 `<style>` 블록에 정의되어 있습니다. 애니메이션은 **Framer Motion**을 사용합니다.

**문의 폼:** `ContactPage.tsx`가 Express 서버의 `/api/contact`로 POST 요청을 보내면 **nodemailer**로 이메일을 발송합니다. `SMTP_USER`가 설정되지 않은 경우 실제 발송 없이 성공으로 시뮬레이션됩니다.

## 환경 변수

프로젝트 루트에 `.env` (또는 `.env.local`) 파일을 생성하세요:

```
GEMINI_API_KEY=   # Vite 클라이언트에 process.env.GEMINI_API_KEY로 노출
SMTP_HOST=        # 예: smtp.gmail.com
SMTP_PORT=        # 예: 587
SMTP_SECURE=      # true/false
SMTP_USER=        # SMTP 사용자명
SMTP_PASS=        # SMTP 비밀번호
```
