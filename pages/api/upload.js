import fs from "fs";
import AWS from "aws-sdk";
import multer from "multer";

const s3client = new AWS.S3({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multer.memoryStorage(),
});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default async function handler(req, res) {
  upload.single("file")(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      console.log(err);
      res.status(400).send({ status: "Error uploading file" });
    } else if (err) {
      console.log(err);
      res.status(400).send({ status: "Error uploading file" });
    } else {
      const file = req.file;
      var fileName = Date.now() + "-" + file.originalname;
      var fileName = fileName.replace(" ", "_")
      if (!file) {
        res.status(400).send({ status: "Error" });
        return;
      }

      try {
        s3client.putObject(
          {
            Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
            Key: fileName,
            Body: file.buffer,
            ACL: "public-read",
          },
          (err, data) => {
            if (err) {
              console.log(err);
              res.status(400).send({ status: "Error uploading file" });
            } else {
              console.log(data);
              res.status(200).send({ status: "Ok", name: fileName });
            }
          }
        );
      } catch (e) {
        console.log(e);
        res.status(400).send({ status: "Error uploading file" });
      }
    }
  });
}
