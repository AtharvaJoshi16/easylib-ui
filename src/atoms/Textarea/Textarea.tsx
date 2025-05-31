import { Label } from "@/core/components/label";
import { Textarea as CoreTextArea } from "@/core/components/textarea";
import clsx from "clsx";
import { TextAreaProps } from "./TextareaProps";
export const Textarea = ({
  label,
  classes,
  description,
  helperText,
  isError,
  ...props
}: TextAreaProps) => {
  return (
    <div className={clsx("flex flex-col gap-1", classes?.wrapper)}>
      {label && (
        <Label
          {...label}
          htmlFor={props.id}
          className={clsx("pl-1", label?.className)}
        />
      )}
      <CoreTextArea
        {...props}
        className={clsx({ "border-destructive": isError }, props?.className)}
      />
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

export default Textarea;
