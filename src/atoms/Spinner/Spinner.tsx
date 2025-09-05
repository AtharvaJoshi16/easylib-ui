import { Loader2 } from "lucide-react";
import { spinnerVariants } from "../../core/variants/spinner";
import { cn } from "../../lib/utils";
import { SpinnerProps } from "./SpinnerProps";

export const Spinner = ({ color, size, className, ...props }: SpinnerProps) => {
  return (
    <Loader2
      {...props}
      className={cn(spinnerVariants({ color, size }), className)}
      width={props.width ?? undefined}
      height={props.height ?? undefined}
    />
  );
};

export default Spinner;
