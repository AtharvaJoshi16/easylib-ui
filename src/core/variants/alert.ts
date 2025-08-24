import { cva, VariantProps } from "class-variance-authority";

export const alertVariants = cva(
  "relative w-full rounded-lg border-2 px-4 py-3",
  {
    variants: {
      color: {
        primary: "border-primary bg-primary/20 text-primary-dark",
        secondary: "border-secondary bg-secondary/20 text-secondary-dark",
        destructive:
          "border-destructive bg-destructive/20 text-destructive-dark",
        warning: "border-warning bg-warning/20 text-warning-dark",
        success: "border-success bg-success/20 text-success-dark",
        gray: "border-gray bg-gray/20 text-gray-dark",
        light: "border-light bg-light/20 text-light",
        dark: "border-dark bg-dark/20 text-dark-dark",
        muted: "",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

export type AlertVariantProps = VariantProps<typeof alertVariants>;
