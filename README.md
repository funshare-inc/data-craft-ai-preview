# data-craft-ai-preview — 데이터크래프트 소개(랜딩) 페이지

> 사내 인수인계 문서입니다. 이 파일만 읽고 띄우기·고치기·검사·배포까지 할 수 있게 쓰였습니다.
> 기준: `i-dev` 가지. 코드의 마지막 기능 변경은 2026-02 입니다.

## 1. 이 저장소는 무엇인가

- 데이터크래프트(DataCraft AI) 서비스를 **소개하는 마케팅 랜딩 페이지**입니다(`package.json` 이름 `datacraft-ai-landing-page`).
  제품 본체(웹 앱 `data-craft`, API 서버 `data-craft-server`)와는 **코드·DB·API 로 연결되지 않습니다** — 다른 저장소를 부르지 않습니다.
- 화면은 네 개입니다: 홈(`Hero`·`AICoreDiagram`·`FeatureGrid`) · 회사 소개(`CompanyIntro`) · 요금(`PricingPage`) · 문의(`ContactPage`).
  URL 라우터가 없고 `App.tsx` 의 `currentPage` 상태값으로만 전환합니다. 한국어/영어 전환도 `language` 상태값(`'ko' | 'en'`)입니다.
- 서버 기능은 하나뿐입니다: 문의 폼 → `POST /api/contact` → SMTP 메일 발송(받는 주소는 `server.ts` 에 `help@funshare.co.kr` 로 고정).
- 처음엔 Google AI Studio 템플릿으로 만들어졌습니다. 예전 README 의 「AI Studio 앱 / `GEMINI_API_KEY` 설정」 안내는 **더 이상 맞지 않습니다** — 지금 코드는 Gemini 를 부르지 않습니다.

## 2. 기술 스택 (`package-lock.json` 실제 설치 버전)

| 구분 | 내용 |
|---|---|
| 런타임 | Node.js (CI 는 Node 20) |
| 화면 | React 19.2.4, framer-motion, lucide-react, recharts |
| 스타일 | Tailwind **CDN** 스크립트(`index.html`) — 빌드 설정의 Tailwind 아님 |
| 빌드 | Vite 6.4.1 + `@vitejs/plugin-react` |
| 서버 | Express 5.2.1 (`server.ts`, `tsx` 4.21.0 으로 실행), nodemailer 8.0.1, dotenv |
| 언어 | TypeScript 5.8.3 |
| 시험 | 단위·E2E 시험 없음. 검사는 타입 검사(`tsc --noEmit`)뿐 |

## 3. 준비물

- Node.js 20 이상, npm (lockfile 이 `package-lock.json` 이므로 npm 을 씁니다)
- 다른 저장소·DB·계정은 필요 없습니다. 실제 메일을 보내려면 SMTP 계정만 있으면 됩니다.

## 4. 처음 띄우기

```bash
npm install
cp .env.example .env      # 값은 비워 두어도 됩니다(아래 참고)
npm run dev               # = tsx server.ts
```

- 주소: `http://localhost:3000` (`PORT` 로 변경 가능).
- 개발 모드에서는 Express 가 Vite 를 미들웨어로 붙여 화면과 `/api/contact` 를 **한 포트**에서 함께 제공합니다.
- `SMTP_USER` 가 비어 있으면 메일을 보내지 않고 **성공으로 응답만** 합니다(콘솔에 `Simulating email send` 출력). 로컬 시험은 이 상태로 하면 됩니다.
- 붙일 백엔드(dev/test/prod) 구분은 없습니다.

## 5. 환경 변수 (`server.ts` 가 읽는 것 전부 — 이름만 적습니다)

| 이름 | 뜻 | 필수 | 기본값(코드) |
|---|---|---|---|
| `PORT` | 서버 포트 | 아니오 | `3000` |
| `NODE_ENV` | `production` 이면 `dist/` 정적 제공, 아니면 Vite 개발 미들웨어 | 아니오 | (없음 → 개발 모드) |
| `SMTP_HOST` | SMTP 호스트 | 아니오 | `smtp.ethereal.email` |
| `SMTP_PORT` | SMTP 포트 | 아니오 | `587` |
| `SMTP_SECURE` | `"true"` 일 때만 TLS | 아니오 | false |
| `SMTP_USER` | SMTP 계정. **비어 있으면 발송을 건너뛰고 모의 성공** | 실제 발송 시 예 | `"test@example.com"` (단 비면 발송 자체를 건너뛰므로 실제로 쓰이지 않음) |
| `SMTP_PASS` | SMTP 비밀번호 | 실제 발송 시 예 | `"password"` (위와 같은 이유로 영향 없음) |

