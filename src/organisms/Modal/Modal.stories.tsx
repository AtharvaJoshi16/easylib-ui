import type { Meta, StoryObj } from "@storybook/react";

import { ButtonVariants } from "@/atoms";
import { Button } from "@/core/components/button";
import { Story } from "@storybook/blocks";
import { Modal } from "./Modal";
const meta = {
  title: "Components/Organisms/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    trigger: <Button>Open Modal</Button>,
    content: <h2>Demo Content</h2>,
    header: <h2 className="text-lg font-semibold">Test Header</h2>,
    footer: (
      <div className="flex items-center justify-end gap-2 w-full">
        <Button variant={ButtonVariants.Outlined}>Cancel</Button>
        <Button>Proceed</Button>
      </div>
    ),
  },
};
