import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import clsx from "clsx";
import { Colors, Sizes } from "../../interfaces";
import { cn } from "../../lib/utils";
import { SwitchVariantProps, switchVariants } from "../variants/switch";

export interface CoreSwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    SwitchVariantProps {
  color?: Colors;
  size?: Sizes;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  CoreSwitchProps
>(
  (
    { className, color = Colors.Primary, size = Sizes.Default, ...props },
    ref
  ) => (
    <SwitchPrimitives.Root
      className={cn(switchVariants({ color, size }), className)}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={clsx(
          "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
          {
            "h-3 w-3 data-[state=checked]:translate-x-4": size === Sizes.Small,
          },
          {
            "h-4 w-4 data-[state=checked]:translate-x-5":
              size === Sizes.Default,
          },
          {
            "h-5 w-5 data-[state=checked]:translate-x-6": size === Sizes.Medium,
          },
          { "h-6 w-6 data-[state=checked]:translate-x-7": size === Sizes.Large }
        )}
      />
    </SwitchPrimitives.Root>
  )
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
