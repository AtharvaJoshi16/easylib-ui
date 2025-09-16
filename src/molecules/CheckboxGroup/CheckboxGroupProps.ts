import { CheckboxProps, CheckboxVariants, LabelProps } from "../../atoms";
import { Alignments, Orders } from "../../atoms/Checkbox/CheckboxProps";
import { Colors, Sizes } from "../../interfaces";
import { Orientation } from "../../interfaces/Orientations";

export interface CheckboxOptions extends CheckboxProps {
  options?: CheckboxOptions[];
}

export interface CheckboxGroupProps {
  options: CheckboxOptions[];
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
