// emailSender.test.js

import { sendEmail } from "./emailSender";
import nodemailer from "nodemailer";

// Mock nodemailer
jest.mock("nodemailer");

describe("sendEmail", () => {
  let transporterMock;

  beforeEach(() => {
    // Mock the createTransport method to return a transporter object
    transporterMock = {
      sendMail: jest.fn((mailOptions, callback) =>
        callback(null, "Email sent successfully")
      ),
    };

    nodemailer.createTransport.mockReturnValue(transporterMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should send an email successfully", async () => {
    // Prepare the input for the sendEmail function
    const emailData = {
      from: "sender@example.com",
      to: "recipient@example.com",
      subject: "Test Email",
      text: "This is a test email",
    };

    // Call the sendEmail function
    const result = await sendEmail(emailData);

    // Check that nodemailer.createTransport was called with the correct config
    expect(nodemailer.createTransport).toHaveBeenCalledWith({
      service: process.env.SERVICE,
      auth: {
        user: process.env.SERVICE_EMAIL,
        pass: process.env.SERVICE_PASSWORD,
      },
    });

    // Check that sendMail was called with the correct email data
    expect(transporterMock.sendMail).toHaveBeenCalledWith(
      emailData,
      expect.any(Function)
    );

    // Assert that the result is what we expect
    expect(result).toBe("Email sent successfully");
  });

  it("should throw an error when sending fails", async () => {
    // Prepare the input for the sendEmail function
    const emailData = {
      from: "sender@example.com",
      to: "recipient@example.com",
      subject: "Test Email",
      text: "This is a test email",
    };

    // Simulate a failure in sendMail
    transporterMock.sendMail.mockImplementationOnce((mailOptions, callback) => {
      callback(new Error("Failed to send email"), null);
    });

    // Call the sendEmail function and expect it to throw an error
    await expect(sendEmail(emailData)).rejects.toThrow("Failed to send email");
  });
});
