import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { ButtonSizes } from "@/atoms/Button/ButtonProps";
import { Colors } from "@/interfaces";
import { cn } from "@/lib/utils";
import { ButtonVariantProps, buttonVariants } from "../variants/button";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean;
  color?: Colors;
  size?: ButtonSizes;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, children, color, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, color, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
