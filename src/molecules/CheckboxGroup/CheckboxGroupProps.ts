import { CheckboxProps, CheckboxVariants, LabelProps } from "../../atoms";
import { Alignments, Orders } from "../../atoms/Checkbox/CheckboxProps";
import { Colors, Sizes } from "../../interfaces";
import { Orientation } from "../../interfaces/Orientations";

export interface CheckboxOption extends CheckboxProps {
  options?: CheckboxOption[];
}

export interface CheckboxGroupProps {
  options: CheckboxOption[];
  label?: LabelProps;
  variant?: CheckboxVariants;
  alignment?: Alignments;
  orientation?: Orientation;
  order?: Orders;
  color?: Colors;
  size?: Sizes;
  isError?: boolean;
  classes?: {
    wrapper?: string;
    description?: string;
    helperText?: string;
    optionsWrapper?: string;
  };
  description?: React.ReactNode;
  helperText?: React.ReactNode;
  onChange?: (options: CheckboxProps[]) => void;
}
