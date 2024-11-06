import FormBuilder from "@/components/FormBuilder";

export default function VenueManager({
  venueManager,
  setVenueManager,
}: {
  venueManager: boolean;
  setVenueManager: (value: boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <FormBuilder.Checkbox
        name="venueManager"
        label="Venue Manager"
        onChange={setVenueManager}
      />{" "}
      <span className="text-sm text-muted-foreground">
        {venueManager
          ? "unchecking this will change your account to a Customer account"
          : "checking this will change your account to a Venue Manager account"}
      </span>
    </div>
  );
}
