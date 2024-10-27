import Form from "./Form";
import TabsContainer from "@/components/TabsContainer";

export default function Customer() {
  return (
    <>
      <div className="py-8">
        <h1 className="text-lg font-bold">Customer account</h1>
        <p className="text-sm text-muted-foreground">
          A customer account is used for booking venues whenever you want. For
          adding and managing your own venues, switch to Venue Manager.
        </p>
      </div>
      <Form manager={false} />
    </>
  );
}
