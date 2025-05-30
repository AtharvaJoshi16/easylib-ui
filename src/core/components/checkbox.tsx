import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";

import { CheckboxVariants } from "@/atoms/Checkbox/CheckboxProps";
import { Colors, Sizes } from "@/interfaces";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { CheckboxVariantProps, checkboxVariants } from "../variants/checkbox";

export interface CoreCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    CheckboxVariantProps {
  color?: Colors;
  size?: Sizes;
  checkIcon?: React.JSX.Element;
  variant?: CheckboxVariants;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CoreCheckboxProps
>(
  (
    {
      className,
      color = Colors.Primary,
      checkIcon,
      variant = CheckboxVariants.Contained,
      size = Sizes.Default,
      ...props
    },
    ref
  ) => (
    <CheckboxPrimitive.Root
      ref={ref}
      {...props}
      className={cn(
        checkboxVariants({
          variant,
          color,
          size,
        }),
        className
      )}
    >
      <CheckboxPrimitive.Indicator className={cn("text-current")}>
        {checkIcon ?? (
          <Check
            className={clsx("m-auto", {
              "w-2 h-2": size === Sizes.Small,
              "w-3 h-3": size === Sizes.Default,
              "w-4 h-4": size === Sizes.Medium,
              "w-5 h-5": size === Sizes.Large,
            })}
            strokeWidth={3}
          />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
