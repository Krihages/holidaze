import Modal from "..";
import LoginForm from "@/components/FormBuilder/Login";

type LoginProps = {
  triggerVariant?:
    | "primary"
    | "none"
    | "ghost"
    | "destructive"
    | "outline"
    | "link"
    | "reverse"
    | undefined;
  variant?: "default" | "controlled";
  open?: boolean | undefined;
  isOpen?: (open: boolean) => void | undefined;
};

export default function Login({
  triggerVariant = "primary",
  variant = "default",
  open = undefined,
  isOpen = undefined,
}: LoginProps) {
  return (
    <Modal
      triggerBtn={variant === "default" ? "Login" : undefined}
      headerText="Login to continue"
      className={{ content: "max-w-sm" }}
      triggerVariant={triggerVariant}
      description="Log in to your account (email and password)"
      isOpen={isOpen}
      open={open}
      variant={variant}
    >
      <LoginForm />
    </Modal>
  );
}
