import Header from "./Header";
import Trigger from "./Trigger";
import Content from "./Content";
import Main from "./Main";
import Close from "./Close";

import { Dialog, DialogOverlay, DialogPortal } from "@/components/ui/dialog";

type ModalProps = {
  children: React.ReactNode;
  className?: { content?: string; trigger?: string; header?: string };
  triggerBtn?: string | React.ReactNode | undefined;
  headerText?: string | React.ReactNode;
  variant?: "basic" | "none" | "controlled" | "default";
  triggerVariant?:
    | "primary"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "none"
    | "default"
    | "reverse";
  description?: string;
  open?: boolean | undefined;
  isOpen?: (open: boolean) => void | undefined;
  triggerDisabled?: boolean;
};

/**
 * Reusable Modal component
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to be displayed within the Modal
 * @param {Object} [props.className] - Additional CSS classes to apply to the Modal components
 * @param {string|React.ReactNode} [props.triggerBtn] - The text or node to be displayed on the Trigger button
 * @param {string|React.ReactNode} [props.headerText] - The text or node to be displayed as the Header/Title
 * @param {"basic"|"none"|"controlled"|"default"} [props.variant="basic"] - The variant of the Modal
 * @param {"primary"|"outline"|"ghost"|"link"|"destructive"|"none"|"default"|"reverse"} [props.triggerVariant="none"] - The variant of the Trigger button
 * @param {string} [props.description] - The description of the Modal
 * @param {boolean} [props.open] - The open state of the Modal (for controlled variant)
 * @param {function} [props.isOpen] - The function to set the open state of the Modal (for controlled variant)
 * @returns {JSX.Element} A reusable Modal component with various configurations
 *
 * ********* VARIANT "default" *************
 * (defaults to this if variant is not specified in props)
 * - Basic structure and CSS predefined (flexible)
 * - Add in TriggerBtn for displayed text on Trigger
 * - Add headerText for displayed Header / Title Text in the opened Modal
 * - Children prop will usually contain at least Modal.Main (for main content of opened Modal),
 *   but can also contain other components like for example Modal.Footer
 *
 * ********* VARIANT "controlled" *************
 * - Same as "default", but with open and isOpen props (for controlled state) and also no triggerBtn
 *
 * ********* VARIANT "none" *************
 * - Comes without anything predefined, so will need to add all the Modal components as children prop
 */
function Modal({
  children,
  className,
  triggerBtn,
  headerText,
  triggerVariant = "none",
  triggerDisabled = false,
  variant = "basic",
  description,
  open = undefined,
  isOpen = undefined,
}: ModalProps): JSX.Element {
  // "none" Variant
  if (variant === "none") return <Dialog>{children}</Dialog>;

  // "default" Variant
  return (
    <Dialog
      open={variant === "controlled" ? open : undefined}
      onOpenChange={
        variant === "controlled"
          ? (value: boolean) => isOpen?.(value)
          : undefined
      }
    >
      {triggerBtn && (
        <Modal.Trigger
          disabled={triggerDisabled}
          className={className?.trigger}
          variant={triggerVariant}
        >
          {triggerBtn}
        </Modal.Trigger>
      )}
      <DialogPortal>
        <DialogOverlay className="z-10" />
        <Modal.Content description={description} className={className?.content}>
          <Modal.Header className={className?.header}>
            {headerText ?? "Title"}
          </Modal.Header>
          {children}
        </Modal.Content>
      </DialogPortal>
    </Dialog>
  );
}

Modal.Header = Header;
Modal.Trigger = Trigger;
Modal.Close = Close;
Modal.Content = Content;
Modal.Main = Main;

export default Modal;
