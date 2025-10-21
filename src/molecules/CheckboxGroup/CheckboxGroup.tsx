import { CheckedState } from "@radix-ui/react-checkbox";
import { clsx } from "clsx";
import { Checkbox, CheckboxVariants, Label } from "../../atoms";
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
    option: CheckboxOptions,
    selected: CheckedState
  ) => {
    return options?.map((opt) => {
      if (opt.id === option.id) {
        const copy = { ...opt };
        copy.checked = !!selected;
        copy?.onCheckedChange?.(!!selected);
        if (!!copy.options) {
          copy.options = copy.options.map((nestedOpt) =>
            handleCheckedChange(nestedOpt, !!selected)
          );
        }
      } else {
      }
    });
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    option: CheckboxOptions
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
    return options?.map((option) => {
      return (
        <div className={"flex flex-col mx-4 my-1"} key={option.id}>
          <Checkbox
            {...option}
            classes={{
              wrapper: clsx(
                { "mb-2": !!option.options?.length },
                option.className
              ),
              ...option?.classes,
            }}
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
      );
    });
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
