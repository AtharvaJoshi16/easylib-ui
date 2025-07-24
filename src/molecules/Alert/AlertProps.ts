import { CoreAlertProps } from "@/core/components/alert";
import { Colors } from "@/interfaces";

export interface AlertProps {
  slots?: {
    alert?: CoreAlertProps;
    title?: React.HTMLAttributes<HTMLHeadingElement>;
    description?: React.HTMLAttributes<HTMLParagraphElement>;
  };
  title: string;
  description?: string;
  className?: string;
  variant?: AlertVariants;
}

export enum AlertVariants {
  Primary = Colors.Primary,
  Secondary = Colors.Secondary,
  Destructive = Colors.Destructive,
  Success = Colors.Success,
  Gray = Colors.Gray,
  Warning = Colors.Warning,
}
