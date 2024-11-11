import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { VenueType } from "@/types/venue";

export default function HostDetails({ venue }: { venue: VenueType }) {
  return (
    <div className="flex gap-4 items-center border-b border-gray-400 py-8">
      <Avatar>
        <AvatarImage
          sizes="100"
          src={venue.owner?.avatar.url as string}
          alt={venue.owner?.avatar?.alt ?? `avatar alt text`}
          className="object-cover"
        />
        <AvatarFallback className="text-foreground">
          {venue.owner.name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col ">
        <h3 className="font-semibold">Hosted by:</h3>
        <p className=" text-sm">{venue.owner.name}</p>
      </div>
    </div>
  );
}
