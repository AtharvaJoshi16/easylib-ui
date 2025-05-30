import { CoreCheckboxProps } from "@/core/components/checkbox";
import { Colors, Sizes } from "@/interfaces";
import { LabelProps } from "@radix-ui/react-label";

export interface CheckboxProps extends CoreCheckboxProps {
  classes?: {
    wrapper?: string;
    checkboxWrapper?: string;
    description?: string;
    helperText?: string;
  };
  label: LabelProps;
  color?: Colors;
  description?: React.ReactNode;
  helperText?: React.ReactNode;
  isError?: boolean;
  order?: "rtl" | "ltr";
  alignment?: "normal" | "spaced";
  size?: Sizes;
  variant?: CheckboxVariants;
}

export enum CheckboxVariants {
  Contained = "contained",
  Outlined = "outlined",
}
