import { CoreSwitchProps } from "@/core/components/switch";
import { Sizes } from "@/interfaces";
import { LabelProps } from "../Label/LabelProps";

export interface SwitchProps extends CoreSwitchProps {
  classes?: {
    wrapper?: string;
    switchWrapper?: string;
    description?: string;
    helperText?: string;
  };
  label: LabelProps;
  order?: "rtl" | "ltr";
  alignment?: "normal" | "spaced";
  size?: Sizes;
  description?: React.ReactNode;
  helperText?: React.ReactNode;
  isError?: boolean;
}
