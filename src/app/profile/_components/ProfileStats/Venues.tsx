import { VenueType } from "@/types/venue";
import VenueCard from "@/components/VenueCard";
import PageHandler from "@/components/PageHandler";

import VenueBookings from "@/components/Modal/VenueBookings";

type Props = {
  venues: VenueType[];
};

export default function Venues({ venues }: Props) {
  const allVenues = venues.map((venue) => (
    <div
      key={venue.id}
      className="flex flex-col justify-center  relative w-full"
    >
      <VenueCard venue={venue} />
      <div className="absolute  right-0 bottom-1/3 w-full flex justify-center">
        <VenueBookings venue={venue} />
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col justify-between h-full w-full ">
      <PageHandler
        items={allVenues}
        itemsPerPage={4}
        renderItems={(items) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4 w-full max-w-3xl auto-rows-fr ">
            {items}
          </div>
        )}
      />
    </div>
  );
}
