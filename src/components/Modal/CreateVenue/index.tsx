import Modal from "../index";
import VenueForm from "@/components/FormBuilder/VenueForm";

export default function CreateVenue() {
  return (
    <Modal
      triggerVariant="primary"
      triggerBtn="New Venue"
      headerText="Create Venue"
    >
      <VenueForm />
    </Modal>
  );
}
