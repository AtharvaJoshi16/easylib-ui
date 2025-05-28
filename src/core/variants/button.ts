import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        contained: "shadow",
        outlined: "border bg-none shadow-sm",
        text: "bg-none",
        link: "bg-none p-0 underline-offset-4 hover:underline",
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
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        color: "primary",
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        variant: "contained",
        color: "secondary",
        className:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      },
      {
        variant: "contained",
        color: "success",
        className: "bg-success text-success-foreground hover:bg-success/90",
      },
      {
        variant: "contained",
        color: "destructive",
        className:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      {
        variant: "contained",
        color: "warning",
        className: "bg-warning text-warning-foreground hover:bg-warning/90",
      },
      {
        variant: "contained",
        color: "gray",
        className: "bg-gray text-gray-foreground hover:bg-gray/90",
      },
      {
        variant: "contained",
        color: "dark",
        className: "bg-dark text-dark-foreground hover:bg-dark/90",
      },
      {
        variant: "contained",
        color: "light",
        className: "bg-light text-light-foreground hover:bg-light/90",
      },
      {
        variant: "outlined",
        color: "primary",
        className: "border-primary hover:bg-primary/10 text-primary",
      },
      {
        variant: "outlined",
        color: "secondary",
        className: "border-secondary hover:bg-secondary/10 text-secondary",
      },
      {
        variant: "outlined",
        color: "success",
        className: "border-success hover:bg-success/10 text-success",
      },
      {
        variant: "outlined",
        color: "destructive",
        className:
          "border-destructive hover:bg-destructive/10 text-destructive",
      },
      {
        variant: "outlined",
        color: "warning",
        className: "border-warning hover:bg-warning/10 text-warning",
      },
      {
        variant: "outlined",
        color: "gray",
        className: "border-gray hover:bg-gray/10 text-gray",
      },
      {
        variant: "outlined",
        color: "dark",
        className: "border-dark hover:bg-dark/10 text-dark",
      },
      {
        variant: "outlined",
        color: "light",
        className: "border-light hover:bg-light/10 text-light",
      },
      {
        variant: "text",
        color: "primary",
        className: "hover:bg-primary/20 text-primary",
      },
      {
        variant: "text",
        color: "secondary",
        className: "hover:bg-secondary/20 text-secondary",
      },
      {
        variant: "text",
        color: "success",
        className: "hover:bg-success/20 text-success",
      },
      {
        variant: "text",
        color: "destructive",
        className: "hover:bg-destructive/20 text-destructive",
      },
      {
        variant: "text",
        color: "warning",
        className: "hover:bg-warning/20 text-warning",
      },
      {
        variant: "text",
        color: "gray",
        className: "hover:bg-gray/20 text-gray",
      },
      {
        variant: "text",
        color: "dark",
        className: "hover:bg-dark/20 text-dark",
      },
      {
        variant: "text",
        color: "light",
        className: "hover:bg-light/20 text-light",
      },
      {
        variant: "link",
        color: "primary",
        className: "text-primary",
      },
      {
        variant: "link",
        color: "secondary",
        className: "text-secondary",
      },
      {
        variant: "link",
        color: "success",
        className: "text-success",
      },
      {
        variant: "link",
        color: "destructive",
        className: "text-destructive",
      },
      {
        variant: "link",
        color: "warning",
        className: "text-warning",
      },
      {
        variant: "link",
        color: "gray",
        className: "text-gray",
      },
      {
        variant: "link",
        color: "dark",
        className: "text-dark",
      },
      {
        variant: "link",
        color: "light",
        className: "text-light",
      },
    ],
    defaultVariants: {
      size: "default",
      variant: "contained",
      color: "primary",
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
