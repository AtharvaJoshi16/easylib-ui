import { Button as CoreButton } from "@/core/components/button";
export interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
}

export const Button = ({ children, variant }: ButtonProps) => {
  return <CoreButton variant={variant as any}>{children}</CoreButton>;
};

export default Button;
