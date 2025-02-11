import { promises as fs } from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

// API route to fetch all images from the gallery directory
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const imagesDir = path.join(process.cwd(), "public/images/gallery");
    const files = await fs.readdir(imagesDir); // Read the directory

    // Filter for valid image files (jpg, png, jpeg, webp, etc.)
    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
    const images = files
      .filter((file) =>
        imageExtensions.some((ext) => file.toLowerCase().endsWith(ext))
      )
      .map((file) => `/images/gallery/${file}`);

    res.status(200).json(images);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to load images", errorObject: error });
  }
}
