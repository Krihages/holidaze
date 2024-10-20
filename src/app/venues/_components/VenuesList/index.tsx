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
    endpoint: "venues",
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
      <SearchFilter params={params} />
      <VenuesGrid venues={filteredVenues} />
    </Section>
  );
}
