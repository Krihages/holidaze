"use client";

import { Profile } from "@/types/profile";
import FormBuilder from "@/components/FormBuilder";
import { SubmitHandler } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import Avatar from "./Avatar";
import Banner from "./Banner";

export default function EditProfile({ profile }: { profile: Profile }) {
  const [url, setUrl] = useState(profile.avatar.url);
  const [bannerUrl, setBannerUrl] = useState(profile.banner.url);
  const [venueManager, setVenueManager] = useState(profile.venueManager);

  const defaultForm = {
    avatar: { url: url, alt: profile.avatar.alt },
    banner: profile?.banner.url,
    bio: profile?.bio,
    venueManager: venueManager,
  };

  console.log(url);

  const editProfileSchema = z.object({
    avatar: z.string().optional(),
    banner: z.string().optional(),
    bio: z.string().optional(),
    venueManager: z.boolean().optional(),
  });

  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <FormBuilder
      zodSchema={editProfileSchema}
      defaultForm={defaultForm}
      onSubmit={handleSubmit as SubmitHandler<FieldValues>}
    >
      <Banner url={bannerUrl} setUrl={setBannerUrl} />
      <Avatar url={url} setUrl={setUrl} />
      <div className="flex flex-col gap-2">
        <FormBuilder.Checkbox
          name="venueManager"
          label="Venue Manager"
          onChange={setVenueManager}
        />{" "}
        <span className="text-sm text-muted-foreground">
          {venueManager
            ? "unchecking this will change your account to a Customer account"
            : "checking this will change your account to a Venue Manager account"}
        </span>
      </div>
    </FormBuilder>
  );
}
