import FormBuilder from "..";

export default function MaxGuests() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-bold mb-2">Price and capacity</h3>
      <div className="flex gap-4">
        <FormBuilder.Field
          name="price"
          label="Price / night (NOK)"
          type="number"
        />
        <FormBuilder.Field
          name="maxGuests"
          label="Max guests"
          type="number"
          className="w-20"
        />
      </div>
    </div>
  );
}
