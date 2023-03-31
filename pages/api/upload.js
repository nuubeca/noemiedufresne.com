import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    const uploadDir = './public/uploads/';
    form.uploadDir = uploadDir;
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
        return;
      }

      // Get the uploaded file from the files object
      const { file } = files;

      // Create a new unique file name
      const fileName = Date.now() + '-' + file.originalFilename;

      // Get the old and new paths for the uploaded file
      const oldPath = file.filepath;
      const newPath = path.join(uploadDir, fileName);

      // Move the uploaded file to the upload directory
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
          return;
        }

        const fileUrl = '/uploads/' + fileName;
        res.status(200).json({ url: fileUrl });
      });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
