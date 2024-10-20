import Modal from "..";
import LoginForm from "@/components/FormBuilder/Login";

export default function Login({
  triggerVariant = "primary",
}: {
  triggerVariant?:
    | "primary"
    | "none"
    | "ghost"
    | "destructive"
    | "outline"
    | "link"
    | undefined;
}) {
  return (
    <Modal
      triggerBtn="Login"
      headerText="Login"
      className={{ content: "max-w-sm" }}
      triggerVariant={triggerVariant}
      description="Log in to your account (email and password)"
    >
      <LoginForm />
    </Modal>
  );
}
