import {
  DialogContentProps,
  DialogDescriptionProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@radix-ui/react-dialog";
import { ButtonProps } from "../../atoms";

export interface ModalProps extends DialogProps {
  slotProps?: {
    trigger?: DialogTriggerProps;
    content?: DialogContentProps;
    title?: DialogTitleProps;
    description?: DialogDescriptionProps;
    header?: React.HTMLAttributes<HTMLDivElement>;
    footer?: React.HTMLAttributes<HTMLDivElement>;
  };
  trigger: React.ReactNode;
  content: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  showCloseIcon?: boolean;
  onClose?: () => void;
  actions?: {
    cta1?: ButtonProps;
    cta2?: ButtonProps;
  };
}
