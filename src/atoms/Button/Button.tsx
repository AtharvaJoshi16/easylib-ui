export interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button className="p-2 bg-red-500">{children}</button>;
};

export default Button;