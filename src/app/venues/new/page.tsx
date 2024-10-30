import VenueForm from "@/components/FormBuilder/VenueForm";
import Section from "@/components/Section";

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
