import clsx from "clsx";

export const Description = ({
  description,
  className,
}: {
  description: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={clsx("text-xs pl-1 text-gray", className)}>
      {description}
    </span>
  );
};
