export type ButtonProps = {
  children?: React.ReactNode;
};
export const Button = ({ children }: ButtonProps) => {
  return <button className="p-2 border border-red-100">{children}</button>;
};
