"use client";

import { Booking } from "@/types/profile";
import { useState } from "react";
import StatOptions from "./StatOptions";
import Bookings from "./Bookings";
import Section from "@/components/Section";
import { VenueType } from "@/types/venue";
import { useFavorites } from "@/providers/Favorites";
import Favorites from "./Favorites";

type Props = {
  bookings: Booking[];
  manager: boolean;
  venues?: VenueType[];
  customerBookings?: Booking[];
};

type Item = {
  type: "yourBookings" | "venues" | "favorites" | "customerBookings" | null;
  count: number;
  label: string;
};

export default function AllStats({
  bookings,
  manager,
  venues,
  customerBookings,
}: Props) {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const { favorites } = useFavorites();

  const items: Item[] = [
    { type: "yourBookings", count: bookings.length, label: "Your Bookings" },
    { type: "favorites", count: favorites.length, label: "YourFavorites" },
  ];

  if (manager) {
    items.push({ type: "venues", count: venues?.length || 0, label: "Venues" });
    items.push({
      type: "customerBookings",
      count: customerBookings?.length || 0,
      label: "Customer Bookings",
    });
  }

  return (
    <Section>
      <div className="flex flex-col sm:flex-row gap-4 justify-between w-full ">
        <StatOptions
          active={activeTab}
          setActive={setActiveTab}
          items={items}
        />
        <div className="flex flex-col gap-10 w-full ">
          {activeTab === "bookings" && <Bookings bookings={bookings} />}
          {activeTab === "favorites" && <Favorites favorites={favorites} />}
        </div>
      </div>
    </Section>
  );
}
