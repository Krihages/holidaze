import Modal from "../index";
import VenueForm from "@/components/FormBuilder/VenueForm";

export default function CreateVenue() {
  return (
    <Modal
      className={{ content: "max-w-2xl" }}
      triggerVariant="primary"
      triggerBtn="New Venue"
      headerText="Create Venue"
    >
      <VenueForm />
    </Modal>
  );
}
