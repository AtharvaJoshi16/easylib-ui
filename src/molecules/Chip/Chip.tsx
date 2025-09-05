import clsx from "clsx";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "../../atoms";
import { ButtonSizes, ButtonVariants } from "../../atoms/Button/ButtonProps";
import { Badge } from "../../core/components/badge";
import { Sizes } from "../../interfaces";
import { ChipProps, ChipTypes } from "./ChipProps";

export const Chip = ({
  label,
  rounded,
  selected,
  deleteBtn,
  type = ChipTypes.Badge,
  size = Sizes.Default,
  onDelete,
  ...props
}: ChipProps) => {
  const [isSelected, setSelected] = useState(
    selected && type === ChipTypes.Toggle
  );
  return (
    <Badge
      {...props}
      data-selected={isSelected ? "true" : "false"}
      data-type={type}
      className={clsx(
        {
          "rounded-full": rounded,
          "flex items-center gap-1 justify-between w-fit": onDelete,
        },
        props?.className
      )}
      size={size}
      {...(type === ChipTypes.Toggle && {
        onClick: (event) => {
          setSelected(!isSelected);
          props?.onClick?.(event);
        },
      })}
    >
      {label}
      {onDelete &&
        type !== ChipTypes.Badge &&
        (deleteBtn ?? (
          <Button
            className={clsx("w-3 h-3 shadow-none", {
              "rounded-full": rounded,
            })}
            size={ButtonSizes.Icon}
            color={props.color}
            variant={ButtonVariants.Contained}
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <X
              style={{
                width: size === Sizes.Small ? "8px" : "10px",
                height: size === Sizes.Small ? "8px" : "10px",
              }}
              strokeWidth={2.5}
              className={clsx("hover:bg-slate-100 hover:bg-opacity-10")}
            />
          </Button>
        ))}
    </Badge>
  );
};

export default Chip;
