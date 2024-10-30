"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import dialogText from "@/data/dialogText";
import { toast } from "@/hooks/use-toast";

type ConfirmActionProps = {
  actionType?: "deleteBooking";
  confirmAction?: () => Promise<{
    success?: boolean;
    message?: string;
  }>;
  children: React.ReactNode;
};

/**
 * A confirmation dialog component that prompts users before executing an action
 * the dialog text is determined by the actionType prop and can be customized in dialogText.ts
 * @param {Object} props - The component props
 * @param {"deleteBooking"} [props.actionType="deleteBooking"] - Type of action to confirm, determines dialog text (optional)
 * @param {function} [props.confirmAction] - Callback function to execute when action is confirmed (optional)
 * @param {React.ReactNode} props.children - Trigger element that opens the confirmation dialog
 * @returns {JSX.Element} A confirmation dialog component
 */
export default function ConfirmAction({
  actionType = "deleteBooking",
  confirmAction,
  children,
}: ConfirmActionProps): JSX.Element {
  const { title, description, actionBtnText } = dialogText[actionType];

  async function handleConfirmAction() {
    if (!confirmAction) return;
    const result = await confirmAction();

    if (result?.message) {
      if (result.success) {
        toast({
          title: title,
          description: result?.message || description,
          duration: 5000,
        });
      } else {
        toast({
          variant: "destructive",
          title: title,
          description: result?.message,
          duration: 5000,
        });
      }
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmAction}>
            {actionBtnText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
