import { ButtonProps as CoreButtonProps } from "@/core/components/button";
import React, { JSX } from "react";

export interface ButtonProps extends CoreButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariants;
  color?: ButtonColors;
  loading?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  alignment?: "center" | "spaced";
  loader?: JSX.Element;
}

export enum ButtonVariants {
  Contained = "contained",
  Outlined = "outlined",
  Text = "text",
  Link = "link",
}

export enum ButtonColors {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Destructive = "destructive",
  Warning = "warning",
  Gray = "gray",
  Dark = "dark",
  Light = "light",
}
