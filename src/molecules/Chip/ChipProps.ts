import { BadgeProps } from "@/core/components/badge";
import { Colors, Sizes } from "@/interfaces";

export interface ChipProps extends BadgeProps {
  type?: ChipTypes;
  variant?: ChipVariants;
  color?: Colors;
  size?: Sizes;
  label: React.ReactNode;
  selected?: boolean;
  rounded?: boolean;
  onDelete?: () => void;
  deleteBtn?: React.ReactNode;
}

export enum ChipTypes {
  Button = "button",
  Badge = "badge",
  Toggle = "toggle",
}

export enum ChipVariants {
  Contained = "contained",
  Outlined = "outlined",
  Ghost = "ghost",
  Mixed = "mixed",
}
