import { CoreCheckboxProps } from "@/core/components/checkbox";
import { Colors, Sizes } from "@/interfaces";
import { LabelProps } from "../Label/LabelProps";

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
  order?: Orders;
  alignment?: Alignments;
  size?: Sizes;
  variant?: CheckboxVariants;
}

export type Orders = "rtl" | "ltr";
export type Alignments = "normal" | "spaced";

export enum CheckboxVariants {
  Contained = "contained",
  Outlined = "outlined",
}
