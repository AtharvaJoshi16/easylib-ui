import { CheckboxOption } from "./CheckboxGroupProps";

export const verifyAllChildrenState = (parent: CheckboxOption): boolean => {
  if (!parent.options?.length)
    return !!parent?.disabled || !!parent.checked || false;
  const allChecked = parent.options.every((opt) => {
    return verifyAllChildrenState(opt);
  });
  return allChecked;
};

export const findParentPath = (
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

export const backtrackParentAndUpdate = (path: CheckboxOption[]) => {
  for (let i = path.length - 1; i >= 0; i--) {
    const parent = path[i];
    const allChildrenChecked = verifyAllChildrenState(parent);
    parent.checked = allChildrenChecked;
    parent.onCheckedChange?.(allChildrenChecked);
  }
};

export const updateCheckboxChildren = (
  option: CheckboxOption,
  state: boolean
) => {
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

export const updateFinalOptions = (
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
