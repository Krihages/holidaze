import { VenueType } from "@/types/venue";
import { Badge } from "@/components/ui/badge";
import HoverMessage from "@/components/HoverMessage";
import Location from "@/components/VenueCard/Location";

export default function VenueHeader({ venue }: { venue: VenueType }) {
  return (
    <div className="flex items-start flex-col gap-y-4 w-full ">
      <div className="flex flex-col gap-y-2 w-full">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{venue.name}</h1>
          <HoverMessage
            message={`This venue can host up to ${venue.maxGuests} guests`}
          >
            <Badge>{venue.maxGuests} guests</Badge>
          </HoverMessage>
        </div>
        <div className="flex items-center justify-between w-full flex-wrap gap-2">
          <Location location={venue.location} />
          <p className="font-semibold">
            {venue.price} NOK
            <span className="text-muted-foreground font-normal">/night</span>
          </p>
        </div>
        <p>{venue.description}</p>
      </div>
    </div>
  );
}
