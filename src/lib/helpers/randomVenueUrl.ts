const NUMBER_OF_IMAGES = 10;
import placeholder1 from "@/images/venues/placeholder1.jpg";
import placeholder2 from "@/images/venues/placeholder2.jpg";
import placeholder3 from "@/images/venues/placeholder3.jpg";
import placeholder4 from "@/images/venues/placeholder4.jpg";
import placeholder5 from "@/images/venues/placeholder5.jpg";
import placeholder6 from "@/images/venues/placeholder6.jpg";
import placeholder7 from "@/images/venues/placeholder7.jpg";
import placeholder8 from "@/images/venues/placeholder8.jpg";
import placeholder9 from "@/images/venues/placeholder9.jpg";
import placeholder10 from "@/images/venues/placeholder10.jpg";
import { StaticImageData } from "next/image";

const images = [
  placeholder1,
  placeholder2,
  placeholder3,
  placeholder4,
  placeholder5,
  placeholder6,
  placeholder7,
  placeholder8,
  placeholder9,
  placeholder10,
];

/**
 * Returns a random placeholder venue image
 * @returns {StaticImageData} A random static image from the placeholder venues
 */
export default function randomVenueUrl(): StaticImageData {
  const url = Math.floor(Math.random() * NUMBER_OF_IMAGES) + 1;
  const randomImage = images[url];

  return randomImage;
}
