import Section from "@/components/Section";
import { Skeleton } from "@/components/ui/skeleton";
export default function Loader() {
  return (
    <>
      <Skeleton className="relative w-full  overflow-hidden aspect-square max-h-[600px] mx-auto max-w-7xl" />
      <Section>
        <div className="flex flex-col gap-8">
          <div className="flex  gap-8 flex-wrap justify-between">
            <Skeleton className="w-full max-w-[600px] h-[40px]" />
            <Skeleton className="w-full max-w-[400px] h-[40px]" />
          </div>
          <div className="flex gap-8 flex-wrap justify-between">
            <Skeleton className="w-full max-w-[400px] h-[250px]" />
            <Skeleton className="w-full max-w-[400px] h-[250px]" />
          </div>
        </div>
      </Section>
    </>
  );
}
