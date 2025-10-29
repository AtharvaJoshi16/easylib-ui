import { CheckedState } from "@radix-ui/react-checkbox";
import { clsx } from "clsx";
import { Checkbox, CheckboxVariants, Label } from "../../atoms";
import { Description } from "../../helpers/Description";
import { HelperText } from "../../helpers/HelperText";
import { Sizes } from "../../interfaces";
import { CheckboxGroupProps, CheckboxOption } from "./CheckboxGroupProps";
import {
  backtrackParentAndUpdate,
  findParentPath,
  updateCheckboxChildren,
  updateFinalOptions,
} from "./CheckboxGroupUtils";

export const CheckboxGroup = ({
  variant = CheckboxVariants.Contained,
  color,
  size = Sizes.Default,
  options: ogOptions,
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
    option: CheckboxOption,
    currOptions: CheckboxOption[],
    parent: CheckboxOption,
    selected: CheckedState
  ) => {
    const optsCopy = [...currOptions];
    optsCopy.map((opt) => {
      if (opt.id === option.id) {
        const updatedOption = updateCheckboxChildren(opt, !!selected);
        Object.assign(opt, updatedOption);
        opt.options &&
          handleCheckedChange(opt, opt.options, parent, !!selected);
      }
    });
    return optsCopy;
  };

  const handleFinalCheckedChange = (
    option: CheckboxOption,
    options: CheckboxOption[],
    parent: CheckboxOption,
    state: boolean
  ) => {
    const finalOptions = handleCheckedChange(option, options, parent, state);
    const updatedFinalOptions = updateFinalOptions(
      ogOptions,
      option.id!,
      finalOptions
    );
    const parentPaths = findParentPath(ogOptions, option.id!);
    backtrackParentAndUpdate(parentPaths!);
    onChange?.(updatedFinalOptions);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    option: CheckboxOption,
    options: CheckboxOption[],
    parent: CheckboxOption,
    state: boolean
  ) => {
    if (e?.key === "Space") {
      handleFinalCheckedChange(option, options, parent, state);
      option?.onKeyDown?.(e);
    }
  };

  const renderOptions: any = (
    options: CheckboxOption[],
    parent: CheckboxOption
  ) => {
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
            onCheckedChange={(state) =>
              handleFinalCheckedChange(option, options, parent, !!state)
            }
            onKeyDown={(e) =>
              handleKeyDown(
                e,
                option,
                options,
                parent,
                !option?.checked as boolean
              )
            }
          />
          {option.options && renderOptions(option.options, option)}
        </div>
      );
    });
  };
  return (
    <div className={clsx("flex flex-col gap-2", classes?.wrapper)}>
      <Label {...label} />
      <div
        className={clsx(
          "flex",
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
        {renderOptions(ogOptions)}
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
