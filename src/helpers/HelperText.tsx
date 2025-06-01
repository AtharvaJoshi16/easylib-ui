import clsx from "clsx";

export const HelperText = ({
  helperText,
  className,
}: {
  helperText: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={clsx("text-xs pl-1 text-destructive", className)}>
      {helperText}
    </span>
  );
};
