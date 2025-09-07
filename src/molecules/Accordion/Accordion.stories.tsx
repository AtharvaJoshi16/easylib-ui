import { Button, ButtonVariants } from "@/atoms";
import type { Meta, StoryObj } from "@storybook/react";
import { ArrowBigDown, ArrowDown } from "lucide-react";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Molecules/Accordion",
  component: Accordion,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "contained", "outlined", "ghost"],
    },
    triggerVariant: {
      control: "select",
      options: ["default", "cta"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    type: "multiple",
    items: [
      {
        id: "item-1",
        title: "Item 1",
        content: "Item 1 Test Content",
        expandIcon: <ArrowDown />,
        trigger: <Button variant={ButtonVariants.Text}>Collapse/Expand</Button>,
      },
      {
        id: "item-2",
        title: "Item 2",
        content: "Item 2 Test Content",
        expandIcon: <ArrowBigDown />,
        trigger: <Button variant={ButtonVariants.Text}>Collapse/Expand</Button>,
      },
      {
        id: "item-3",
        title: "Item 3",
        content: "Item 3 Test Content",
        trigger: <Button variant={ButtonVariants.Text}>Collapse/Expand</Button>,
      },
    ],
  },
};

export const Gallery: Story = {
  args: {},
  render: (args) => {
    return (
      <div>
        <Accordion {...args} />
      </div>
    );
  },
};
