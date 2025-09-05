import { cva, VariantProps } from "class-variance-authority";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-worksans-bold text-[58px] leading-[70px]",
      h2: "font-worksans-bold text-[50px] leading-[60px]",
      h3: "font-worksans-bold text-[42px] leading-[52px]",
      h4: "font-worksans-semibold text-[36px] leading-[46px]",
      h5: "font-worksans-semibold text-[28px] leading-9",
      h6: "font-worksans-semibold text-[20px] leading-7",
      subtitle1: "font-worksans-medium text-[16px] leading-6",
      subtitle2: "font-worksans-medium text-[14px] leading-5",
      body1: "text-[16px] leading-6",
      body2: "text-[14px] leading-5",
      caption: "font-worksans-light text-[12px] leading-4",
      overline: "font-worksans-light text-[12px] leading-4",
      code: "font-mono text-[16px] leading-6",
      quote: "italic text-[16px] leading-6",
    },
    color: {
      primary: "text-blue-950",
      secondary: "text-indigo-950",
      success: "text-green-950",
      destructive: "text-red-950",
      warning: "text-yellow-950",
      gray: "text-gray-950",
      dark: "text-white",
      light: "text-black",
      muted: "text-black",
    },
  },
  defaultVariants: {
    color: "muted",
    variant: "h1",
  },
});

export type TypographyVariantProps = VariantProps<typeof typographyVariants>;
