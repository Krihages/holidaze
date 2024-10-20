import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { exploreContent } from "@/data/explore";
import { PinIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function PinHover({
  children,
  country,
}: {
  children: React.ReactNode;
  country: string;
}) {
  const content = exploreContent[country as keyof typeof exploreContent];

  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold">Welcome to {content.city}</h3>
            <div className="text-sm text-muted-foreground flex gap-1  items-center">
              <PinIcon />
              <span>
                {content.country}, {content.region}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground ">
            {content.description}
          </p>
          <p className="text-sm text-muted-foreground ">
            Book a venue for your next trip:
          </p>
          <Link
            className={`${buttonVariants({ variant: "primary" })}`}
            href={`/venues/?query=${content.city.toLowerCase()}`}
          >
            venues in {content.city}
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
