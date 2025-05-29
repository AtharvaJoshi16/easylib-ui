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
  ...props
}: TextfieldProps) => {
  return (
    <div className={clsx("flex flex-col gap-1", classes?.wrapper)}>
      {label && <Label {...label} className={clsx("pl-1", label?.className)} />}
      <div className="relative">
        <Input
          {...props}
          className={clsx(
            { "pl-10": startIcon },
            { "border-red-500": isError },
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
      <p className={clsx("text-slate-400 text-xs pl-1", classes?.helperText)}>
        {helperText}
      </p>
    </div>
  );
};

export default Textfield;
