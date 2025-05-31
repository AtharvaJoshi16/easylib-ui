import { Textarea } from "@/core/components/textarea";
import { LabelProps } from "@radix-ui/react-label";

export interface TextAreaProps extends React.ComponentProps<typeof Textarea> {
  label?: LabelProps;
  classes?: {
    wrapper?: string;
    helperText?: string;
    description?: string;
  };
  isError?: boolean;
  description?: React.ReactNode;
  helperText?: React.ReactNode;
}
