import { clsx } from "clsx";
import { Switch as CoreSwitch } from "../../core/components/switch";
import { Description } from "../../helpers/Description";
import { HelperText } from "../../helpers/HelperText";
import Label from "../Label/Label";
import { SwitchProps } from "./SwitchProps";

export const Switch = ({
  classes,
  label,
  order = "ltr",
  description,
  helperText,
  isError,
  alignment = "normal",
  ...props
}: SwitchProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-1",
        {
          "opacity-50": props.disabled,
        },
        { "w-full": alignment === "spaced" },
        classes?.wrapper
      )}
    >
      <div
        className={clsx(
          "flex gap-2 items-center",
          { "justify-between w-full": alignment === "spaced" },
          classes?.switchWrapper
        )}
      >
        <CoreSwitch
          id={props.id}
          {...props}
          className={clsx(
            { "order-1": order === "ltr" },
            { "order-2": order === "rtl" },
            { "ring-1 ring-destructive": isError },
            props?.className
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

export default Switch;
