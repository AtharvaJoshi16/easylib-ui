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
  const updateCheckboxChildren = (option: CheckboxOptions, state: boolean) => {
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

  const handleCheckedChange = (
    option: CheckboxOptions,
    currOptions: CheckboxOptions[],
    selected: CheckedState
  ) => {
    const optsCopy = [...currOptions];
    optsCopy.map((opt) => {
      if (opt.id === option.id) {
        const updatedOption = updateCheckboxChildren(opt, !!selected);
        Object.assign(opt, updatedOption);
        opt.options && handleCheckedChange(opt, opt.options, !!selected);
      }
    });
    return optsCopy;
  };

  const updateFinalOptions = (
    options: CheckboxOptions[],
    parentId: string,
    updatedNestedOptions: CheckboxOptions[]
  ): CheckboxOptions[] => {
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
    option: CheckboxOptions,
    options: CheckboxOptions[],
    state: boolean
  ) => {
    const finalOptions = handleCheckedChange(option, options, state);
    const updatedFinalOptions = updateFinalOptions(
      ogOptions,
      option.id!,
      finalOptions
    );
    console.log(findParentPath(updatedFinalOptions, option.id!));
    onChange?.(updatedFinalOptions);
  };

  const findParentPath = (
    options: CheckboxOptions[],
    targetId: string,
    path: string[] = []
  ): string[] => {
    for (const option of options) {
      if (option.id === targetId) {
        return [...path, option.id!];
      }
      if (!!option.options?.length) {
        const result = findParentPath(option.options, targetId, [
          ...path,
          option.id!,
        ]);
        if (result.length) {
          return result;
        }
      }
    }
    return path;
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    option: CheckboxOptions
  ) => {
    if (e?.key === "Space") {
      let opts = [...ogOptions];
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
            onCheckedChange={(state) =>
              handleFinalCheckedChange(option, options, !!state)
            }
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
