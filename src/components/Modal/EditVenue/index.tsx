"use client";

import VenueForm from "@/components/FormBuilder/VenueForm";
import Modal from "../index";
import { VenueType } from "@/types/venue";
import { useState } from "react";

export default function EditVenue({ venue }: { venue: VenueType }) {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      triggerVariant="primary"
      triggerBtn="Edit Venue"
      headerText="Edit Venue"
      variant="controlled"
      open={open}
      isOpen={setOpen}
    >
      <VenueForm venueData={venue} setOpen={setOpen} />
    </Modal>
  );
}
