import { CheckedState } from "@radix-ui/react-checkbox";
import { clsx } from "clsx";
import { Checkbox, CheckboxVariants, Label } from "../../atoms";
import { Description } from "../../helpers/Description";
import { HelperText } from "../../helpers/HelperText";
import { Sizes } from "../../interfaces";
import { CheckboxGroupProps, CheckboxOption } from "./CheckboxGroupProps";

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
  const updateCheckboxChildren = (option: CheckboxOption, state: boolean) => {
    const copy = { ...option };
    copy.checked = state;
    copy.onCheckedChange?.(state);
    if (!!copy?.options?.length) {
      copy.options = copy.options.map((opt) => {
        if (!opt.disabled) {
          opt.checked = state;
          opt.onCheckedChange?.(state);
          if (!!opt.options?.length) {
            const updatedChildren = updateCheckboxChildren(opt, state);
            Object.assign(opt, updatedChildren);
          }
        }
        return opt;
      });
    }
    return copy;
  };

  const verifyAllChildrenState = (parent: CheckboxOption): boolean => {
    if (!parent.options?.length)
      return !!parent?.disabled || !!parent.checked || false;
    const allChecked = parent.options.every((opt) => {
      return verifyAllChildrenState(opt);
    });
    return allChecked;
  };

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

  const updateFinalOptions = (
    options: CheckboxOption[],
    parentId: string,
    updatedNestedOptions: CheckboxOption[]
  ): CheckboxOption[] => {
    return options.map((opt) => {
      if (opt.options?.find((o) => o.id === parentId)) {
        return {
          ...opt,
          options: updatedNestedOptions,
        };
      }
      if (!!opt.options?.length) {
        return {
          ...opt,
          options: updateFinalOptions(
            opt.options,
            parentId,
            updatedNestedOptions
          ),
        };
      }
      return opt;
    });
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

  const backtrackParentAndUpdate = (path: CheckboxOption[]) => {
    for (let i = path.length - 1; i >= 0; i--) {
      const parent = path[i];
      const allChildrenChecked = verifyAllChildrenState(parent);
      parent.checked = allChildrenChecked;
      parent.onCheckedChange?.(allChildrenChecked);
    }
  };

  const findParentPath = (
    options: CheckboxOption[],
    targetId: string,
    path: CheckboxOption[] = []
  ): CheckboxOption[] | null => {
    for (const option of options) {
      if (option.id === targetId) {
        return [...path, option];
      }
      if (!!option.options?.length) {
        const result = findParentPath(option.options, targetId, [
          ...path,
          option,
        ]);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    option: CheckboxOption
  ) => {
    if (e?.key === "Space") {
      let opts = [...ogOptions];
      let target = opts.findIndex((opt) => opt.id === option.id);
      opts[target].checked = !opts[target].checked;
      onChange?.(opts);
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
            onKeyDown={(e) => handleKeyDown(e, option)}
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
