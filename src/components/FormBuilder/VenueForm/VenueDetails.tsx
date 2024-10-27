import FormBuilder from "..";

export default function VenueDetails({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold mb-2">Venue details</h2>
      <div className="flex flex-col gap-2 ">
        <FormBuilder.Field name="name" label="Name" />
        <FormBuilder.Textarea name="description" label="Description" />
      </div>
    </div>
  );
}
