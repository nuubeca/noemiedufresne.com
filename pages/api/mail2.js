import multer from "multer";
import sgMail from "@sendgrid/mail";

const upload = multer({ storage: multer.memoryStorage() }).single("attachment");

export default async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: "File upload error" });
    } else if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }

    try {
      const { name, age, message } = req.body;

      sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
      console.log(req.file);
      const msg = {
        to: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_TO,
        from: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_FROM,
        subject: "New contact message",
        html: `
      <p>Name: ${name}</p>
      <p>Age: ${age}</p>
      <p>Message: ${message}</p>
    `,
        attachments: [
          {
            content: req.file.buffer.toString("base64"),
            filename: req.file.originalname,
            type: req.file.mimetype,
            disposition: "attachment",
          },
        ],
      };

      await sgMail.send(msg);

      return res.status(200).json({ message: "Email sent successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
};
