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

export default function FormButton({
  variant = "primary",
  className,
  submitText = "Submitting...",
  children,
  isSubmitting = false,
}: Props) {
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
