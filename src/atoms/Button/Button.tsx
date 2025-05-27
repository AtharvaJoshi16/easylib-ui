import { Button as CoreButton } from "@/core/components/button";
export interface ButtonProps {
  children: React.ReactNode;
  variant: string;
}

export const Button = ({ children }: ButtonProps) => {
  return <CoreButton>{children}</CoreButton>;
};

export default Button;
