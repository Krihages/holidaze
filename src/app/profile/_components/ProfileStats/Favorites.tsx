import { VenueType } from "@/types/venue";
import VenueCard from "@/components/VenueCard";
import PageHandler from "@/components/PageHandler";

type Props = {
  favorites: VenueType[];
};

export default function Favorites({ favorites }: Props) {
  if (favorites.length === 0) {
    return (
      <div className="text-center text-lg">You have no favorites yet..</div>
    );
  }

  const venues = favorites.map((venue) => (
    <VenueCard key={venue.id} venue={venue} />
  ));

  return (
    <div className="flex flex-col justify-between h-full">
      <PageHandler
        items={venues}
        itemsPerPage={4}
        renderItems={(items) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-3xl auto-rows-fr">
            {items}
          </div>
        )}
      />
    </div>
  );
}
