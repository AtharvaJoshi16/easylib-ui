import clsx from "clsx";
import { X } from "lucide-react";
import { ButtonVariants } from "../../atoms";
import { ButtonSizes } from "../../atoms/Button";
import { Button } from "../../core/components/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../core/components/dialog";
import { Colors } from "../../interfaces";
import { ModalProps } from "./ModalProps";

export const Modal = ({
  slotProps,
  trigger,
  content,
  header,
  footer,
  actions,
  onClose,
  showCloseIcon = true,
  ...props
}: ModalProps) => {
  return (
    <Dialog {...props}>
      <DialogTrigger {...slotProps?.trigger}>{trigger}</DialogTrigger>
      <DialogContent {...slotProps?.content}>
        {showCloseIcon && onClose && (
          <Button
            className="absolute right-4 top-4 w-6 h-6"
            variant={ButtonVariants.Text}
            size={ButtonSizes.Icon}
            color={Colors.Dark}
            onClick={onClose}
          >
            <X />
          </Button>
        )}
        <DialogHeader
          {...slotProps?.header}
          className={clsx("w-full", slotProps?.header?.className, {
            "flex items-start justify-between": showCloseIcon,
          })}
        >
          {header}
        </DialogHeader>
        {content}
        <DialogFooter {...slotProps?.footer}>
          {footer}
          {actions && (
            <div className="flex items-center justify-end gap-2">
              {actions?.cta1 && <Button {...actions.cta1} />}
              {actions?.cta2 && <Button {...actions.cta2} />}
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
