// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}rn
  Email: ${body.email}rn
  CollaboType: ${body.collaboType}rn
  Instagram: ${body.instagram}rn
  Age: ${body.age}rn
  City: ${body.city}rn
  Job: ${body.job}rn
  Description: ${body.description}

`;

  try {
    await mail.send({
      to: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_TO,
      // to: "max@nuube.ca",
      from: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_FROM,
      cc: "info@nuube.ca",
      subject: "New collaboration request!",
      text: message,
      html: message.replace(/rn/g, "<br>"),
    });
    res.status(200).json({ status: "Ok" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: "Error" });
  }
}
