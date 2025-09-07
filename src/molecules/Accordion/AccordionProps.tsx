import {
  AccordionItemProps,
  AccordionMultipleProps,
  AccordionSingleProps,
} from "@radix-ui/react-accordion";
import { JSX } from "react";

export enum AccordionVariants {
  Default = "default",
  Contained = "contained",
  Outlined = "outlined",
  Ghost = "ghost",
}

export enum AccordionTriggerVariants {
  Default = "default",
  Cta = "cta",
}

export type AccordionCommonProps = {
  items: AccordionItem[];
  variant?: AccordionVariants;
  triggerVariant?: AccordionTriggerVariants;
};

export type AccordionProps =
  | (AccordionCommonProps &
      ({ type: "single" } & Omit<AccordionSingleProps, "type">))
  | (AccordionCommonProps &
      ({ type: "multiple" } & Omit<AccordionMultipleProps, "type">));

export interface AccordionItem {
  title: React.ReactNode;
  id: string;
  content: React.ReactNode;
  trigger?: React.ReactNode;
  expandIcon?: JSX.Element;
  props?: AccordionItemProps;
}
