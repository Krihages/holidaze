"use client";

import { Booking } from "@/types/profile";
import { useState } from "react";
import StatOptions from "./StatOptions";
import Bookings from "./Bookings";
import Venues from "./Venues";
import { VenueType } from "@/types/venue";
import { useFavorites } from "@/providers/Favorites";
import Favorites from "./Favorites";
import NoneSelected from "./NoneSelected";

type Props = {
  bookings?: Booking[];
  manager: boolean;
  venues?: VenueType[] | undefined;
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

  const items: Item[] = [];
  if (manager) {
    items.push({
      type: "venues",
      count: venues?.length || 0,
      label: "Your venues",
    });
    items.push({
      type: "customerBookings",
      count: customerBookings?.length || 0,
      label: "Customer Bookings",
    });
  }

  items.push(
    {
      type: "yourBookings",
      count: bookings?.length || 0,
      label: "Your Bookings",
    },
    { type: "favorites", count: favorites.length, label: "Your Favorites" }
  );

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 justify-between  w-full ">
      <StatOptions active={activeTab} setActive={setActiveTab} items={items} />
      <div className="flex flex-col gap-10 w-full bg-muted rounded-lg border ">
        <div className="p-4 flex items-center justify-center w-full h-full">
          {activeTab === "yourBookings" && <Bookings bookings={bookings} />}
          {activeTab === "favorites" && <Favorites favorites={favorites} />}
          {activeTab === "venues" && <Venues venues={venues as VenueType[]} />}
          {activeTab === null && <NoneSelected />}
        </div>
      </div>
    </div>
  );
}
