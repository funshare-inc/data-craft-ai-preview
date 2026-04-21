import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// SEC-DC-011: define 블록의 GEMINI_API_KEY inline 치환 제거 — 번들 유출 차단.
// 현 클라이언트 코드는 Gemini API 직접 호출 없음. 향후 추가 시 server.ts 프록시 경유 필수.
export default defineConfig({
  base: '/data-craft-ai-preview/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
