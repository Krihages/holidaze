import Image from "next/image";
const venueMap = "/images/venues/venue-map.jpg";

export default function VenueMap() {
  return (
    <div className="py-8 border-b flex flex-col gap-2 border-gray-400">
      <h3 className="font-semibold">Map:</h3>
      <Image src={venueMap} alt="map" width={1000} height={1000} />
    </div>
  );
}
