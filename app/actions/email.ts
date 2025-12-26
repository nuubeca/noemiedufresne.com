"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name?: string;
  vote?: string;
  email?: string;
  phone?: string;
  collaboType?: string;
  instagram?: string;
  age?: string;
  city?: string;
  job?: string;
  description?: string;
  message?: string;
  photo1?: string;
  photo2?: string;
}) {
  let message = "";

  if (formData.name) {
    message += `Name: ${formData.name}\r\n`;
  }
  if (formData.vote) {
    message += `Vote: ${formData.vote}\r\n`;
  }
  if (formData.email) {
    message += `Email: ${formData.email}\r\n`;
  }
  if (formData.phone) {
    message += `Phone: ${formData.phone}\r\n`;
  }
  if (formData.collaboType) {
    message += `CollaboType: ${formData.collaboType}\r\n`;
  }
  if (formData.instagram) {
    message += `Instagram: ${formData.instagram}\r\n`;
  }
  if (formData.age) {
    message += `Age: ${formData.age}\r\n`;
  }
  if (formData.city) {
    message += `City: ${formData.city}\r\n`;
  }
  if (formData.job) {
    message += `Job: ${formData.job}\r\n`;
  }
  if (formData.description) {
    message += `Description: ${formData.description}\r\n`;
  }
  if (formData.message) {
    message += `Informations supplémentaire: ${formData.message}\r\n`;
  }
  if (formData.photo1) {
    let photo1url = `https://noemiedufresne.s3.ca-central-1.amazonaws.com/${formData.photo1}`;
    message += `Photo1: <a href="${photo1url}">ICI</a>\r\n`;
  }
  if (formData.photo2) {
    let photo2url = `https://noemiedufresne.s3.ca-central-1.amazonaws.com/${formData.photo2}`;
    message += `Photo2: <a href="${photo2url}">ICI</a>\r\n`;
  }
  if (formData.photo1) {
    let photo1url = `https://noemiedufresne.s3.ca-central-1.amazonaws.com/${formData.photo1}`;
    message += `<img src="${photo1url}">\n\r`;
  }
  if (formData.photo2) {
    let photo2url = `https://noemiedufresne.s3.ca-central-1.amazonaws.com/${formData.photo2}`;
    message += `<img src="${photo2url}">\n\r`;
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM!,
      to: process.env.RESEND_EMAIL_TO!,
      cc: "info@nuube.ca",
      subject: "New collaboration request!",
      html: message.replace(/\r\n/g, "<br>"),
    });

    if (error) {
      console.error(error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to send email" };
  }
}


