import type { Meta, StoryObj } from "@storybook/react";

import { Story } from "@storybook/blocks";
import { Textarea } from "./Textarea";
const meta = {
  title: "Components/Atoms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    isError: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Trial: Story = {
  args: {
    label: {
      label: "Comments",
    },
    description: "This is a demo description",
    placeholder: "Add comments here",
    helperText: "This is a demo helper text",
    classes: {
      wrapper: "w-[50%]",
    },
  },
};

export const Gallery: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="flex flex-col gap-4 w-[50%]">
        <Textarea {...args} placeholder="Enter something" />
        <Textarea
          {...args}
          label={{ id: "test", label: "Comments" }}
          description="This is a demo description"
          placeholder="Add some comments"
        />
        <Textarea
          {...args}
          label={{ id: "test", label: "Comments" }}
          placeholder="Add some comments"
          description="This is a demo description"
          helperText={"This is demo helper text"}
          isError
        />
      </div>
    );
  },
};
