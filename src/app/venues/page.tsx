import { SearchParams } from "@/types/filter";
import VenuesList from "./_components/VenuesList";
import { Suspense } from "react";
import VenueCardSkeletons from "@/components/Loaders/VenueCardSkeleton";

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
