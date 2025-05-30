import { cva, VariantProps } from "class-variance-authority";

export const checkboxVariants = cva(
  "peer rounded-sm border shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        contained: "",
        outlined: "bg-transparent",
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
        default: "h-4 w-4",
        sm: "h-3 w-3 rounded-xs",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        color: "primary",
        className:
          "bg-transparent border-primary data-[state=checked]:bg-primary text-primary-foreground",
      },
      {
        variant: "contained",
        color: "secondary",
        className:
          "bg-transparent border-secondary data-[state=checked]:bg-secondary text-secondary-foreground",
      },
      {
        variant: "contained",
        color: "success",
        className:
          "bg-transparent border-success data-[state=checked]:bg-success text-success-foreground",
      },
      {
        variant: "contained",
        color: "destructive",
        className:
          "bg-transparent border-destructive data-[state=checked]:bg-destructive text-destructive-foreground",
      },
      {
        variant: "contained",
        color: "warning",
        className:
          "bg-transparent border-warning data-[state=checked]:bg-warning text-warning-foreground",
      },
      {
        variant: "contained",
        color: "gray",
        className:
          "bg-transparent border-gray data-[state=checked]:bg-gray text-gray-foreground",
      },
      {
        variant: "contained",
        color: "dark",
        className:
          "bg-transparent border-dark data-[state=checked]:bg-dark text-dark-foreground",
      },
      {
        variant: "contained",
        color: "light",
        className:
          "bg-transparent border-light data-[state=checked]:bg-light text-light-foreground",
      },
      {
        variant: "outlined",
        color: "primary",
        className:
          "border-primary text-primary data-[state=checked]:bg-transparent",
      },
      {
        variant: "outlined",
        color: "secondary",
        className:
          "border-secondary text-secondary data-[state=checked]:bg-transparent",
      },
      {
        variant: "outlined",
        color: "success",
        className:
          "border-success text-success data-[state=checked]:bg-transparent",
      },
      {
        variant: "outlined",
        color: "destructive",
        className:
          "border-destructive text-destructive data-[state=checked]:bg-transparent",
      },
      {
        variant: "outlined",
        color: "warning",
        className:
          "border-warning text-warning data-[state=checked]:bg-transparent",
      },
      {
        variant: "outlined",
        color: "gray",
        className: "border-gray text-gray data-[state=checked]:bg-transparent",
      },
      {
        variant: "outlined",
        color: "dark",
        className: "border-dark text-dark data-[state=checked]:bg-transparent",
      },
      {
        variant: "outlined",
        color: "light",
        className:
          "border-light text-light data-[state=checked]:bg-transparent",
      },
    ],
    defaultVariants: {
      color: "primary",
      size: "default",
      variant: "contained",
    },
  }
);

export type CheckboxVariantProps = VariantProps<typeof checkboxVariants>;
