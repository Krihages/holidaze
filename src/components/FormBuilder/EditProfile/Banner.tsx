"use client";

import FormBuilder from "@/components/FormBuilder";
import { ChangeEvent } from "react";

export default function Banner({
  banner,
  setBanner,
}: {
  banner: { url: string; alt?: string };
  setBanner: (banner: { url: string; alt?: string }) => void;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") return null;
    setBanner({ url: e.target.value, alt: banner.alt });
  };
  return (
    <div className="flex flex-col gap-2">
      <FormBuilder.Field
        name="banner.url"
        type="url"
        label="Banner"
        onChange={handleChange}
        value={banner?.url === "/images/placeholder-img.jpg" ? "" : banner?.url}
      />
      <img
        src={banner?.url}
        alt={banner?.alt || "Banner"}
        className="rounded-sm object-cover w-full min-h-32 max-h-32 mt-2"
        onError={() => setBanner({ url: "/images/placeholder-img.jpg" })}
      />
    </div>
  );
}
