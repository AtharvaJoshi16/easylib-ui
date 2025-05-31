import { ButtonProps as CoreButtonProps } from "@/core/components/button";
import { Colors } from "@/interfaces";
import React, { JSX } from "react";

export interface ButtonProps extends CoreButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariants;
  color?: Colors;
  loading?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  alignment?: "center" | "spaced";
  loader?: JSX.Element;
  size?: ButtonSizes;
}

export enum ButtonVariants {
  Contained = "contained",
  Outlined = "outlined",
  Text = "text",
  Link = "link",
}

export enum ButtonSizes {
  Default = "default",
  Small = "sm",
  Large = "lg",
  Icon = "icon",
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
