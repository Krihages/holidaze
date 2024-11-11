"use client";

import FormBuilder from "@/components/FormBuilder";
import { ChangeEvent } from "react";

export default function Avatar({
  avatar,
  setAvatar,
}: {
  avatar: { url: string; alt?: string };
  setAvatar: (avatar: { url: string; alt?: string }) => void;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setAvatar({ url: newUrl, alt: avatar.alt });
  };

  return (
    <div className="flex flex-col gap-2">
      <FormBuilder.Field
        name="avatar.url"
        type="url"
        label="Avatar"
        onChange={handleChange}
        value={avatar?.url === "/images/placeholder-img.jpg" ? "" : avatar?.url}
      />
      <img
        src={avatar?.url || "/images/placeholder-img.jpg"}
        alt={avatar?.alt || "Avatar"}
        className="rounded-full object-cover h-40 w-40 max-h-40 max-w-40 shadow-md border mt-2"
        onError={() =>
          setAvatar({ ...avatar, url: "/images/placeholder-img.jpg" })
        }
      />
    </div>
  );
}
