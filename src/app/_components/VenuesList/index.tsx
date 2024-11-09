import request from "@/api/requests";
import VenueCard from "@/components/VenueCard";
import { VenueType } from "@/types/venue";
import HandleError from "@/api/HandleError";

type Error = {
  message?: string;
};

export default async function VenuesList() {
  const { data, error } = await request.get({
    endpoint: "venues",
  });

  if (error) {
    return (
      <HandleError message={(error as Error).message || "Unknown error"} />
    );
  }

  const venues = data.data;

  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {venues.map((venue: VenueType) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </>
  );
}
