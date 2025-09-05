import { cva, VariantProps } from "class-variance-authority";

export const colors = cva(
  "flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:text-sm file:font-worksans-medium placeholder:text-slate-500 file:rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 file:cursor-pointer",
  {
    variants: {
      color: {
        primary: "file:text-primary file:bg-primary/10",
        secondary: "file:text-secondary file:bg-secondary/10",
        success: "file:text-success file:bg-success/10",
        destructive: "file:text-destructive file:bg-destructive/10",
        warning: "file:text-warning file:bg-warning/10",
        gray: "file:text-gray file:bg-gray/10",
        dark: "file:text-dark file:bg-dark/10",
        light: "file:text-light file:bg-light/10",
        muted: "",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

export type InputVariantProps = VariantProps<typeof colors>;
