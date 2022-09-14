// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
console.log(mail);
console.log("KeyA");

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log("Key");
  console.log(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

  const message = `
  Name: ${body.name}rn
  Email: ${body.email}rn
  CollaboType: ${body.collaboType}rn
  Instagram: ${body.instagram}rn
  Message: ${body.message}
`;

  try {
    await mail.send({
      to: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_TO,
      from: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_FROM,
      cc: "info@nuube.ca",
      subject: "New collaboration request!",
      text: message,
      html: message.replace(/rn/g, "<br>"),
    });
    res.status(200).json({ status: "Ok" });
  } catch (error) {
    res.status(400).json({ status: "Error" });
  }
}
