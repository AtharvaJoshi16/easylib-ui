import { JSX } from "react";
import { Colors } from "../../interfaces";

export const tags: Record<string, string> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  subtitle2: "p",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
  code: "code",
  quote: "blockquote",
  anchor: "a",
};

export type Slots =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "code"
  | "blockquote"
  | "a";

export type BaseTypographyProps = {
  className?: string;
  variant?: TypographyVariants;
  color?: Colors;
};

export type SlotProps<T extends keyof JSX.IntrinsicElements> = {
  slot?: T;
} & BaseTypographyProps &
  Omit<JSX.IntrinsicElements[T], keyof BaseTypographyProps | "slot">;

export type TypographyComponent = <T extends keyof JSX.IntrinsicElements = "p">(
  props: {
    slot?: T;
  } & BaseTypographyProps &
    Omit<JSX.IntrinsicElements[T], keyof BaseTypographyProps | "slot">
) => JSX.Element;

export enum TypographyVariants {
  Heading1 = "h1",
  Heading2 = "h2",
  Heading3 = "h3",
  Heading4 = "h4",
  Heading5 = "h5",
  Heading6 = "h6",
  Subtitle1 = "subtitle1",
  Subtitle2 = "subtitle2",
  Body1 = "body1",
  Body2 = "body2",
  Caption = "caption",
  Overline = "overline",
  Code = "code",
  Anchor = "a",
  Quote = "quote",
}
