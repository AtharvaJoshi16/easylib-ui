import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";
const meta = {
  title: "Components/Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "destructive",
        "warning",
        "gray",
        "dark",
        "light",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "md", "lg"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Trial: Story = {
  args: {},
};
