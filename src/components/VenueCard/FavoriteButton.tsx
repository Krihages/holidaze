"use client";

import { FavoriteIcon, IconButton } from "@/components/icons";
import { useFavorites } from "@/providers/Favorites";
import { VenueType } from "@/types/venue";
import HoverMessage from "../HoverMessage";

export default function FavoriteButton({ venue }: { venue: VenueType }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const ifFavorite = favorites.some((favorite) => favorite.id === venue.id);

  return (
    <HoverMessage
      message={ifFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <IconButton
        onClick={() => {
          if (ifFavorite) {
            removeFavorite(venue);
          } else {
            addFavorite(venue);
          }
        }}
        ariaLabel="Add to favorites button"
        className="bg-opacity-50"
      >
        <FavoriteIcon filled={ifFavorite} color="default" />
      </IconButton>
    </HoverMessage>
  );
}
