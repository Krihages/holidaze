import EditProfile from "@/components/FormBuilder/EditProfile";
import { Profile } from "@/types/profile";
import Modal from "@/components/Modal";

export default function EditProfileModal({ profile }: { profile: Profile }) {
  return (
    <Modal
      headerText="Edit Profile"
      description="Edit your profile"
      triggerVariant="primary"
      triggerBtn="Edit Profile"
    >
      <EditProfile profile={profile} />
    </Modal>
  );
}
