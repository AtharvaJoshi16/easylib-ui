import { JSX } from "react";
import { Input } from "../../core/components/input";
import { LabelProps } from "../Label/LabelProps";

export interface TextfieldProps extends React.ComponentProps<typeof Input> {
  classes?: {
    wrapper?: string;
    inputWrapper?: string;
    startIconWrapper?: string;
    endIconWrapper?: string;
    helperText?: string;
    description?: string;
  };
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  isError?: boolean;
  helperText?: React.ReactNode;
  description?: React.ReactNode;
  label?: LabelProps;
}
