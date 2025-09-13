import { cva, VariantProps } from "class-variance-authority";

export const trackVariants = cva(
  "relative grow overflow-hidden rounded-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full",
  {
    variants: {
      color: {
        primary: "bg-primary/20",
        secondary: "bg-secondary/20",
        destructive: "bg-destructive/20",
        warning: "bg-warning/20",
        success: "bg-success/20",
        gray: "bg-gray/20",
        light: "bg-white/20",
        dark: "bg-dark/20",
        muted: "",
      },
      size: {
        default:
          "data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5",
        sm: "data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1",
        md: "data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2",
        lg: "data-[orientation=horizontal]:h-3 data-[orientation=vertical]:w-3",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "default",
    },
  }
);

export const thumbVariants = cva(
  "cursor-pointer block border bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
  {
    variants: {
      color: {
        primary: "border-primary",
        secondary: "border-secondary",
        destructive: "border-destructive",
        warning: "border-warning",
        success: "border-success",
        gray: "border-gray",
        light: "border-dark",
        dark: "border-dark",
        muted: "",
      },
      variant: {
        default: "rounded-full",
        square: "rounded-md",
        stick: "rounded-sm",
      },
      size: {
        default: "w-4 h-4",
        sm: "w-3 h-3",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
      orientation: {
        horizontal: "",
        vertical: "",
      },
    },
    defaultVariants: {
      color: "primary",
      variant: "default",
      size: "default",
      orientation: "horizontal",
    },
    compoundVariants: [
      {
        variant: "stick",
        size: "default",
        orientation: "horizontal",
        className: "w-2 h-4",
      },
      {
        variant: "stick",
        size: "sm",
        orientation: "horizontal",
        className: "w-1.5 h-3",
      },
      {
        variant: "stick",
        size: "md",
        orientation: "horizontal",
        className: "w-2.5 h-5 rounded-lg",
      },
      {
        variant: "stick",
        size: "lg",
        orientation: "horizontal",
        className: "w-3 h-6 rounded-lg",
      },
      {
        variant: "stick",
        size: "default",
        orientation: "vertical",
        className: "w-4 h-2",
      },
      {
        variant: "stick",
        size: "sm",
        orientation: "vertical",
        className: "w-3 h-1.5",
      },
      {
        variant: "stick",
        size: "md",
        orientation: "vertical",
        className: "w-5 h-2.5 rounded-lg",
      },
      {
        variant: "stick",
        size: "lg",
        orientation: "vertical",
        className: "w-6 h-3 rounded-lg",
      },
      {
        variant: "square",
        size: "default",
        className: "rounded-sm",
      },
      {
        variant: "square",
        size: "sm",
        className: "rounded-md",
      },
      {
        variant: "square",
        size: "md",
        className: "rounded-md",
      },
      {
        variant: "square",
        size: "lg",
        className: "rounded-md",
      },
    ],
  }
);

export const rangeVariants = cva(
  "absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
  {
    variants: {
      color: {
        primary: "bg-primary",
        secondary: "bg-secondary",
        destructive: "bg-destructive",
        warning: "bg-warning",
        success: "bg-success",
        gray: "bg-gray",
        light: "bg-white",
        dark: "bg-dark",
        muted: "",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

export type SliderVariantProps = VariantProps<typeof trackVariants>;
