import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import sanitizeHtml from "sanitize-html";

dotenv.config();

/**
 * SEC-SRV-AIP (me-393-zone-03 012):
 * ai-preview 서버 보안 강화 — helmet + CORS whitelist + rate-limit + body-size-limit + XSS sanitize
 */

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // 1. helmet — 기본 보안 헤더 세트 (X-Frame-Options, X-Content-Type-Options, CSP 등)
  app.use(helmet());

  // 2. CORS whitelist — 허용 오리진만 명시적 통과. 미설정 시 동일 오리진만 허용.
  const CORS_ORIGIN_WHITELIST = (process.env.CORS_ORIGIN_WHITELIST || "")
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  app.use(
    cors({
      origin: (origin, callback) => {
        // Same-origin 또는 Postman/curl 등 origin 없음
        if (!origin) return callback(null, true);
        if (CORS_ORIGIN_WHITELIST.length === 0) {
          return callback(null, false); // whitelist 미설정 시 모든 cross-origin 차단
        }
        if (CORS_ORIGIN_WHITELIST.includes(origin)) return callback(null, true);
        return callback(new Error(`CORS blocked origin: ${origin}`));
      },
      credentials: true,
    })
  );

  // 3. body-size-limit — 10kb 초과 페이로드 거부 (DoS 방어)
  app.use(express.json({ limit: "10kb" }));

  // 4. rate-limit — 문의 폼 per-IP 15분당 10회
  const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message: "요청이 너무 많습니다. 잠시 후 다시 시도해주세요." },
  });

  // API Route for Contact Form
  app.post("/api/contact", contactLimiter, async (req, res) => {
    const { name, email, subject, message } = req.body;

    // SEC-SRV-AIP: 사용자 입력 XSS sanitize — 메일 본문 HTML 삽입 안전성 보장
    const safeName = sanitizeHtml(String(name ?? ""), { allowedTags: [], allowedAttributes: {} });
    const safeEmail = sanitizeHtml(String(email ?? ""), { allowedTags: [], allowedAttributes: {} });
    const safeSubject = sanitizeHtml(String(subject ?? ""), { allowedTags: [], allowedAttributes: {} });
    const safeMessage = sanitizeHtml(String(message ?? ""), { allowedTags: [], allowedAttributes: {} });

    console.log("Received contact form submission:", { name: safeName, email: safeEmail, subject: safeSubject });

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.ethereal.email",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER || "test@example.com",
          pass: process.env.SMTP_PASS || "password",
        },
      });

      const mailOptions = {
        from: `"${safeName}" <${safeEmail}>`,
        to: "help@funshare.co.kr",
        subject: `[문의] ${safeSubject}`,
        text: `성함: ${safeName}\n이메일: ${safeEmail}\n\n내용:\n${safeMessage}`,
        html: `
          <h3>새로운 문의가 접수되었습니다.</h3>
          <p><strong>성함:</strong> ${safeName}</p>
          <p><strong>이메일:</strong> ${safeEmail}</p>
          <p><strong>제목:</strong> ${safeSubject}</p>
          <br/>
          <p><strong>내용:</strong></p>
          <p>${safeMessage.replace(/\n/g, "<br/>")}</p>
        `,
      };

      if (!process.env.SMTP_USER) {
        console.log("SMTP credentials missing. Simulating email send to help@funshare.co.kr");
        return res.json({ success: true, message: "Email sent (simulated)" });
      }

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
