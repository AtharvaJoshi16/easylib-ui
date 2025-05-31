import { cva, VariantProps } from "class-variance-authority";

export const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-input",
  {
    variants: {
      color: {
        primary: "data-[state=checked]:bg-primary",
        secondary: "data-[state=checked]:bg-secondary",
        success: "data-[state=checked]:bg-success",
        destructive: "data-[state=checked]:bg-destructive",
        warning: "data-[state=checked]:bg-warning",
        gray: "data-[state=checked]:bg-gray",
        dark: "data-[state=checked]:bg-dark",
        light: "data-[state=checked]:bg-light",
      },
      size: {
        default: "h-5 w-10",
        sm: "h-4 w-8",
        md: "h-6 w-12",
        lg: "h-7 w-14",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "default",
    },
  }
);

export type SwitchVariantProps = VariantProps<typeof switchVariants>;
