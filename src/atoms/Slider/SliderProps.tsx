import { Colors, Sizes } from "@/interfaces";
import {
  SliderProps as RadixSliderProps,
  SliderRangeProps,
  SliderThumbProps,
  SliderTrackProps,
} from "@radix-ui/react-slider";
import { LabelProps } from "../Label";

export interface SliderProps extends RadixSliderProps {
  type: SliderTypes;
  color?: Colors;
  size?: Sizes;
  variant?: SliderVariants;
  label?: LabelProps;
  slots?: {
    track?: SliderTrackProps;
    range?: SliderRangeProps;
    thumb?: SliderThumbProps;
  };
  classes?: {
    wrapper?: string;
    helperText?: string;
    description?: string;
  };
  isError?: boolean;
  description?: React.ReactNode;
  helperText?: React.ReactNode;
}

export enum SliderTypes {
  Single = "single",
  Double = "double",
}

export enum SliderVariants {
  Default = "default",
  Square = "square",
  Stick = "stick",
}
