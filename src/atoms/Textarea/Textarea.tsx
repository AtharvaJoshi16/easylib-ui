import { clsx } from "clsx";
import { Textarea as CoreTextArea } from "../../core/components/textarea";
import { Description } from "../../helpers/Description";
import { HelperText } from "../../helpers/HelperText";
import Label from "../Label/Label";
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

export default Textarea;
