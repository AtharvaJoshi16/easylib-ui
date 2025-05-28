import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "dark",
        "light",
        "destructive",
        "warning",
        "success",
        "gray",
        "outline",
        "ghost",
        "link",
      ],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
    variant: "dark",
  },
};
