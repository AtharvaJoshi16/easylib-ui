import type { Meta, StoryObj } from "@storybook/react";

import { Colors } from "@/interfaces";
import { Story } from "@storybook/blocks";
import { Typography } from "./Typography";
import { TypographyVariants } from "./TypographyProps";
const meta = {
  title: "Components/Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "overline",
        "code",
        "quote",
      ],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "destructive",
        "warning",
        "gray",
        "muted",
        "dark",
        "light",
      ],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Trial: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    variant: TypographyVariants.Body2,
    slot: "h2",
  },
};

export const Gallery: Story = {
  render: (args) => {
    return (
      <div className="flex items-center gap-[50px]">
        <div className="flex flex-col gap-4">
          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Heading1}
          >
            Heading1
          </Typography>
          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Heading2}
            {...args}
          >
            Heading2
          </Typography>

          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Heading3}
            {...args}
          >
            Heading3
          </Typography>
          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Heading4}
            {...args}
          >
            Heading4
          </Typography>
          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Heading5}
            {...args}
          >
            Heading5
          </Typography>
          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Heading6}
            {...args}
          >
            Heading6
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Subtitle1}
            {...args}
          >
            Subtitle 1
          </Typography>
          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Subtitle2}
            {...args}
          >
            Subtitle 2
          </Typography>
          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Body1}
            {...args}
          >
            Body 1
          </Typography>
          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Body2}
            {...args}
          >
            Body 2
          </Typography>
          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Caption}
            {...args}
          >
            Caption
          </Typography>
          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Overline}
            {...args}
          >
            Overline
          </Typography>
          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Code}
            {...args}
          >
            Code
          </Typography>
          <Typography
            color={Colors.Primary}
            variant={TypographyVariants.Quote}
            {...args}
          >
            Quote
          </Typography>
        </div>
      </div>
    );
  },
};
