import type { Meta, StoryObj } from "@storybook/react";

import { Colors } from "@/interfaces";
import { Story } from "@storybook/blocks";
import { UserLock } from "lucide-react";
import { Alert } from "./Alert";
const meta = {
  title: "Components/Molecules/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "destructive",
        "success",
        "gray",
        "warning",
        "light",
        "dark",
      ],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Trial: Story = {
  args: {
    title: "Test Title",
    description: "Test Description",
  },
};

export const Gallery: Story = {
  args: {
    title: "Test Title",
    description: "Test Description",
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Alert {...args} />
      <Alert
        loading
        title="Creating account."
        description="This will only take few minutes"
      />
      <Alert {...args} color={Colors.Secondary} />
      <Alert {...args} color={Colors.Success} />
      <Alert {...args} color={Colors.Warning} />
      <Alert {...args} color={Colors.Destructive} />
      <Alert
        {...args}
        color={Colors.Gray}
        title="With custom icon"
        icon={<UserLock />}
      />
      <Alert {...args} color={Colors.Dark} />
      <Alert {...args} color={Colors.Light} />
    </div>
  ),
};
