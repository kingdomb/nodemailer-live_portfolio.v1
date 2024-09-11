// emailSender.js
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

function createTransporter({ service, auth }) {
  return nodemailer.createTransport({
    service,
    auth,
  });
}

export function sendEmail({ from, to, subject, text }) {
  const mailConfig = {
    service: process.env.SERVICE,
    auth: {
      user: process.env.SERVICE_EMAIL,
      pass: process.env.SERVICE_PASSWORD,
    },
  };

  const transporter = createTransporter(mailConfig);

  const mailOptions = {
    from,
    to,
    subject,
    text,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      }
      resolve(info);
    });
  });
}