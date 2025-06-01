import { cva, VariantProps } from "class-variance-authority";

export const radioGroupItemVariants = cva(
  "aspect-square h-4 w-4 rounded-full border shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        inverse: "",
      },
      color: {
        primary: "border-primary text-primary",
        secondary: "border-secondary text-secondary",
        success: "border-success text-success",
        destructive: "border-destructive text-destructive",
        warning: "border-warning text-warning",
        gray: "border-gray text-gray",
        dark: "border-dark text-dark",
        light: "border-light text-light",
      },
      size: {
        default: "h-4 w-4",
        sm: "h-3 w-3",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    compoundVariants: [
      {
        variant: "inverse",
        color: "primary",
        className: "data-[state=checked]:bg-primary",
      },
      {
        variant: "inverse",
        color: "secondary",
        className: "data-[state=checked]:bg-secondary",
      },
      {
        variant: "inverse",
        color: "success",
        className: "data-[state=checked]:bg-success",
      },
      {
        variant: "inverse",
        color: "destructive",
        className: "data-[state=checked]:bg-destructive",
      },
      {
        variant: "inverse",
        color: "warning",
        className: "data-[state=checked]:bg-warning",
      },
      {
        variant: "inverse",
        color: "gray",
        className: "data-[state=checked]:bg-gray",
      },
      {
        variant: "inverse",
        color: "dark",
        className: "data-[state=checked]:bg-dark",
      },
      {
        variant: "inverse",
        color: "light",
        className: "data-[state=checked]:bg-light",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "primary",
      size: "default",
    },
  }
);

export const radioIconVariants = cva("h-auto w-auto", {
  variants: {
    variant: {
      default: "",
      inverse: "fill-white",
    },
    color: {
      primary: "",
      secondary: "",
      success: "",
      destructive: "",
      warning: "",
      gray: "",
      dark: "",
      light: "",
    },
    size: {
      default: "p-[2px]",
      sm: "p-[1px]",
      md: "p-[2px]",
      lg: "p-[3px]",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      color: "primary",
      className: "fill-primary",
    },
    {
      variant: "default",
      color: "secondary",
      className: "fill-secondary",
    },
    {
      variant: "default",
      color: "success",
      className: "fill-success",
    },
    {
      variant: "default",
      color: "destructive",
      className: "fill-destructive",
    },
    {
      variant: "default",
      color: "warning",
      className: "fill-warning",
    },
    {
      variant: "default",
      color: "gray",
      className: "fill-gray",
    },
    {
      variant: "default",
      color: "dark",
      className: "fill-dark",
    },
    {
      variant: "default",
      color: "light",
      className: "fill-light",
    },
  ],
  defaultVariants: {
    variant: "default",
    color: "primary",
    size: "default",
  },
});

export type RadioGroupItemVariantProps = VariantProps<
  typeof radioGroupItemVariants
>;

export type RadioIconVariantProps = VariantProps<typeof radioIconVariants>;
