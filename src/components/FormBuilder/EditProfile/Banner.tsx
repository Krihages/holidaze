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
    const newUrl = e.target.value;
    setBanner({ url: newUrl, alt: banner.alt });
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
        src={banner?.url || "/images/placeholder-img.jpg"}
        alt={banner?.alt || "User selected banner "}
        className="rounded-sm object-cover w-full min-h-32 max-h-32 mt-2"
        onError={() => setBanner({ url: "/images/placeholder-img.jpg" })}
      />
    </div>
  );
}
