"use client";

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
      <Button variant="primary" className="border-muted-foreground">
        Edit venue
      </Button>
    </div>
  );
}
