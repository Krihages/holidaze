"use client";

import FormBuilder from "@/components/FormBuilder";
import { ChangeEvent } from "react";

export default function Banner({
  url,
  setUrl,
}: {
  url: string;
  setUrl: (url: string) => void;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") return null;
    setUrl(e.target.value);
  };
  return (
    <div>
      <img
        src={url}
        alt="avatar"
        className="rounded-sm object-cover w-full min-h-32 max-h-32"
        onError={() => setUrl("/images/placeholder-img.jpg")}
      />
      <FormBuilder.Field
        name="banner"
        type="url"
        label="Banner"
        onChange={handleChange}
        value={url}
      />
    </div>
  );
}
