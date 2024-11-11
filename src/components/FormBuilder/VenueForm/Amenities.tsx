import { VenueType } from "@/types/venue";
import FormBuilder from "../";

export default function Amenities({
  amenities,
}: {
  amenities: VenueType["meta"];
}) {
  return (
    <div className="max-w-sm">
      <h3 className="text-lg font-bold mb-2">Amenities</h3>
      <div className="grid grid-cols-2 gap-4 ">
        <FormBuilder.Checkbox
          name="wifi"
          label="Wifi"
          defaultValue={amenities?.wifi}
        />
        <FormBuilder.Checkbox
          name="pets"
          label="Pets"
          defaultValue={amenities?.pets}
        />
        <FormBuilder.Checkbox
          name="breakfast"
          label="Breakfast"
          defaultValue={amenities?.breakfast}
        />
        <FormBuilder.Checkbox
          name="parking"
          label="Parking"
          defaultValue={amenities?.parking}
        />
      </div>
    </div>
  );
}
