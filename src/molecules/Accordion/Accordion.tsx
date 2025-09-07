import {
  Accordion as CoreAccordion,
  AccordionContent as CoreAccordionContent,
  AccordionItem as CoreAccordionItem,
  AccordionTrigger as CoreAccordionTrigger,
} from "@/core/components/accordion";
import {
  AccordionProps,
  AccordionTriggerVariants,
  AccordionVariants,
} from "./AccordionProps";
export const Accordion = ({
  items,
  variant = AccordionVariants.Default,
  triggerVariant = AccordionTriggerVariants.Default,
  ...props
}: AccordionProps) => {
  return (
    <CoreAccordion {...props}>
      {items.map((item) => {
        return (
          <CoreAccordionItem value={item.id} variant={variant}>
            <CoreAccordionTrigger
              variant={triggerVariant}
              header={item.title}
              expandIcon={item?.expandIcon}
            >
              {triggerVariant === AccordionTriggerVariants.Cta
                ? item.trigger
                : item.title}
            </CoreAccordionTrigger>
            <CoreAccordionContent>{item.content}</CoreAccordionContent>
          </CoreAccordionItem>
        );
      })}
    </CoreAccordion>
  );
};

export default Accordion;
