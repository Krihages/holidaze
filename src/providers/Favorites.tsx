"use client";

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { VenueType } from "@/types/venue";

type FavoritesContextType = {
  favorites: VenueType[];
  addFavorite: (product: VenueType) => void;
  removeFavorite: (product: VenueType) => void;
  isFavorite: (product: VenueType) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<VenueType[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("venue_favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const addFavorite = (product: VenueType) => {
    const filteredFavorites = [...favorites, product];
    setFavorites(filteredFavorites);
    localStorage.setItem("venue_favorites", JSON.stringify(filteredFavorites));
  };

  const removeFavorite = (product: VenueType) => {
    const filteredFavorites = favorites.filter((fav) => fav.id !== product.id);

    setFavorites(filteredFavorites);
    localStorage.setItem("venue_favorites", JSON.stringify(filteredFavorites));
  };

  const isFavorite = (product: VenueType) =>
    favorites.some((fav) => fav.id === product.id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
