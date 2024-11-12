import Image from "next/image";
const url = "/images/explore-map.png";
import DestinationPins from "./DestinationPins";

export default function ExploreMap() {
  return (
    <div className="relative w-full aspect-video flex-grow">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src={url}
        alt="map"
        fill
        className="object-cover w-full h-full"
        quality={10}
        priority={false}
        loading="lazy"
      />
      <DestinationPins />
    </div>
  );
}
