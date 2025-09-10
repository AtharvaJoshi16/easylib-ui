import { Slider as CoreSlider } from "@/core/components/slider";
import { Description } from "@/helpers/Description";
import { HelperText } from "@/helpers/HelperText";
import clsx from "clsx";
import Label from "../Label";
import { SliderProps } from "./SliderProps";

export const Slider = ({
  label,
  isError = false,
  helperText,
  description,
  classes,
  ...props
}: SliderProps) => {
  return (
    <div className={clsx("flex flex-col gap-3 w-full", classes?.wrapper)}>
      {label && (
        <Label
          {...label}
          htmlFor={props.id}
          className={clsx("pl-1", label?.className)}
        />
      )}
      <CoreSlider {...props} isError={isError} />
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

export default Slider;
