import fs from "fs";
import path from "path";

const PHOTOS_DIR = path.join(process.cwd(), "public", "photos");

export type CarouselPhoto = {
  src: string;
  alt: string;
};

// Reads public/photos/ at build time so dropping in or removing a JPG
// automatically updates the Play carousel — no manual list to maintain.
export function getCarouselPhotos(): CarouselPhoto[] {
  const files = fs.readdirSync(PHOTOS_DIR);

  return files
    .filter((file) => /\.jpe?g$/i.test(file) && file.toLowerCase() !== "me.jpg")
    .sort()
    .map((file) => {
      const name = file.replace(/\.jpe?g$/i, "");
      return {
        src: `/photos/${file}`,
        alt: `${name.charAt(0).toUpperCase()}${name.slice(1)} — photograph`,
      };
    });
}
