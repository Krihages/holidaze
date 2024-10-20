import { Card } from "@/components/ui/card";
import { VenueType } from "@/types/venue";
import ImageWithActions from "./ImageWithActions";
import VenueDetails from "./VenueDetails";
import Link from "next/link";

export default function VenueCard({ venue }: { venue: VenueType }) {
  return (
    <Link href={`/venues/${venue.id}`}>
      <Card className="overflow-hidden bg-transparent shadow-none border-none">
        <ImageWithActions venue={venue} />
        <VenueDetails venue={venue} />
      </Card>
    </Link>
  );
}
