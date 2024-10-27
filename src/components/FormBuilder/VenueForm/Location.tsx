import { VenueType } from "@/types/venue";
import FormBuilder from "..";
export default function Location({
  location,
}: {
  location: VenueType["location"];
}) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Location</h3>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 w-full">
          <FormBuilder.Field
            name="country"
            label="Country"
            className="w-full"
          />
          <FormBuilder.Field
            name="address"
            label="Address"
            className="w-full"
          />
        </div>
        <div className="flex gap-2">
          <FormBuilder.Field name="city" label="City" className="w-full" />
          <FormBuilder.Field name="zip" label="Zip" type="number" />
        </div>
      </div>
    </div>
  );
}
