import { clsx } from "clsx";
import {
  CircleCheckBig,
  CircleX,
  Info,
  Loader2,
  LucideProps,
  TriangleAlert,
  X,
} from "lucide-react";
import { JSX } from "react";
import { Button, ButtonVariants } from "../../atoms";
import { ButtonSizes } from "../../atoms/Button";
import {
  AlertDescription,
  AlertTitle,
  Alert as CoreAlert,
} from "../../core/components/alert";
import { Colors } from "../../interfaces";
import { AlertProps } from "./AlertProps";

const AlertIcon = ({
  autoAssignIcon,
  loading,
  icon,
  color,
  props,
}: {
  icon?: JSX.Element;
  autoAssignIcon?: boolean;
  loading?: boolean;
  color?: Colors;
  props?: LucideProps;
}) => {
  const iconProps = { ...props };
  iconProps.className = clsx("w-5 h-5", iconProps?.className);
  if (loading) {
    return (
      <Loader2
        {...iconProps}
        className={clsx("animate-spin", iconProps?.className)}
      />
    );
  }
  if (autoAssignIcon) {
    switch (color) {
      case Colors.Destructive:
        return <CircleX {...iconProps} />;
      case Colors.Success:
        return <CircleCheckBig {...iconProps} />;
      case Colors.Warning:
        return <TriangleAlert {...iconProps} />;
      default:
        return icon ?? <Info {...iconProps} />;
    }
  }
  return icon;
};

export const Alert = ({
  title,
  description,
  slots,
  color = Colors.Primary,
  className,
  onClose,
  autoAssignIcon = true,
  loading = false,
  icon,
}: AlertProps) => {
  return (
    <CoreAlert
      {...slots?.alert}
      className={clsx("relative", className ?? slots?.alert)}
      color={color}
    >
      <Button
        variant={ButtonVariants.Text}
        className="absolute right-1 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8"
        color={color}
        size={ButtonSizes.Icon}
        onClick={onClose}
      >
        <X />
      </Button>
      <div className="flex gap-4 items-center">
        <AlertIcon
          autoAssignIcon={autoAssignIcon}
          loading={loading}
          color={color}
          icon={icon}
          props={slots?.icon}
        />
        <div className="flex flex-col">
          <AlertTitle {...slots?.title}>{title}</AlertTitle>
          {description && (
            <AlertDescription {...slots?.description}>
              {description}
            </AlertDescription>
          )}
        </div>
      </div>
    </CoreAlert>
  );
};

export default Alert;
