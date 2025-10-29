import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { clsx } from "clsx";
import { SliderTypes, SliderVariants } from "../../atoms/Slider/SliderProps";
import { Colors, Sizes } from "../../interfaces";
import { cn } from "../../lib/utils";
import {
  rangeVariants,
  SliderVariantProps,
  thumbVariants,
  trackVariants,
} from "../variants/slider";

interface ThumbProps extends SliderPrimitive.SliderThumbProps {
  color?: Colors;
  size?: Sizes;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
  variant?: SliderVariants;
  isError?: boolean;
}

const Thumb = ({
  color,
  className,
  isError,
  size,
  orientation,
  variant,
  ...props
}: ThumbProps) => (
  <SliderPrimitive.Thumb
    {...props}
    className={clsx(
      cn(thumbVariants({ color, variant, size, orientation }), className),
      { "border-opacity-50": props?.disabled },
      { "border-red-600": isError }
    )}
  />
);

export interface CoreSliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    SliderVariantProps {
  type: SliderTypes;
  size?: Sizes;
  color?: Colors;
  variant?: SliderVariants;
  isError?: boolean;
  slots?: {
    track?: SliderPrimitive.SliderTrackProps;
    range?: SliderPrimitive.SliderRangeProps;
    thumb?: SliderPrimitive.SliderThumbProps;
  };
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  CoreSliderProps
>(
  (
    {
      className,
      type,
      defaultValue,
      isError,
      orientation,
      size,
      color,
      value,
      variant,
      slots,
      ...props
    },
    ref
  ) => {
    const updatedValue = React.useMemo(() => {
      if (type === SliderTypes.Double) {
        return value ?? defaultValue ?? [0, 0];
      }
      return [value?.[0] ?? defaultValue?.[0] ?? 0];
    }, [value, defaultValue, type]);
    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full h-fit touch-none select-none items-center disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-fit data-[orientation=vertical]:flex-col",
          className
        )}
        value={updatedValue ?? []}
        orientation={orientation}
        {...props}
      >
        <SliderPrimitive.Track
          {...slots?.track}
          className={clsx(
            trackVariants({
              color,
              size,
            }),
            { "opacity-75": props?.disabled },
            slots?.track?.className
          )}
        >
          <SliderPrimitive.Range
            {...slots?.range}
            className={cn(rangeVariants({ color }), slots?.range?.className)}
          />
        </SliderPrimitive.Track>
        <Thumb
          orientation={orientation}
          isError={isError}
          size={size}
          {...slots?.thumb}
          color={color}
          variant={variant}
          disabled={props.disabled}
        />
        {type === SliderTypes.Double && (
          <Thumb
            orientation={orientation}
            isError={isError}
            {...slots?.thumb}
            size={size}
            variant={variant}
            color={color}
            disabled={props.disabled}
          />
        )}
      </SliderPrimitive.Root>
    );
  }
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
