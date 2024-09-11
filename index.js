// index.js
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swaggerSetup.js";
import { sendEmail } from "./emailSender.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());

app.post("/feedback", (req, res) => {
  console.log("Request Body:", req.body); 
  const mailOptions = {
    from: req.body.email || "no-reply@example.com",
    to: process.env.SERVICE_EMAIL,
    subject: "Portfolio Site Visitor Feedback",
    text: `From: ${req.body.email}\nLikelihood: ${req.body.feedback}\nComment: ${req.body.comments}`,
  };

  sendEmail(mailOptions)
    .then(() =>
      res.status(200).json({ message: "Feedback received successfully" })
    )
    .catch((error) => {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send feedback" });
    });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
