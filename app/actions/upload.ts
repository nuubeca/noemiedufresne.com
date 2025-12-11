"use server";

import AWS from "aws-sdk";

const s3client = new AWS.S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File;

  if (!file) {
    return { success: false, error: "No file provided" };
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = Date.now() + "-" + file.name.replace(" ", "_");

  try {
    await s3client
      .putObject({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: fileName,
        Body: buffer,
        ACL: "public-read",
      })
      .promise();

    return { success: true, name: fileName };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to upload file" };
  }
}

