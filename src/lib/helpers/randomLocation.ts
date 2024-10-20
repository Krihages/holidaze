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
