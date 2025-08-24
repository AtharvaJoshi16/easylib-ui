import { cva, VariantProps } from "class-variance-authority";

export const spinnerVariants = cva("animate-spin", {
  variants: {
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      destructive: "text-destructive",
      warning: "text-warning",
      gray: "text-gray",
      dark: "text-dark",
      light: "text-light",
      muted: "",
    },
    size: {
      default: "h-8 w-8",
      sm: "h-6 w-6",
      md: "h-12 w-12",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "default",
  },
});

export type SpinnerVariantProps = VariantProps<typeof spinnerVariants>;
