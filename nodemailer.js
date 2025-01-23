import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use false for port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function sendMail(to, sub, msg) {
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: to,
    subject: sub,
    html: msg,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.error("Error occurred:", err);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
}
sendMail(
  "ta22mmb0a45@student.nitw.ac.in",
  "Test Subject",
  "<h1>Test Message</h1>"
);
