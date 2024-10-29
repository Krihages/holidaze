"use client";

import { FavoriteIcon, IconButton } from "@/components/icons";
import { useFavorites } from "@/providers/Favorites";
import { VenueType } from "@/types/venue";
import HoverMessage from "../HoverMessage";
import { useState } from "react";

import LoginModal from "@/components/Modal/Login";
import checkUserLoggedIn from "@/actions/checkUserLoggedIn";

/**
 * A button component that allows users to add or remove a venue from their favorites.
 * If the user is not logged in, it prompts them to log in.
 * @param {Object} props - The component props
 * @param {VenueType} props.venue - The venue object containing venue details
 * @returns {JSX.Element} A button component for adding/removing favorites with a login prompt if not logged in
 */
export default function FavoriteButton({ venue }: { venue: VenueType }) {
  const [open, setOpen] = useState(false);
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const ifFavorite = favorites.some((favorite) => favorite.id === venue.id);

  /**
   * Toggles the favorite status of the venue.
   * If the user is not logged in, it opens the login modal.
   */
  async function toggleFavorite() {
    const user = await checkUserLoggedIn();
    if (user) {
      if (ifFavorite) {
        removeFavorite(venue);
      } else {
        addFavorite(venue);
      }
    } else {
      setOpen(true);
    }
  }

  return (
    <>
      <HoverMessage
        message={ifFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <IconButton
          onClick={toggleFavorite}
          ariaLabel="Add to favorites button"
          className="bg-opacity-50 "
        >
          <FavoriteIcon
            filled={ifFavorite}
            color={ifFavorite ? "destructive" : "default"}
          />
        </IconButton>
      </HoverMessage>
      <div onClick={(e) => e.stopPropagation()}>
        <LoginModal open={open} isOpen={setOpen} variant="controlled" />
      </div>
    </>
  );
}
