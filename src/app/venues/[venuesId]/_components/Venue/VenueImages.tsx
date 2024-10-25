import { Media } from "@/types/venue";
import randomVenueUrl from "@/lib/helpers/randomVenueUrl";
import Image from "next/image";

export default function VenueImages({ images }: { images: Media[] }) {
  if (images?.length === 0) {
    images[0] = {
      url: randomVenueUrl().src,
      alt: "placeholder venue alt text",
    };
  }

  if (images?.length === 1) {
    return (
      <div className="relative w-full  overflow-hidden aspect-square max-h-[600px] max-w-7xl mx-auto">
        <Image
          className="object-cover "
          src={images[0].url}
          alt={images[0].alt}
          fill
        />
      </div>
    );
  }
}
