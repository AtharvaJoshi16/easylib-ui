import type { Meta, StoryObj } from "@storybook/react";

import { ButtonVariants } from "@/atoms";
import { Button } from "@/core/components/button";
import { Story } from "@storybook/blocks";
import { useState } from "react";
import { Modal } from "./Modal";
const meta = {
  title: "Components/Organisms/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    trigger: <Button>Open Modal</Button>,
    content: <h2>Demo Content</h2>,
    header: <h2 className="text-lg font-semibold">Test Header</h2>,
    actions: {
      cta1: {
        variant: ButtonVariants.Outlined,
        children: "Cancel",
      },
      cta2: {
        variant: ButtonVariants.Contained,
        children: "Proceed",
      },
    },
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <Modal
        {...args}
        open={open}
        onOpenChange={() => setOpen(true)}
        onClose={() => setOpen(false)}
      />
    );
  },
};
