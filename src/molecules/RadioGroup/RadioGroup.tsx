import { clsx } from "clsx";
import { Label } from "../../atoms";
import {
  RadioGroup as CoreRadioGroup,
  RadioGroupItem as CoreRadioGroupItem,
} from "../../core/components/radio-group";
import { Description } from "../../helpers/Description";
import { HelperText } from "../../helpers/HelperText";
import { RadioGroupProps } from "./RadioGroupProps";
export const RadioGroup = ({
  options,
  label,
  description,
  helperText,
  classes,
  isError,
  orientation,
  ...props
}: RadioGroupProps) => {
  return (
    <div className={clsx("flex flex-col gap-2", classes?.wrapper)}>
      <Label
        {...label}
        htmlFor={props.id}
        className={clsx("pl-1", label?.className)}
      />
      <CoreRadioGroup
        {...props}
        orientation={orientation}
        className={clsx(
          "flex flex-col ml-2",
          {
            "flex-row items-center justify-between":
              orientation === "horizontal",
          },
          props?.className
        )}
      >
        {options.map((option) => (
          <div
            className={clsx(
              "flex items-center gap-2 w-fit",
              classes?.itemWrapper
            )}
            key={option.id}
          >
            <CoreRadioGroupItem
              {...option}
              id={option.id}
              value={option.value}
              variant={props.variant}
              color={props.color}
              size={props.size}
              className={clsx(
                { "data-[state=checked]:border-destructive": isError },
                option.className
              )}
            />
            <Label {...option.label} htmlFor={option.id} />
          </div>
        ))}
      </CoreRadioGroup>
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

export default RadioGroup;
