import { SearchParams } from "@/types/filter";
import VenuesList from "./_components/VenuesList";
import { Suspense } from "react";
import VenueCardSkeletons from "@/components/Loaders/VenueCardSkeleton";

export const metadata = {
  title: "Holidaze | Venues",
  description:
    "Discover and book unique venues for your next stay. Browse our curated collection of accommodations, filter by amenities, location and price to find your perfect match.",
};

export default async function Venues({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div>
      <Suspense fallback={<VenueCardSkeletons numberOfCards={12} />}>
        <VenuesList params={searchParams} />
      </Suspense>
    </div>
  );
}
