import { Input } from "@/core/components/input";
import { Label } from "@/core/components/label";
import clsx from "clsx";
import { TextfieldProps } from "./TextfieldProps";

export const Textfield = ({
  classes,
  startIcon,
  endIcon,
  label,
  isError = false,
  helperText,
  description,
  ...props
}: TextfieldProps) => {
  return (
    <div className={clsx("flex flex-col gap-1", classes?.wrapper)}>
      {label && (
        <Label
          {...label}
          htmlFor={props.id}
          className={clsx("pl-1", label?.className)}
        />
      )}
      <div className={clsx("relative", classes?.inputWrapper)}>
        <Input
          {...props}
          className={clsx(
            { "pl-10": startIcon },
            { "border-destructive": isError },
            { "w-fit": ["date"].includes(props.type!) },
            props.className
          )}
        />
        {startIcon && (
          <span
            className={clsx(
              "absolute my-auto inset-y-0 inset-x-3 right-3 w-fit h-fit",
              classes?.startIconWrapper
            )}
          >
            {startIcon}
          </span>
        )}
        {endIcon && (
          <span
            className={clsx(
              "absolute my-auto inset-y-0 right-3 h-fit w-fit",
              classes?.endIconWrapper
            )}
          >
            {endIcon}
          </span>
        )}
      </div>
      {description && !isError && (
        <span className={clsx("text-xs pl-1 text-gray", classes?.description)}>
          {description}
        </span>
      )}
      {isError && (
        <span
          className={clsx("text-xs pl-1 text-destructive", classes?.helperText)}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Textfield;
