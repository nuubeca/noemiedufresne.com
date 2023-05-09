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
  if (body.vote) {
    message += `Vote: ${body.vote}\r\n`;
  }
  if (body.email) {
    message += `Email: ${body.email}\r\n`;
  }
  if (body.phone) {
    message += `Phone: ${body.phone}\r\n`;
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
    let photo1url = `https://noemiedufresne.s3.ca-central-1.amazonaws.com/${body.photo1}`;
    message += `Photo1: <a href="${photo1url}">ICI</a>\r\n`;
  }
  if (body.photo2) {
    let photo2url = `https://noemiedufresne.s3.ca-central-1.amazonaws.com/${body.photo2}`;
    message += `Photo2: <a href="${photo2url}">ICI</a>\r\n`;
  }
  if (body.photo1) {
    let photo1url = `https://noemiedufresne.s3.ca-central-1.amazonaws.com/${body.photo1}`;
    message += `<img src="${photo1url}">\n\r`;
  }
  if (body.photo2) {
    let photo2url = `https://noemiedufresne.s3.ca-central-1.amazonaws.com/${body.photo2}`;
    message += `<img src="${photo2url}">\n\r`;
  }

  try {
    await mail.send({
      to: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_TO,
      // to: "max@nuube.ca",
      from: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_FROM,
      cc: "info@nuube.ca",
      subject: "New collaboration request!",
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    });
    res.status(200).json({ status: "Ok" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: "Error" });
  }
}