- `.env.example` 의 `GEMINI_API_KEY` 는 **예약만 된 이름이고 코드에서 쓰지 않습니다.** 나중에 쓰더라도 브라우저 번들에 넣지 말고 서버(`server.ts`)를 거치게 하세요(`vite.config.ts` 주석).
- `.env`, `.env.*` 는 git 에서 제외됩니다(`.env.example` 만 추적).
- 브라우저 코드(`import.meta.env`)가 읽는 변수는 없습니다.

## 6. 명령

| 명령 | 하는 일 |
|---|---|
| `npm run dev` | `tsx server.ts` — Express + Vite 개발 서버(포트 3000) |
| `npm run build` | `vite build` → `dist/` |
| `npm run preview` | `vite preview` — 빌드 결과를 정적으로 미리보기(문의 API 없음). 주소 `http://localhost:4173/data-craft-ai-preview/`. 여기서도 인증서 이미지는 안 보입니다(함정 2) |
| `npm run lint` | `tsc --noEmit` — 타입 검사. CI 와 같은 명령 |
| `NODE_ENV=production npx tsx server.ts` | (스크립트 없음) 빌드된 `dist/` 를 Express 로 제공 + 문의 API 하려는 명령이지만 **현재는 기동 즉시 죽습니다**(함정 3) |

## 7. 폴더 구조

```
App.tsx            화면 전환(currentPage)·언어 상태
index.tsx          React 진입점
index.html         Tailwind CDN · Google Fonts · importmap · 공용 CSS(.glass-card 등)
server.ts          Express: /api/contact + 개발 시 Vite / 운영 시 dist 제공
components/        화면 조각 15개 (Navbar, Hero, AICoreDiagram, FeatureGrid, CompanyIntro,
                   PricingPage, ContactPage, Footer 등). 이 중 6개는 어디서도 안 쓰임(아래)
assets/            로고 SVG, assets/cert/ 특허·인증서 이미지 10장(회사 소개 화면)
vite.config.ts     base 경로, 포트, '@' 별칭(저장소 루트)
.github/workflows/  deploy.yml(배포) · pr-check.yml(타입 검사)
metadata.json      AI Studio 템플릿 잔재(앱 이름·설명)
favicon.png        어디서도 참조하지 않는 파일
```

- 안 쓰는 컴포넌트 6개: `BuilderFlow`·`WorkflowSteps`·`PainPoints`·`SolutionBanner`·`OperatingStandard`·`ContactSection` — 자기 파일 밖 참조 0건(화면에 나오지 않음).

레이어 규칙은 따로 없습니다 — 모든 컴포넌트가 `components/` 한 폴더에 있고, 각 컴포넌트가 자기 문구(한/영)를 안에 갖고 있습니다.

## 8. 핵심 흐름

- **화면 전환**: `Navbar`·`Hero`·`FeatureGrid` 가 `onNavigate(page)` 를 부르면 `App.tsx` 가 해당 화면만 그리고 맨 위로 스크롤합니다. 주소(URL)는 바뀌지 않습니다.
- **다국어**: 별도 i18n 라이브러리 없음. `language` 를 각 컴포넌트에 넘기고 컴포넌트 안에서 `ko`/`en` 문구를 고릅니다.
- **문의 메일**: `ContactPage.tsx` → `fetch('/api/contact')`(이름·이메일·유형·내용) → `server.ts` 가 nodemailer 로 발송. 보낸 사람은 입력한 이름·이메일, 제목은 `[문의] <유형>`.
- 로그인·멀티테넌트·요금제 한도·결제·파일 저장·DB 는 **없습니다**. 요금 화면은 정적 안내입니다.

## 9. 데이터·DB

DB 를 쓰지 않습니다. 스키마·마이그레이션도 없습니다.

## 10. 시험·검사

- 시험 코드는 없습니다. 검사는 `npm run lint`(타입 검사) 하나입니다.
- CI(`.github/workflows/`):

| 워크플로 | 언제 | 하는 일 |
|---|---|---|
| `pr-check.yml` | `i-test`·`staging` 대상 PR, 수동 실행 (`staging` 가지는 원격에 없음. 이 파일은 `i-dev` 에만 있고 `main` 에는 없음) | Node 20 · `npm ci` · `npm run lint` |
| `deploy.yml` | `main` push, 수동 실행 | Node 20 · `npm ci` · `npm run build` · `dist/` 를 GitHub Pages 로 배포 |

## 11. 브랜치·배포

- 흐름(정책): 작업 가지 → `i-dev`(통합) → `i-test` → `main`. `main` 에 올라가면 배포됩니다.
  - 실제 이력은 정책과 다릅니다: `i-dev-001 → main` 직접 머지였고 `i-test` 에서 `main` 으로 온 머지는 0건이며, `i-test` 와 `main` 은 서로 갈라져 있습니다.
