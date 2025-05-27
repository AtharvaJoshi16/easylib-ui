import type { StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
  },
};
