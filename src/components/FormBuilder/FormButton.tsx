import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import Spinner from "@/components/Loaders/Spinner";

type Props = {
  variant?:
    | "default"
    | "outline"
    | "primary"
    | "ghost"
    | "link"
    | "accent"
    | "info"
    | "reverse";
  className?: string;
  submitText?: string;
  children?: React.ReactNode;
  isSubmitting?: boolean;
};

/**
 * A form button component that handles loading states and submission
 * @param {Props} props - The component props
 * @param {'default' | 'outline' | 'primary' | 'ghost' | 'link' | 'accent' | 'info' | 'reverse'} [props.variant='primary'] - Button variant style
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.submitText='Submitting...'] - Text to show during submission
 * @param {React.ReactNode} [props.children] - Button content
 * @param {boolean} [props.isSubmitting=false] - Manual control of loading state
 * @returns {JSX.Element} A button component with loading states
 */
export default function FormButton({
  variant = "primary",
  className,
  submitText = "Submitting...",
  children,
  isSubmitting = false,
}: Props): JSX.Element {
  const { pending } = useFormStatus();
  return (
    <Button variant={variant} className={className} disabled={pending}>
      {isSubmitting ? (
        <div className="flex items-center justify-center gap-2">
          <Spinner />
          {submitText}
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
