import { cva, VariantProps } from "class-variance-authority";

export const accordionVariants = cva("my-2 py-2 px-4 rounded-md", {
  variants: {
    variant: {
      default: "rounded-none border-b",
      contained: "bg-slate-200",
      outlined: "border border-slate-200 bg-white dark:bg-slate-800",
      ghost: "bg-none hover:bg-slate-200 data-[state=open]:bg-slate-200",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const accordionTriggerVariants = cva(
  "flex items-center justify-between py-4 font-worksans-medium transition-all hover:underline text-left",
  {
    variants: {
      variant: {
        default: "flex-1",
        cta: "w-fit hover:no-underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
export type AccordionTriggerVariantProps = VariantProps<
  typeof accordionTriggerVariants
>;
export type AccordionVariantProps = VariantProps<typeof accordionVariants>;
