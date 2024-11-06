"use client";

import EditProfile from "@/components/FormBuilder/EditProfile";
import { Profile } from "@/types/profile";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function EditProfileModal({ profile }: { profile: Profile }) {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      headerText="Edit Profile"
      description="Edit your profile"
      triggerVariant="primary"
      triggerBtn="Edit Profile"
      variant="controlled"
      open={open}
      isOpen={setOpen}
    >
      <EditProfile profile={profile} setOpen={setOpen} />
    </Modal>
  );
}
