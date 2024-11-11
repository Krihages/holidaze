import Form from "./Form";

export default function VenueManager() {
  return (
    <>
      <div className="py-8">
        <h1 className="text-lg font-bold">Venue Manager account</h1>
        <p className="text-sm text-muted-foreground">
          A venue manager account is used for adding and managing your own
          venues. If you only want to book venues, switch to Customer account.
        </p>
      </div>
      <Form manager={true} />
    </>
  );
}
