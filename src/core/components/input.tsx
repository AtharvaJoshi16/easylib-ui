import * as React from "react";

import { Colors } from "@/interfaces/Colors";
import { cn } from "@/lib/utils";
import { colors, InputVariantProps } from "../variants/input";

export interface InputProps
  extends React.ComponentProps<"input">,
    InputVariantProps {
  color?: Colors;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, color, ...props }, ref) => {
    return (
      <input
        className={cn(colors({ color }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
