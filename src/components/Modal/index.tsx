import Header from "./Header";
import Trigger from "./Trigger";
import Content from "./Content";
import Main from "./Main";
import Close from "./Close";

import { Dialog, DialogOverlay, DialogPortal } from "@/components/ui/dialog";

Modal.Header = Header;
Modal.Trigger = Trigger;
Modal.Close = Close;
Modal.Content = Content;
Modal.Main = Main;

type ModalProps = {
  children: React.ReactNode;
  className?: { content?: string; trigger?: string; header?: string };
  triggerBtn?: string | React.ReactNode;
  headerText?: string | React.ReactNode;
  variant?: "basic" | "none";
  triggerVariant?:
    | "primary"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "none";
  description?: string;
};

/* 
Reusable Modal component 
Comes in 2 main variants: "default" or "none"

********* VARIANT "default"  ************* 
(defaults to this if variant if not specified in props)

- Basic structure and CSS predefined (flexible)
- Add in TriggerBtn for displayed text on Trigger 
- Add headerText for displayed Header / Title Text in the opened Modal
- Children prop will usually contain atleast Modal.Main (for main content of opened Modal), 
  but can also contain other components like forexample Modal.Footer

********* VARIANT "none" *************
- Comes without anything predefined, so will need to add all the Modal components as children prop
*/

function Modal({
  children,
  className,
  triggerBtn,
  headerText,
  triggerVariant = "none",
  variant = "basic",
  description,
}: ModalProps) {
  // "none" Variant
  if (variant === "none") return <Dialog>{children}</Dialog>;

  // "default" Variant
  return (
    <Dialog>
      <Modal.Trigger className={className?.trigger} variant={triggerVariant}>
        {triggerBtn}
      </Modal.Trigger>
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

export default Modal;
