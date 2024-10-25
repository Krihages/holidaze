"use client";

import { FavoriteIcon, IconButton } from "@/components/icons";
import { useFavorites } from "@/providers/Favorites";
import { VenueType } from "@/types/venue";
import HoverMessage from "../HoverMessage";
import { useState } from "react";

import LoginModal from "@/components/Modal/Login";
import checkUserLoggedIn from "@/actions/checkUserLoggedIn";

export default function FavoriteButton({ venue }: { venue: VenueType }) {
  const [open, setOpen] = useState(false);
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const ifFavorite = favorites.some((favorite) => favorite.id === venue.id);

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
