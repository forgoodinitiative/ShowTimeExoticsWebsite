import data from "./cars.json";

// Every photo in src/images/Fleet/<imageFolder>/ belongs to that car, sorted by
// filename, with coverImage (if set) moved to the front.
const photos = import.meta.glob<string>("../../images/Fleet/*/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

export interface Car {
  id: string;
  brand: string;
  model: string;
  year?: string;
  Trim?: string;
  BodyStyle?: string;
  ExteriorColor?: string;
  InteriorColor?: string;
  image: string;
  images: string[];
  available: boolean;
  description?: string;
  category?: string;
  rate?: string;
  // lower = pinned higher; omit to fall into alphabetical section
  priority?: number;
}

export const cars: Car[] = data.map(({ imageFolder, coverImage, ...car }: (typeof data)[number] & { coverImage?: string }) => {
  const folder = `../../images/Fleet/${imageFolder}/`;
  const files = Object.keys(photos).filter((path) => path.startsWith(folder)).sort();
  if (coverImage) files.sort((a, b) => Number(b === folder + coverImage) - Number(a === folder + coverImage));
  const images = files.map((path) => photos[path]);
  if (!images.length) console.warn(`No photos for "${car.id}" in src/images/Fleet/${imageFolder}`);
  return { ...car, image: images[0] ?? "", images };
});
