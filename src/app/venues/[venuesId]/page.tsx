import { Suspense } from "react";
import Venue from "./_components/Venue";
import Loader from "./_components/loader";

export default function SpecificVenue({
  params,
}: {
  params: { venuesId: string };
}) {
  return (
    <Suspense fallback={<Loader />}>
      <Venue id={params.venuesId} />
    </Suspense>
  );
}
