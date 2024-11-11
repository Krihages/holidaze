import Image from "next/image";
import PinHover from "./PinHover";
import { Destination } from "@/data/explore";
import { destinations } from "@/data/explore";
import { cn } from "@/lib/utils";

/* type Destination = {
  name: string;
  /* Position is in percentage of the screen starting in middle of the screen
   *
   */

export default function DestinationPins() {
  return (
    <div className="absolute w-full h-full">
      {destinations.map((destination) => (
        <Pin key={destination.name} destination={destination} />
      ))}
    </div>
  );
}

export function Pin({ destination }: { destination: Destination }) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      style={{
        top: cn(`calc(50% + ${destination.position.top}%)`),
        left: cn(`calc(50% + ${destination.position.left}%)`),
      }}
    >
      <div className="w-10 sm:w-14 xl:w-20 ">
        <PinHover country={destination.name}>
          <Image src={destination.url} alt={destination.name} />
        </PinHover>
      </div>
    </div>
  );
}
