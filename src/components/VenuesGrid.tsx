import { VenueType } from "@/types/venue";
import VenueCard from "./VenueCard";
import { cn } from "@/lib/utils";
import Link from "next/link";
type Props = {
  venues: VenueType[];
  className?: string;
  children?: React.ReactNode;
  titleText?: string;
  link?: string;
  linkText?: string;
};

/* 
This is the grid container for displaying the venues
// optional title and link 
*/
export default function VenuesGrid({
  venues,
  className,
  titleText,
  link,
  linkText = "view all",
}: Props) {
  if (venues.length === 0) {
    return <div>No venues found</div>;
  }

  return (
    <>
      {titleText && (
        <div className="flex justify-between items-center w-full py-6">
          <h2 className="text-2xl font-bold">{titleText}</h2>
          {link && <Link href={link}>{linkText}</Link>}
        </div>
      )}
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
          className
        )}
      >
        {venues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </>
  );
}
