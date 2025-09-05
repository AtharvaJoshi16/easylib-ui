import { LucideProps } from "lucide-react";
import { SpinnerVariantProps } from "../../core/variants/spinner";
import { Colors, Sizes } from "../../interfaces";

export interface SpinnerProps extends LucideProps, SpinnerVariantProps {
  color?: Colors;
  size?: Sizes;
}
