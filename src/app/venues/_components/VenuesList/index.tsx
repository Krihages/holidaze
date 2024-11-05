import HandleError from "@/api/HandleError";
import request from "@/api/requests";
import Section from "@/components/Section";
import VenuesGrid from "@/components/VenuesGrid";
import filterVenuesList from "@/lib/helpers/filterVenuesList";
import { SearchParams } from "@/types/filter";
import SearchFilter from "@/components/Modal/SearchFilter";

type Error = {
  message?: string;
};
export default async function VenuesList({ params }: { params: SearchParams }) {
  const { data, error } = await request.get({
    endpoint: "venues?sort=created&sortOrder=desc",
  });
  if (error) {
    return (
      <HandleError message={(error as Error).message || "Unknown error"} />
    );
  }

  const venues = data.data;

  const filteredVenues = filterVenuesList(venues, params);

  return (
    <Section>
      <div className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Venues</h1>
        <SearchFilter params={params} />
      </div>
      <VenuesGrid venues={filteredVenues} />
    </Section>
  );
}
