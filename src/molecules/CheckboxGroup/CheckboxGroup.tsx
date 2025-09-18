import { CheckedState } from "@radix-ui/react-checkbox";
import { clsx } from "clsx";
import { Checkbox, CheckboxProps, CheckboxVariants, Label } from "../../atoms";
import { Description } from "../../helpers/Description";
import { HelperText } from "../../helpers/HelperText";
import { Sizes } from "../../interfaces";
import { CheckboxGroupProps, CheckboxOptions } from "./CheckboxGroupProps";

export const CheckboxGroup = ({
  variant = CheckboxVariants.Contained,
  color,
  size = Sizes.Default,
  options,
  label,
  classes,
  order = "ltr",
  isError,
  alignment = "normal",
  orientation = "vertical",
  description,
  helperText,
  onChange,
}: CheckboxGroupProps) => {
  const handleCheckedChange = (
    option: CheckboxProps,
    selected: CheckedState
  ) => {
    let opts = [...options];
    let target = opts.findIndex((opt) => opt.id === option.id);
    opts[target].checked = !!selected;
    onChange?.(opts);
    option?.onCheckedChange?.(selected);
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    option: CheckboxProps
  ) => {
    if (e?.key === "Space") {
      let opts = [...options];
      let target = opts.findIndex((opt) => opt.id === option.id);
      opts[target].checked = !opts[target].checked;
      onChange?.(opts);
      option?.onKeyDown?.(e);
    }
  };

  const renderOptions: any = (options: CheckboxOptions[]) => {
    return options?.map((option) => (
      <div
        className={clsx("flex flex-col", {
          "mx-4 my-1": !option?.options?.length,
        })}
        key={option.id}
      >
        <Checkbox
          {...option}
          key={option.id}
          color={color}
          variant={variant}
          size={size}
          order={order}
          alignment={alignment}
          onCheckedChange={(state) => handleCheckedChange(option, state)}
          onKeyDown={(e) => handleKeyDown(e, option)}
        />
        {option.options && renderOptions(option.options)}
      </div>
    ));
  };
  return (
    <div className={clsx("flex flex-col gap-2", classes?.wrapper)}>
      <Label {...label} />
      <div
        className={clsx(
          "flex ml-2",
          {
            "flex-row justify-between items-center":
              orientation === "horizontal",
          },
          {
            "flex-col gap-2": orientation === "vertical",
          },
          {
            "gap-3": [Sizes.Medium, Sizes.Large].includes(size),
          },
          classes?.optionsWrapper
        )}
      >
        {renderOptions(options)}
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

export default CheckboxGroup;
