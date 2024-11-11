import Section from "../Section";
import { Skeleton } from "../ui/skeleton";

export default function VenueCardSkeletons({
  numberOfCards = 6,
}: {
  numberOfCards?: number;
}) {
  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: numberOfCards }).map((_, index) => (
          <VenueCardSkeleton key={index} />
        ))}
      </div>
    </Section>
  );
}

export function VenueCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Skeleton className="h-40 w-full" />
      <div className="flex gap-4 justify-between w-full">
        <Skeleton className="h-5 w-[35%]" />
        <Skeleton className="h-5 w-[50%]" />
      </div>
      <Skeleton className="h-5 w-[60%]" />
    </div>
  );
}
