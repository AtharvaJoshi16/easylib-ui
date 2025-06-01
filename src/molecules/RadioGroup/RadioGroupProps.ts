import { LabelProps } from "@/atoms";
import {
  CoreRadioGroupItemProps,
  CoreRadioGroupProps,
} from "@/core/components/radio-group";
import { Colors, Sizes } from "@/interfaces";

export interface RadioGroupProps extends CoreRadioGroupProps {
  options: RadioGroupItemProps[];
  variant?: RadioGroupVariants;
  color?: Colors;
  size?: Sizes;
  label?: LabelProps;
  description?: React.ReactNode;
  helperText?: React.ReactNode;
  isError?: boolean;
  classes?: {
    description?: string;
    helperText?: string;
    wrapper?: string;
    itemWrapper?: string;
  };
}

export enum RadioGroupVariants {
  Default = "default",
  Inverse = "inverse",
}

export interface RadioGroupItemProps extends CoreRadioGroupItemProps {
  id: string;
  value: string;
  label: LabelProps;
}
