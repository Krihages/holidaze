"use client";

import { Profile } from "@/types/profile";
import FormBuilder from "@/components/FormBuilder";
import { SubmitHandler } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import Avatar from "./Avatar";
import Banner from "./Banner";
import VenueManager from "./VenueManager";
import updateProfile from "@/api/actions/updateProfile";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const editProfileSchema = z.object({
  avatar: z
    .object({
      url: z.string(),
      alt: z.string().optional(),
    })
    .optional(),
  banner: z
    .object({
      url: z.string(),
      alt: z.string().optional(),
    })
    .optional(),
  bio: z.string().optional(),
  venueManager: z.boolean().optional(),
});

export default function EditProfile({
  profile,
  setOpen,
}: {
  profile: Profile;
  setOpen?: (value: boolean) => void;
}) {
  const [avatar, setAvatar] = useState(profile.avatar || { url: "", alt: "" });
  const [banner, setBanner] = useState(profile.banner || { url: "", alt: "" });
  const [venueManager, setVenueManager] = useState(
    profile.venueManager || false
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const defaultForm = {
    avatar: avatar || { url: "", alt: "" },
    banner: banner || { url: "", alt: "" },
    venueManager: venueManager || false,
  };

  console.log(defaultForm);

  const handleSubmit = async () => {
    console.log("handleSubmit");
    const dataSubmit = {
      avatar: avatar,
      banner: banner,
      venueManager: venueManager,
    };
    setLoading(true);
    const res = await updateProfile(dataSubmit, profile.name);
    if (res.success) {
      setOpen?.(false);
      toast({
        title: "Success",
        description: res.message,
      });
      router.refresh();
    } else {
      console.log(res);
      toast({
        title: "Error",
        description: res.message,
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
    <FormBuilder
      className="flex flex-col gap-10"
      zodSchema={editProfileSchema}
      defaultForm={defaultForm}
      onSubmit={handleSubmit as SubmitHandler<FieldValues>}
    >
      <VenueManager
        venueManager={venueManager}
        setVenueManager={setVenueManager}
      />
      <Banner banner={banner} setBanner={setBanner} />
      <Avatar avatar={avatar} setAvatar={setAvatar} />
      <FormBuilder.Button isSubmitting={loading}>Save</FormBuilder.Button>
    </FormBuilder>
  );
}
