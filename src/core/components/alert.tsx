import * as React from "react";

import { cn } from "@/lib/utils";
import { AlertVariants } from "@/molecules/Alert/AlertProps";
import { AlertVariantProps, alertVariants } from "../variants/alert";

export interface CoreAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AlertVariantProps {
  variant?: AlertVariants;
}

const Alert = React.forwardRef<HTMLDivElement, CoreAlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("mb-1 font-medium", className)} {...props} />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
