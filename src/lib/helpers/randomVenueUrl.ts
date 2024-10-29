const NUMBER_OF_IMAGES = 10;
import placeholder1 from "@/images/venues/placeholder1.png";
import placeholder2 from "@/images/venues/placeholder2.png";
import placeholder3 from "@/images/venues/placeholder3.png";
import placeholder4 from "@/images/venues/placeholder4.png";
import placeholder5 from "@/images/venues/placeholder5.png";
import placeholder6 from "@/images/venues/placeholder6.png";
import placeholder7 from "@/images/venues/placeholder7.png";
import placeholder8 from "@/images/venues/placeholder8.png";
import placeholder9 from "@/images/venues/placeholder9.png";
import placeholder10 from "@/images/venues/placeholder10.png";
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
