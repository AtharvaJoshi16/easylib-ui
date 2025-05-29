import type { Meta, StoryObj } from "@storybook/react";

import { Colors } from "@/interfaces/Colors";
import { Story } from "@storybook/blocks";
import { Search } from "lucide-react";
import { Textfield } from "./Textfield";
const meta = {
  title: "Components/Atoms/Textfield",
  component: Textfield,
  tags: ["autodocs"],
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
    type: {
      control: "select",
      options: ["text", "date", "search", "email", "number"],
    },
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Trial: Story = {
  args: {
    id: "test",
    placeholder: "Enter email",
    label: {
      children: "Email",
      id: "test",
    },
    type: "text",
    startIcon: <Search className="h-5 w-5 text-slate-500" />,
    helperText: "This is a demo description",
    color: Colors.Primary,
  },
  render: (args) => {
    return (
      <div className="w-[50%] m-4">
        <Textfield {...args} />
      </div>
    );
  },
};
