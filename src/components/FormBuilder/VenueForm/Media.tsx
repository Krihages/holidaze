"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { XMarkIcon } from "@/components/icons";
import placeholderImg from "@/images/placeholder-img.jpg";

type MediaProps = {
  images: Media[];
  setImages: React.Dispatch<React.SetStateAction<Media[]>>;
};

type Media = { url: string; alt?: string };

export default function Media({ images, setImages }: MediaProps) {
  const [inputValue, setInputValue] = useState("");

  const handleAddImage = () => {
    if (inputValue.length < 10) return;
    setImages([...images, { url: inputValue, alt: "" }]);
    setInputValue("");
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Images</h2>
      <div className="flex flex-wrap gap-4">
        <div className="w-full aspect-square max-w-60 rounded-md bg-muted shadow-md">
          <MainImage media={images[0]} setImages={setImages} />
        </div>
        <div className="flex flex-wrap gap-4 w-full ">
          {images.map(
            (image, index) =>
              index > 0 && (
                <SmallImage
                  key={index}
                  media={image}
                  setImages={setImages}
                  index={index}
                />
              )
          )}
        </div>
      </div>
      <div className="flex gap-4 py-4 flex-wrap">
        <Input
          type="url"
          placeholder="enter image URL..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="max-w-sm"
        />
        <Button type="button" onClick={handleAddImage}>
          Add image
        </Button>
      </div>
    </div>
  );
}

function SmallImage({
  media,
  index,
  setImages,
}: {
  media: Media;
  index: number;
  setImages: React.Dispatch<React.SetStateAction<Media[]>>;
}) {
  const handleRemoveImage = () => {
    setImages((prevImages: Media[]) =>
      prevImages.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="w-full aspect-square max-w-24 max-h-24 rounded-md bg-muted shadow-md relative">
      <div className="relative w-full h-full">
        <Image
          src={media.url}
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <button
          type="button"
          className="absolute top-2 right-2 p-.5 rounded-full bg-muted shadow-md border"
          onClick={handleRemoveImage}
        >
          <XMarkIcon size={12} />
        </button>
      </div>
    </div>
  );
}

function MainImage({
  media,
  setImages,
}: {
  media: Media;
  setImages: React.Dispatch<React.SetStateAction<Media[]>>;
}) {
  const handleRemoveImage = () => {
    setImages((prevImages: Media[]) => prevImages.filter((_, i) => i !== 0));
  };

  return (
    <div className="relative w-full h-full">
      <Image
        src={media?.url ?? placeholderImg}
        alt=""
        fill
        className="rounded-md shadow-md object-cover border"
      />
      {media?.url && (
        <button
          type="button"
          className="absolute top-2 right-2 p-1 rounded-full bg-muted shadow-md border"
          onClick={handleRemoveImage}
        >
          <XMarkIcon />
        </button>
      )}
    </div>
  );
}
