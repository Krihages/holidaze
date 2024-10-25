import { Button } from "@/components/ui/button";
import { User } from "@/types/venue";
import Image from "next/image";

export default function HostDetails({ host }: { host: User }) {
  return (
    <div className="bg-info text-info-foreground py-6 px-4 flex gap-4 items-center border rounded-md max-w-full w-[300px] ">
      <div className="relative w-24  h-24 self-center aspect-square ">
        <Image
          src={host.avatar.url}
          alt={host.avatar.alt ?? `avatar alt text`}
          fill
          className="rounded-full object-cover border-2 border-background"
        />
      </div>
      <div className="flex flex-col justify-between h-24">
        <div className="flex flex-col">
          <p className=" text-muted-foreground">Host:</p>
          <h3 className=" font-semibold">{host.name}</h3>
        </div>
        <Button variant="outline" className="border-muted-foreground ">
          View profile
        </Button>
      </div>
    </div>
  );
}
