import { VenueType } from "@/types/venue";
import { Star } from "@/components/icons";

import Location from "@/components/VenueCard/Location";

export default function VenueHeader({ venue }: { venue: VenueType }) {
  return (
    <div className="flex items-start flex-col gap-y-4 w-full ">
      <div className="flex flex-col gap-y-2 w-full">
        <div className="pb-8 border-b border-gray-400 flex flex-col gap-2">
          <div className="flex justify-between items-center flex-wrap">
            <h1 className="text-2xl font-bold">{venue.name}</h1>
            <div className="flex items-center gap-1 min-w-24">
              <Star color="primary-light" filled={true} size={22} />
              <p
                className={
                  venue.rating > 0
                    ? "font-semibold text-lg"
                    : "text-muted-foreground mt-1"
                }
              >
                {venue.rating > 0 ? venue.rating : "Not rated"}
              </p>
            </div>
          </div>
          <Location location={venue.location} />
        </div>
        <div className="py-8 border-b border-gray-400">
          <h2 className="font-semibold mb-2">Description:</h2>
          <p>{venue.description}</p>
        </div>
      </div>
    </div>
  );
}
