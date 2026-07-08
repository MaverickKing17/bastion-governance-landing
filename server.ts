import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON payloads
  app.use(express.json());

  // 1. API route to handle sandbox requests via Resend API
  app.post("/api/request-sandbox", async (req, res) => {
    try {
      const { fullName, email, painPoint } = req.body;

      if (!fullName || !email || !painPoint) {
        return res.status(400).json({
          error: "Missing required fields: fullName, email, and painPoint are required."
        });
      }

      const apiKey = process.env.RESEND_API_KEY;

      // HTML body formatted exactly as requested
      const htmlBody = `
        <h1>🚨 Bastion Audit: New Validation Request</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Corporate Email:</strong> ${email}</p>
        <p><strong>AI Pain Point:</strong> ${painPoint}</p>
      `;

      if (!apiKey) {
        console.warn("⚠️ RESEND_API_KEY is not defined in the environment. Simulating email delivery for preview purposes.");
        return res.status(200).json({
          success: true,
          simulated: true,
          message: "Validation Request Logged (SIMULATED). Configure RESEND_API_KEY in the secrets menu to activate live delivery.",
          details: {
            from: "onboarding@resend.dev",
            to: "kingnarmer702@gmail.com",
            subject: "🚨 Bastion Audit: New Validation Request",
            html: htmlBody
          }
        });
      }

      // Live integration call to Resend using direct fetch
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: ["kingnarmer702@gmail.com"],
          subject: "🚨 Bastion Audit: New Validation Request",
          html: htmlBody
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Resend API responded with error:", errorData);
        return res.status(response.status).json({
          error: "Failed to send email via Resend API",
          details: errorData
        });
      }

      const responseData = await response.json();
      return res.status(200).json({
        success: true,
        simulated: false,
        message: "Validation Request Logged.",
        data: responseData
      });

    } catch (error: any) {
      console.error("Error in /api/request-sandbox:", error);
      return res.status(500).json({
        error: "An unexpected error occurred while processing your request.",
        details: error?.message || String(error)
      });
    }
  });

  // 2. Vite middleware setup based on environment
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Full-stack server active on http://localhost:${PORT}`);
  });
}

startServer();
