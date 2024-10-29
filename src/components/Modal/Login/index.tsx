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

/**
 * Login component that renders a modal with a login form.
 *
 * @param {Object} props - The component props
 * @param {"primary"|"none"|"ghost"|"destructive"|"outline"|"link"|"reverse"|undefined} [props.triggerVariant="primary"] - The variant of the trigger button
 * @param {"default"|"controlled"} [props.variant="default"] - The variant of the modal
 * @param {boolean} [props.open] - The open state of the modal (for controlled variant)
 * @param {function} [props.isOpen] - The function to set the open state of the modal (for controlled variant)
 * @returns {JSX.Element} A modal component with a login form
 */
export default function Login({
  triggerVariant = "primary",
  variant = "default",
  open = undefined,
  isOpen = undefined,
}: LoginProps): JSX.Element {
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
