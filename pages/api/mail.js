// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}rn
  Email: ${body.email}rn
  CollaboType: ${body.collaboType}rn
  Instagram: ${body.instagram}rn
  Message: ${body.message}
`;

  try {
    mail.send({
      to: "creationymeon@gmail.com",
      from: "info@noemiedufresne.com",
      subject: "New collaboration request!",
      text: message,
      html: message.replace(/rn/g, "<br>"),
    });
    res.status(200).json({ status: "Ok" });
  } catch (error) {
    res.status(400).json({ status: "Error" });
  }
}
