import type { Meta, StoryObj } from "@storybook/react";

import { Story } from "@storybook/blocks";
import { Alert } from "./Alert";
const meta = {
  title: "Components/Molecules/Alert",
  component: Alert,
  tags: ["autodocs"],
  //   argTypes: {
  //     //  variant: {
  //     //    control: "select",
  //     //    options: ["contained", "outlined", "ghost", "mixed"],
  //     //  },
  //     //  color: {
  //     //    control: "select",
  //     //    options: [
  //     //      "primary",
  //     //      "secondary",
  //     //      "success",
  //     //      "destructive",
  //     //      "warning",
  //     //      "gray",
  //     //      "dark",
  //     //      "light",
  //     //    ],
  //     //  },
  //   },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Trial: Story = {
  args: {
    title: "Test Title",
    description: "Test Description",
  },
};
