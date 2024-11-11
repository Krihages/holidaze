import Section from "@/components/Section";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loader() {
  return (
    <Section>
      <div className="relative flex flex-col gap-4">
        <Skeleton className="w-full h-[200px] sm:h-[230px] lg:h-[300px]" />
        <div className="flex gap-6 flex-wrap h-full">
          <Skeleton className=" w-[250px] h-[250px]   " />
          <div className="flex flex-col justify-between   h-full flex-wrap gap-4 w-full max-w-md">
            <Skeleton className="w-full h-[40px]" />
            <Skeleton className="w-[70%] h-[40px]" />
            <Skeleton className="w-48 h-[60px] mt-8" />
          </div>
        </div>
      </div>
    </Section>
  );
}
