"use client";

import EditVenue from "@/components/Modal/EditVenue";
import { Button } from "@/components/ui/button";
import { VenueType } from "@/types/venue";

export default function HostOptions({ venue }: { venue: VenueType }) {
  function handleDelete() {
    console.log(venue);
  }
  return (
    <div className="flex gap-4">
      <Button
        onClick={handleDelete}
        variant="outline"
        className="border-muted-foreground"
      >
        Delete venue
      </Button>
      <EditVenue venue={venue} />
    </div>
  );
}
