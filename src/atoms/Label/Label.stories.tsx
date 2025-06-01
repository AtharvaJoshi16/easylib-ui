import type { Meta, StoryObj } from "@storybook/react";

import { Story } from "@storybook/blocks";
import { Label } from "./Label";
const meta = {
  title: "Components/Atoms/Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Trail: Story = {
  args: {
    label: "This is a demo label",
  },
};
