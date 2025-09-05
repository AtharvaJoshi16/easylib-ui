import { cva, VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "cursor-pointer data-[type=badge]:pointer-events-none inline-flex items-center rounded-md border text-sm font-worksans-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        contained: "border-transparent",
        mixed: "border",
        outlined: "border",
        ghost: "border-transparent",
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
        muted: "",
      },
      size: {
        default: "px-2 py-0.5",
        sm: "px-1.5 text-xs",
        md: "px-2.5 py-1 text-base rounded-lg",
        lg: "px-3 py-1.5 text-base rounded-lg",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        color: "primary",
        className:
          "bg-primary text-primary-foreground hover:bg-primary-dark data-[selected=true]:bg-primary-dark",
      },
      {
        variant: "contained",
        color: "secondary",
        className:
          "bg-secondary text-secondary-foreground hover:bg-secondary-dark data-[selected=true]:bg-secondary-dark",
      },
      {
        variant: "contained",
        color: "success",
        className:
          "bg-success text-success-foreground hover:bg-success-dark data-[selected=true]:bg-success-dark",
      },
      {
        variant: "contained",
        color: "destructive",
        className:
          "bg-destructive text-destructive-foreground hover:bg-destructive-dark data-[selected=true]:bg-destructive-dark",
      },
      {
        variant: "contained",
        color: "warning",
        className:
          "bg-warning text-warning-foreground hover:bg-warning-dark data-[selected=true]:bg-warning-dark",
      },
      {
        variant: "contained",
        color: "gray",
        className:
          "bg-gray text-gray-foreground hover:bg-gray-dark data-[selected=true]:bg-gray-dark",
      },
      {
        variant: "contained",
        color: "dark",
        className:
          "bg-dark text-dark-foreground hover:bg-light/80 hover:text-light-foreground data-[selected=true]:bg-light/80 data-[selected=true]:text-light-foreground",
      },
      {
        variant: "contained",
        color: "light",
        className:
          "bg-light text-light-foreground hover:bg-dark/80 hover:text-dark-foreground data-[selected=true]:text-dark-foreground data-[selected=true]:bg-dark/80",
      },
      {
        variant: "outlined",
        color: "primary",
        className:
          "border-primary text-primary hover:bg-primary/20 data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
      },
      {
        variant: "outlined",
        color: "secondary",
        className:
          "border-secondary text-secondary hover:bg-secondary/20 data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground",
      },
      {
        variant: "outlined",
        color: "success",
        className:
          "border-success text-success hover:bg-success/20 data-[selected=true]:bg-success data-[selected=true]:text-success-foreground",
      },
      {
        variant: "outlined",
        color: "destructive",
        className:
          "border-destructive text-destructive hover:bg-destructive/20 data-[selected=true]:bg-destructive data-[selected=true]:text-destructive-foreground",
      },
      {
        variant: "outlined",
        color: "warning",
        className:
          "border-warning text-warning hover:bg-warning/20 data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground",
      },
      {
        variant: "outlined",
        color: "gray",
        className:
          "border-gray text-gray hover:bg-gray/20 data-[selected=true]:bg-gray data-[selected=true]:text-gray-foreground",
      },
      {
        variant: "outlined",
        color: "dark",
        className:
          "border-dark text-dark hover:bg-dark/20 data-[selected=true]:bg-dark data-[selected=true]:text-dark-foreground",
      },
      {
        variant: "outlined",
        color: "light",
        className:
          "border-light text-light hover:bg-light/20 data-[selected=true]:bg-light data-[selected=true]:text-light-foreground",
      },
      {
        variant: "mixed",
        color: "primary",
        className:
          "border-primary text-primary bg-primary/20 hover:bg-primary/30 data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
      },
      {
        variant: "mixed",
        color: "secondary",
        className:
          "border-secondary text-secondary bg-secondary/20 hover:bg-secondary/30 data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground",
      },
      {
        variant: "mixed",
        color: "success",
        className:
          "border-success text-success bg-success/20 hover:bg-success/30 data-[selected=true]:bg-success data-[selected=true]:text-success-foreground",
      },
      {
        variant: "mixed",
        color: "destructive",
        className:
          "border-destructive text-destructive bg-destructive/20 hover:bg-destructive/30 data-[selected=true]:bg-destructive data-[selected=true]:text-destructive-foreground",
      },
      {
        variant: "mixed",
        color: "warning",
        className:
          "border-warning text-warning bg-warning/20 hover:bg-warning/30 data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground",
      },
      {
        variant: "mixed",
        color: "gray",
        className:
          "border-gray text-gray bg-gray/20 hover:bg-gray/30 data-[selected=true]:bg-gray data-[selected=true]:text-gray-foreground",
      },
      {
        variant: "mixed",
        color: "dark",
        className:
          "border-dark text-dark bg-dark/20 hover:bg-dark/30 data-[selected=true]:bg-dark data-[selected=true]:text-dark-foreground",
      },
      {
        variant: "mixed",
        color: "light",
        className:
          "border-light text-light bg-light/20 hover:bg-light/30 data-[selected=true]:bg-light data-[selected=true]:text-light-foreground",
      },
      {
        variant: "ghost",
        color: "primary",
        className:
          "hover:bg-primary/20 text-primary data-[selected=true]:bg-primary/20",
      },
      {
        variant: "ghost",
        color: "secondary",
        className:
          "hover:bg-secondary/20 text-secondary data-[selected=true]:bg-secondary/20",
      },
      {
        variant: "ghost",
        color: "success",
        className:
          "hover:bg-success/20 text-success data-[selected=true]:bg-success/20",
      },
      {
        variant: "ghost",
        color: "destructive",
        className:
          "hover:bg-destructive/20 text-destructive data-[selected=true]:bg-destructive/20",
      },
      {
        variant: "ghost",
        color: "warning",
        className:
          "hover:bg-warning/20 text-warning data-[selected=true]:bg-warning/20",
      },
      {
        variant: "ghost",
        color: "gray",
        className: "hover:bg-gray/20 text-gray data-[selected=true]:bg-gray/20",
      },
      {
        variant: "ghost",
        color: "dark",
        className: "hover:bg-dark/20 text-dark data-[selected=true]:bg-dark/20",
      },
      {
        variant: "ghost",
        color: "light",
        className:
          "hover:bg-light/20 text-light data-[selected=true]:bg-light/20",
      },
    ],
    defaultVariants: {
      variant: "contained",
      color: "primary",
      size: "default",
    },
  }
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;

// default:
//           "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
//         secondary:
//           "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         destructive:
//           "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
//         outline: "text-foreground",
