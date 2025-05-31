import * as React from "react";

import { Colors, Sizes } from "@/interfaces";
import { cn } from "@/lib/utils";
import { ChipVariants } from "@/molecules/Chip/ChipProps";
import { badgeVariants, BadgeVariants } from "../variants/badge";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BadgeVariants {
  variant?: ChipVariants;
  color?: Colors;
  size?: Sizes;
}

function Badge({ className, variant, color, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, color, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
