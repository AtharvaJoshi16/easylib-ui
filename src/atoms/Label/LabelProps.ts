import { LabelProps as CoreLabelProps } from "@radix-ui/react-label";
type CoreLabelPropsWithoutChildren = Omit<CoreLabelProps, "children">;
export interface LabelProps extends CoreLabelPropsWithoutChildren {
  label?: React.ReactNode;
}
