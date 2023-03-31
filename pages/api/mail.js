// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import multer from "multer";

const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  let message = "";
  if (body.name) {
    message += `Name: ${body.name}\r\n`;
  }
  if (body.email) {
    message += `Email: ${body.email}\r\n`;
  }
  if (body.collaboType) {
    message += `CollaboType: ${body.collaboType}\r\n`;
  }
  if (body.instagram) {
    message += `Instagram: ${body.instagram}\r\n`;
  }
  if (body.age) {
    message += `Age: ${body.age}\r\n`;
  }
  if (body.city) {
    message += `City: ${body.city}\r\n`;
  }
  if (body.job) {
    message += `Job: ${body.job}\r\n`;
  }
  if (body.description) {
    message += `Description: ${body.description}\r\n`;
  }
  if (body.message) {
    message += `Informations supplémentaire: ${body.message}\r\n`;
  }
  if (body.photo1) {
    message += `Photo1: <a href="https://noemiedufresne.com${body.photo1}">ICI</a>\r\n`;
  }

  try {
    await mail.send({
      to: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_TO,
      // to: "max@nuube.ca",
      from: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_FROM,
      cc: "info@nuube.ca",
      subject: "New collaboration request!",
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    });
    res.status(200).json({ status: "Ok" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: "Error" });
  }
}
