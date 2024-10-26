"use client";

import { Media } from "@/types/venue";
import randomVenueUrl from "@/lib/helpers/randomVenueUrl";
import Image from "next/image";
import useCheckImage from "@/hooks/useCheckImage";
import imageBlur from "@/images/image-blur.jpg";

export default function VenueImages({ images }: { images: Media[] }) {
  if (images?.length === 0) {
    images[0] = {
      url: randomVenueUrl().src,
      alt: "placeholder venue alt text",
    };
  }

  if (images?.length === 1) {
    const newUrl = useCheckImage(images[0]?.url);
    return (
      <div className="relative w-full  overflow-hidden aspect-square max-h-[600px] max-w-7xl mx-auto">
        <Image
          className="object-cover "
          src={newUrl ?? imageBlur}
          alt={images[0]?.alt ?? "venue image alt text"}
          priority
          loading="eager"
          quality={40}
          fill
        />
      </div>
    );
  }
}
