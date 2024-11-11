import Image from "next/image";
import { Media } from "@/types/venue";

export default function Banner({
  banner,
  name,
}: {
  banner: Media;
  name: string;
}) {
  return (
    <div className="relative w-full h-[200px] sm:h-[230px] lg:h-[300px] ">
      <Image
        src={banner?.url}
        alt={banner?.alt ?? `${name}'s profile banner`}
        className="object-cover max-w-7xl mx-auto "
        fill
      />
    </div>
  );
}
