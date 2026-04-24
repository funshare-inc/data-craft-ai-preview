import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    console.log("Received contact form submission:", { name, email, subject, message });

    try {
      // SMTP Configuration
      // In a real scenario, you would use process.env.SMTP_HOST, etc.
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
        from: `"${name}" <${email}>`,
        to: "help@funshare.co.kr",
        subject: `[문의] ${subject}`,
        text: `성함: ${name}\n이메일: ${email}\n\n내용:\n${message}`,
        html: `
          <h3>새로운 문의가 접수되었습니다.</h3>
          <p><strong>성함:</strong> ${name}</p>
          <p><strong>이메일:</strong> ${email}</p>
          <p><strong>제목:</strong> ${subject}</p>
          <br/>
          <p><strong>내용:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `,
      };

      // If no SMTP credentials, we just simulate success for the demo/test
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
