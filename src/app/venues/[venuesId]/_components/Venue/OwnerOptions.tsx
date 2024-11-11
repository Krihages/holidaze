"use client";

import EditVenue from "@/components/Modal/EditVenue";
import { Button } from "@/components/ui/button";
import { VenueType } from "@/types/venue";
import ConfirmAction from "@/components/ConfirmAction";
import deleteVenue from "@/api/actions/deleteVenue";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function HostOptions({ venue }: { venue: VenueType }) {
  const router = useRouter();
  async function handleDelete() {
    const result = await deleteVenue(venue.id);
    if (result.success) {
      toast({
        title: "Venue successfully deleted",
        description: result.message,
        duration: 5000,
      });
      router.push("/profile");
      return {
        success: true,
        message: result.message,
      };
    } else {
      toast({
        variant: "destructive",
        title: "Error deleting venue",
        description: result.message,
        duration: 5000,
      });
      return {
        success: false,
        message: result.message,
      };
    }
  }
  return (
    <div className="flex gap-4">
      <ConfirmAction actionType="deleteVenue" confirmAction={handleDelete}>
        <Button variant="outline" className="border-muted-foreground">
          Delete venue
        </Button>
      </ConfirmAction>
      <EditVenue venue={venue} />
    </div>
  );
}
