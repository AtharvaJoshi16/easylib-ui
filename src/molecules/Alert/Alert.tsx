import {
  AlertDescription,
  AlertTitle,
  Alert as CoreAlert,
} from "@/core/components/alert";
import clsx from "clsx";
import { AlertProps, AlertVariants } from "./AlertProps";

export const Alert = ({
  title,
  description,
  slots,
  variant = AlertVariants.Primary,
  className,
}: AlertProps) => {
  return (
    <CoreAlert
      {...slots?.alert}
      className={clsx(className ?? slots?.alert)}
      variant={variant}
    >
      <AlertTitle {...slots?.title}>{title}</AlertTitle>
      {description && (
        <AlertDescription {...slots?.description}>
          {description}
        </AlertDescription>
      )}
    </CoreAlert>
  );
};
