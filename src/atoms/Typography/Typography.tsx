import { typographyVariants } from "@/core/variants/typography";
import { Colors } from "@/interfaces";
import { cn } from "@/lib/utils";
import {
  tags,
  TypographyComponent,
  TypographyVariants,
} from "./TypographyProps";

export const Typography: TypographyComponent = ({
  color = Colors.Primary,
  variant = TypographyVariants.Body1,
  slot,
  className,
  ...props
}) => {
  const Slot = slot ?? tags[variant];
  return (
    <Slot
      {...props}
      className={cn(
        typographyVariants({ variant: variant as any, color }),
        className
      )}
    />
  );
};

export default Typography;
