"use client";

import Image from "next/image";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { VenueType } from "@/types/venue";
import ImgActions from "./ImgActions";
import useCheckImage from "@/hooks/useCheckImage";
const imageBlur = "/images/image-blur.jpg";

export default function ImageWithActions({ venue }: { venue: VenueType }) {
  const [isHovered, setIsHovered] = useState(false);

  const newUrl = useCheckImage(venue.media[0]?.url as string);

  return (
    <AspectRatio
      className="relative"
      ratio={3 / 2}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={newUrl ?? imageBlur}
        alt={venue.media[0]?.alt ?? venue.name}
        fill
        quality={40}
        sizes="(max-width: full) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-md h-full"
        placeholder="blur"
        blurDataURL={imageBlur}
        unoptimized={true}
      />
      <ImgActions isHovered={isHovered} venue={venue} />
    </AspectRatio>
  );
}
