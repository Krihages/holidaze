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

type ConfirmActionProps = {
  actionType?: "deleteBooking";
  confirmAction?: () => void;
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
}: ConfirmActionProps) {
  const { title, description, actionBtnText } = dialogText[actionType];
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
          <AlertDialogAction onClick={confirmAction}>
            {actionBtnText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
