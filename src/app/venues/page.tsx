import { SearchParams } from "@/types/filter";
import VenuesList from "./_components/VenuesList";
import { Suspense } from "react";

export default async function Venues({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <VenuesList params={searchParams} />
      </Suspense>
    </div>
  );
}
