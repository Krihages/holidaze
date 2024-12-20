import { VenueType } from "@/types/venue";
import { PinIcon } from "@/components/icons";
import { randomLocation } from "@/lib/helpers";

export default function Location({
  location,
}: {
  location: VenueType["location"];
}) {
  let locationText: string | JSX.Element;

  if (
    // This is just to prevent showing random long strings in the location field
    (location.country && location?.country?.length > 25) ||
    (location.city && location.city.length > 25)
  ) {
    locationText = randomLocation();
  } else if (location.country && location.city) {
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
    <div className="flex items-center gap-1 text-muted-foreground">
      <PinIcon />
      <span className="mt-0.5">{locationText}</span>
    </div>
  );
}
