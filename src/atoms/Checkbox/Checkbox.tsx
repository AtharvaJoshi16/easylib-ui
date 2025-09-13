import { clsx } from "clsx";
import { Checkbox as CoreCheckbox } from "../../core/components/checkbox";
import { Description } from "../../helpers/Description";
import { HelperText } from "../../helpers/HelperText";
import Label from "../Label/Label";
import { CheckboxProps } from "./CheckboxProps";

export const Checkbox = ({
  label,
  isError,
  description,
  helperText,
  className,
  classes,
  order = "ltr",
  alignment = "normal",
  ...props
}: CheckboxProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-1",
        {
          "opacity-50": props.disabled,
        },
        classes?.wrapper
      )}
    >
      <div
        className={clsx(
          "flex gap-2 items-center",
          {
            "gap-1": alignment === "normal",
          },
          {
            "justify-between": alignment === "spaced",
          },
          classes?.checkboxWrapper
        )}
      >
        <CoreCheckbox
          id={props.id}
          {...props}
          className={clsx(
            { "border-destructive": isError },
            { "order-1": order === "ltr" },
            { "order-2": order === "rtl" },
            className
          )}
        />
        <Label
          htmlFor={props.id}
          {...label}
          className={clsx(
            { "order-2": order === "ltr" },
            { "order-1": order === "rtl" },
            label?.className
          )}
        />
      </div>
      {description && !isError && (
        <Description
          className={classes?.description}
          description={description}
        />
      )}
      {isError && (
        <HelperText className={classes?.helperText} helperText={helperText} />
      )}
    </div>
  );
};

export default Checkbox;
