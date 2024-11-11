import VenueForm from "@/components/FormBuilder/VenueForm";
import Section from "@/components/Section";

export const metadata = {
  title: "Holidaze | Create Venue",
  description:
    "List your property on Holidaze. Create a venue listing with photos, amenities, pricing, and location details. Start hosting and earning by sharing your unique space.",
};

export default function CreateVenuePage() {
  return (
    <Section>
      <div className="p-8 bg-white rounded-lg shadow-md max-w-xl text-foreground mx-auto">
        <h1 className="text-2xl font-bold mb-4">Create new venue</h1>
        <VenueForm />
      </div>
    </Section>
  );
}
