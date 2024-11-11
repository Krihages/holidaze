import NumGuests from "@/components/BookVenue/NumGuests";

export default function Guests({
  guests,
  setGuests,
}: {
  guests: number;
  setGuests: (guests: number) => void;
}) {
  return (
    <div>
      <NumGuests
        guests={guests}
        setGuests={setGuests}
        className="rounded-full border-gray-400 w-[180px] justify-center"
        triggerText="Guests"
        maxGuests={99}
      />
    </div>
  );
}
