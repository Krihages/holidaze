import { Suspense } from "react";
import Venue from "./_components/Venue";
import Loader from "./_components/loader";

export const metadata = {
  title: "Holidaze | Venue Details",
  description:
    "Discover and book this unique venue for your next stay, complete with amenities, pricing, and availability.",
};

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
