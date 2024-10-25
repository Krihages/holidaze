import Image from "next/image";
import { Media } from "@/types/venue";

export default function Avatar({
  media,
  name,
}: {
  media: Media;
  name: string;
}) {
  return (
    <div className=" relative rounded-lg max-w-[230px] md:max-w-[300px] w-full  aspect-square shadow-lg border border-white  bg-white p-4">
      <div className="relative p-4 w-full h-full ">
        <Image
          src={media.url}
          alt={media.alt ?? `${name}'s profile avatar`}
          className="object-cover rounded-sm  "
          fill
        />
      </div>
    </div>
  );
}
