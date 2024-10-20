import { Suspense } from "react";
import Venue from "./_components/Venue";

export default function SpecificVenue({
  params,
}: {
  params: { venuesId: string };
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Venue id={params.venuesId} />
    </Suspense>
  );
}
