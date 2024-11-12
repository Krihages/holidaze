const NUMBER_OF_IMAGES = 10;
const placeholder1 = "/images/venues/placeholder1.jpg";
const placeholder2 = "/images/venues/placeholder2.jpg";
const placeholder3 = "/images/venues/placeholder3.jpg";
const placeholder4 = "/images/venues/placeholder4.jpg";
const placeholder5 = "/images/venues/placeholder5.jpg";
const placeholder6 = "/images/venues/placeholder6.jpg";
const placeholder7 = "/images/venues/placeholder7.jpg";
const placeholder8 = "/images/venues/placeholder8.jpg";
const placeholder9 = "/images/venues/placeholder9.jpg";
const placeholder10 = "/images/venues/placeholder10.jpg";

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
export default function randomVenueUrl(): string {
  const url = Math.floor(Math.random() * NUMBER_OF_IMAGES) + 1;
  const randomImage = images[url];

  return randomImage;
}
