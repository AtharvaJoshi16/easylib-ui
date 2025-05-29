import { Button as CoreButton } from "@/core/components/button";
import clsx from "clsx";
import { Loader2 } from "lucide-react";
import { ButtonColors, ButtonProps, ButtonVariants } from "./ButtonProps";

export const Button = ({
  variant = ButtonVariants.Contained,
  color = ButtonColors.Primary,
  loading = false,
  children,
  startIcon,
  endIcon,
  loader,
  alignment = "center",
  ...props
}: ButtonProps) => {
  const hasIcon = startIcon || endIcon;
  return (
    <CoreButton
      {...props}
      variant={variant}
      color={color}
      className={clsx(
        { "flex items-center gap-2": loading || hasIcon },
        { "justify-between": alignment === "spaced" && hasIcon },
        { "justify-center": alignment === "center" && hasIcon },
        props.className
      )}
      disabled={props.disabled || loading}
    >
      {loading && (loader ?? <Loader2 className="animate-spin" />)}
      {!loading && startIcon}
      {children}
      {!loading && endIcon}
    </CoreButton>
  );
};

export default Button;
