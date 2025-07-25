import { CoreAlertProps } from "@/core/components/alert";
import { Colors } from "@/interfaces";
import { LucideProps } from "lucide-react";
import { JSX } from "react";

export interface AlertProps {
  slots?: {
    alert?: CoreAlertProps;
    title?: React.HTMLAttributes<HTMLHeadingElement>;
    description?: React.HTMLAttributes<HTMLParagraphElement>;
    icon?: LucideProps;
  };
  title: string;
  description?: string;
  className?: string;
  color?: Colors;
  onClose?: () => void;
  icon?: JSX.Element;
  autoAssignIcon?: boolean;
  loading?: boolean;
}