- 배포 대상은 **GitHub Pages**(정적)입니다. 경로는 `https://funshare-inc.github.io/data-craft-ai-preview/` 이고, 그래서 `vite.config.ts` 의 `base` 가 `/data-craft-ai-preview/` 입니다.
- **실제 배포 경로는 Actions(`deploy.yml`) 하나입니다.** Pages 설정이 `build_type: workflow` 이고 사용자 도메인(`cname`)은 없습니다. 마지막 성공 배포는 2026-10-06(main push)입니다.
- 원격 `gh-pages` 가지(마지막 갱신 2026-02-26, 안에 `CNAME` 파일 있음)와 수동 `npm run build && npx gh-pages -d dist` 는 **지금 사이트에 반영되지 않습니다.** 그 가지의 `CNAME` 도 효력이 없습니다.
- 같은 랜딩 페이지의 **공개 사본이 하나 더** 있습니다: `https://funshare-inc.github.io/`. 출처는 별도 저장소 `funshare-inc.github.io`(Pages, main 가지, 마지막 커밋 2026-02-27)이고, **이 저장소의 배포로는 갱신되지 않습니다.** 그 사본에서도 인증서 이미지는 404 입니다.
- `funshare.co.kr` 은 이 랜딩 페이지가 아니라 다른 사이트(「WORK OS | DataCraft」)입니다.
- 버전 번호는 쓰지 않습니다(`package.json` `version` 0.0.0).

## 12. 알아 둘 함정

1. **GitHub Pages 에서는 문의 폼이 동작하지 않습니다.** 정적 호스팅이라 `/api/contact` 가 없습니다(`ContactPage.tsx:28`). 메일을 받으려면 `server.ts` 를 Node 서버로 띄워야 합니다.
2. **절대 경로 자원 — 지금 깨져 있습니다.** 회사 소개 인증서 이미지(`/assets/cert/...`, `CompanyIntro.tsx`)와 로고(`Logo.tsx:10` 의 `/assets/logo.svg`·`/assets/logo-text.svg`), 문의 API 는 `/` 로 시작합니다. `public/` 폴더가 없어 `assets/` 는 빌드 산출물에 복사되지 않으므로, 배포본에서 인증서 10장은 루트·`/data-craft-ai-preview/` 경로 양쪽 모두 404 입니다(회사 소개 화면에 인증서가 하나도 안 보임). 로고가 보이는 것은 별도 저장소 `funshare-inc.github.io` 가 조직 루트에 같은 파일을 올려 두었기 때문이며, 그 저장소가 바뀌면 로고도 사라집니다.
3. **운영 모드 서버는 현재 기동 실패합니다.** `NODE_ENV=production npx tsx server.ts` 는 `server.ts:72` 의 `app.get("*")` 가 Express 5(path-to-regexp 8)에서 `Missing parameter name at index 1: *` 로 throw 해 바로 죽습니다(`"/*splat"` 등 Express 5 문법으로 고쳐야 함). 고친 뒤에도 서버는 `dist/` 를 루트(`/`)에서 제공하는데 빌드 결과는 `/data-craft-ai-preview/` 기준 경로를 쓰므로 `base` 를 맞춰야 합니다.
4. `index.html` 이 `/index.css` 를 불러오지만 저장소에 그 파일이 없습니다(404, 기능 영향 없음). 스타일은 Tailwind CDN + `index.html` 안 `<style>` 입니다.
5. `index.html` 의 importmap(esm.sh)은 AI Studio 잔재입니다. Vite 빌드는 `node_modules` 의 패키지를 번들합니다.
6. 문의 메일 HTML 에 입력값이 이스케이프 없이 들어갑니다(`server.ts:38-46`). 서버로 운영할 경우 고쳐야 할 점입니다.
7. SMTP 설정이 없으면 실패 대신 **성공으로 응답**하므로, 운영에서 메일이 안 오면 먼저 `SMTP_USER` 설정을 확인하세요.
8. 수동 `npx gh-pages -d dist` 는 `gh-pages` 가지만 바꿀 뿐 사이트에는 반영되지 않습니다(Pages 소스가 Actions). 사용자 도메인은 현재 연결돼 있지 않습니다.
9. 홈·회사 소개 이미지 일부는 외부(unsplash) URL 입니다.

## 13. 더 볼 문서

사람이 읽는 설명 문서는 이 README 하나입니다. 환경 변수 예시는 `.env.example`, 빌드·배포 자동화는 `.github/workflows/` 를 보세요.
