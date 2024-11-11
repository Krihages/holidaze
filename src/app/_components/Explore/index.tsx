import ExploreDescription from "./ExploreDescription";
import ExploreMap from "./ExploreMap";
import Section from "@/components/Section";

export default function Explore() {
  return (
    <Section variant="info">
      <div className="flex flex-col items-center lg:flex-row  gap-4">
        <ExploreDescription />
        <ExploreMap />
      </div>
    </Section>
  );
}
