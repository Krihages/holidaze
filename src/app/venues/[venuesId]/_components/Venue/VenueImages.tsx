"use client";

import { Media } from "@/types/venue";
import randomVenueUrl from "@/lib/helpers/randomVenueUrl";
import Image from "next/image";
import useCheckImage from "@/hooks/useCheckImage";

const imageBlur = "/images/image-blur.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function VenueImages({ images }: { images: Media[] }) {
  const newUrl = useCheckImage(images[0]?.url as string);

  if (images?.length === 0) {
    images[0] = {
      url: randomVenueUrl(),
      alt: "placeholder venue alt text",
    };
  }

  return (
    <div className="relative w-full  overflow-hidden aspect-square max-h-[600px] max-w-7xl mx-auto">
      {images?.length > 1 ? (
        <MultipleImages images={images} />
      ) : (
        <Image
          className="object-cover "
          src={newUrl ?? imageBlur}
          alt={images[0]?.alt ?? "venue image alt text"}
          priority
          loading="eager"
          quality={40}
          fill
        />
      )}
    </div>
  );
}
function MultipleImages({ images }: { images: Media[] }) {
  return (
    <Carousel className="w-full h-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="relative aspect-square max-h-[600px] w-full"
          >
            <Image
              src={image.url}
              alt={image.alt ?? "venue image alt text"}
              fill
              className="object-cover"
              quality={40}
              loading={index === 0 ? "eager" : "lazy"}
              priority={index === 0}
            />
            <div className="absolute top-2 right-2 bg-white shadow-md  py-2 px-4 rounded-md ">
              Image {index + 1} of {images.length}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className=" right-2 max-sm:hidden  " />
      <CarouselPrevious className=" max-sm:hidden left-2  " />
    </Carousel>
  );
}
