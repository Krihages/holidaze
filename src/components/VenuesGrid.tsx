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

/**
 * Grid component for displaying venue cards
 * @param {Props} props - Component props
 * @param {VenueType[]} props.venues - Array of venue objects to display
 * @param {string} [props.className] - Optional className for additional styling
 * @param {string} [props.titleText] - Optional title text to display above grid
 * @param {string} [props.link] - Optional link URL for "view all" link
 * @param {string} [props.linkText="view all"] - Optional text for "view all" link
 * @returns Grid of venue cards with optional title and link
 * @example
 * <VenuesGrid
 *   venues={venuesList}
 *   titleText="Featured Venues"
 *   link="/venues"
 * />
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
