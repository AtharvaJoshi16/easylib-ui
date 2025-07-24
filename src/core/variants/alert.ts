import { cva, VariantProps } from "class-variance-authority";

export const alertVariants = cva(
  "relative w-full rounded-lg border-2 px-4 py-3",
  {
    variants: {
      variant: {
        primary: "border-primary bg-primary/20 text-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export type AlertVariantProps = VariantProps<typeof alertVariants>;
