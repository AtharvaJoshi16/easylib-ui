import { SpinnerVariantProps } from "@/core/variants/spinner";
import { Colors, Sizes } from "@/interfaces";
import { LucideProps } from "lucide-react";

export interface SpinnerProps extends LucideProps, SpinnerVariantProps {
  color?: Colors;
  size?: Sizes;
}
