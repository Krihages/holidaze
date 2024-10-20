import { VenueType } from "@/types/venue";
import FavoriteButton from "./FavoriteButton";
import HoverMessage from "../HoverMessage";

export default function ImgActions({
  isHovered,
  venue,
}: {
  isHovered: boolean;
  venue: VenueType;
}) {
  return (
    <div
      className={`absolute top-2  transition-opacity duration-500 w-full ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={`absolute right-2 `}>
        <FavoriteButton venue={venue} />
      </div>
      <HoverMessage
        className="absolute left-2 py-2 px-6 rounded-md text-sm bg-info text-info-foreground font-semibold cursor-default"
        message={`This venue can host up to ${venue.maxGuests} guests`}
      >
        <span className="cursor-default">{venue.maxGuests} guests</span>
      </HoverMessage>
    </div>
  );
}
