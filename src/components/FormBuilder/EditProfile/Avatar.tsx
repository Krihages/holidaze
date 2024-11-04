"use client";

import Image from "next/image";
import FormBuilder from "@/components/FormBuilder";
import { ChangeEvent } from "react";

export default function Avatar({
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
        className="rounded-full object-cover h-40 w-40 max-h-40 max-w-40 shadow-md border"
        onError={() => setUrl("/images/placeholder-img.jpg")}
      />
      <FormBuilder.Field
        name="avatar"
        type="url"
        label="Avatar"
        onChange={handleChange}
        value={url}
      />
    </div>
  );
}
