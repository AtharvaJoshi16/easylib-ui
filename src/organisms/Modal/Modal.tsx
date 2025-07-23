import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/core/components/dialog";
import { ModalProps } from "./ModalProps";

export const Modal = ({
  slotProps,
  trigger,
  content,
  header,
  footer,
  ...props
}: ModalProps) => {
  return (
    <Dialog {...props}>
      <DialogTrigger {...slotProps?.trigger}>{trigger}</DialogTrigger>
      <DialogContent {...slotProps?.content}>
        <DialogHeader {...slotProps?.header}>{header}</DialogHeader>
        {content}
        <DialogFooter {...slotProps?.footer}>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
