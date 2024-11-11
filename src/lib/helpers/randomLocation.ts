/**
 * Returns a random location from a predefined list of cities
 * @returns {string} A randomly selected location in "City, Country" format
 * @example
 * const location = getRandomLocation() // Returns e.g. "New York, USA"
 */
export default function getRandomLocation() {
  const locations = [
    "New York, USA",
    "London, UK",
    "Paris, France",
    "Tokyo, Japan",
    "Sydney, Australia",
    "Rome, Italy",
    "Barcelona, Spain",
    "Berlin, Germany",
  ];

  return locations[Math.floor(Math.random() * locations.length)];
}
