import { Input } from "@/core/components/input";
import { LabelProps } from "@radix-ui/react-label";
import { JSX } from "react";

export interface TextfieldProps extends React.ComponentProps<typeof Input> {
  classes?: {
    wrapper?: string;
    startIconWrapper?: string;
    endIconWrapper?: string;
    helperText?: string;
  };
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  isError?: boolean;
  helperText?: string;
  label?: LabelProps;
}
