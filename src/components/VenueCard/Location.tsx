import { VenueType } from "@/types/venue";
import { PinIcon } from "@/components/icons";
import { randomLocation } from "@/lib/helpers";

export default function Location({
  location,
}: {
  location: VenueType["location"];
}) {
  let locationText: string | JSX.Element;

  if (location.country && location.city) {
    locationText = (
      <div>
        <span>{location.city}</span>, <span>{location.country}</span>
      </div>
    );
  } else if (location.country) {
    locationText = <span>{location.country}</span>;
  } else if (location.city) {
    locationText = <span>{location.city}</span>;
  } else {
    locationText = randomLocation();
  }

  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <PinIcon />
      {locationText}
    </div>
  );
}
