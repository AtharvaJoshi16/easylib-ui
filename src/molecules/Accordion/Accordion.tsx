import {
  Accordion as CoreAccordion,
  AccordionContent as CoreAccordionContent,
  AccordionItem as CoreAccordionItem,
  AccordionTrigger as CoreAccordionTrigger,
} from "@/core/components/accordion";
import clsx from "clsx";
import {
  AccordionProps,
  AccordionTriggerVariants,
  AccordionVariants,
} from "./AccordionProps";
export const Accordion = ({
  items,
  variant = AccordionVariants.Default,
  rotateIcon = true,
  triggerVariant = AccordionTriggerVariants.Default,
  slots,
  ...props
}: AccordionProps) => {
  return (
    <CoreAccordion {...props}>
      {items.map((item) => {
        return (
          <CoreAccordionItem
            value={item.id}
            variant={variant}
            {...slots?.item}
            className={clsx({
              "opacity-50 pointer-events-none": item?.disabled,
            })}
          >
            <CoreAccordionTrigger
              variant={triggerVariant}
              header={item.title}
              expandIcon={item?.expandIcon}
              className={clsx(
                {
                  "[&[data-state=open]>svg]:rotate-180": rotateIcon,
                },
                slots?.trigger?.className
              )}
              {...slots?.trigger}
            >
              {triggerVariant === AccordionTriggerVariants.Cta
                ? item.trigger
                : item.title}
            </CoreAccordionTrigger>
            <CoreAccordionContent {...slots?.content}>
              {item.content}
            </CoreAccordionContent>
          </CoreAccordionItem>
        );
      })}
    </CoreAccordion>
  );
};

export default Accordion;
