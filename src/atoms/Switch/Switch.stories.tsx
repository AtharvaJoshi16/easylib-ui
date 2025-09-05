import type { Meta, StoryObj } from "@storybook/react";

import { Story } from "@storybook/blocks";
import { Colors, Sizes } from "../../interfaces";
import { Switch } from "./Switch";
const meta = {
  title: "Components/Atoms/Switch",
  component: Switch,
  tags: ["autodocs"],
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
    order: {
      control: "select",
      options: ["rtl", "ltr"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "md", "lg"],
    },
    alignment: {
      control: "select",
      options: ["normal", "spaced"],
    },
    disabled: {
      control: "boolean",
    },
    isError: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Trial: Story = {
  args: {
    label: {
      label: "Demo Toggle Long Text",
    },
    description: "This is a demo description",
    helperText: "This is an error helper text",
  },
};

export const Gallery: Story = {
  args: {
    checked: true,
    label: {
      label: "",
    },
  },
  render: (args) => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Switch {...args} />
          <Switch {...args} color={Colors.Secondary} />
          <Switch {...args} color={Colors.Success} />
          <Switch {...args} color={Colors.Destructive} />
          <Switch {...args} color={Colors.Warning} />
          <Switch {...args} color={Colors.Gray} />
          <Switch {...args} color={Colors.Dark} />
          <Switch {...args} color={Colors.Light} />
        </div>
        <div className="flex items-center gap-2">
          <Switch {...args} size={Sizes.Small} />
          <Switch {...args} />
          <Switch {...args} size={Sizes.Medium} />
          <Switch {...args} size={Sizes.Large} />
        </div>
        <div className="flex items-center gap-2">
          <Switch
            {...{
              label: {
                label: "Demo Toggle Long Text",
              },
              description: "This is a demo description",
              helperText: "This is an error helper text",
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Switch
            {...{
              label: {
                label: "Demo Toggle Long Text",
              },
              disabled: true,
              description: "This is a demo description",
              helperText: "This is an error helper text",
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Switch
            {...{
              label: {
                label: "Demo Toggle Long Text",
              },
              order: "rtl",
              description: "This is a demo description",
              helperText: "This is an error helper text",
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Switch
            {...{
              label: {
                label: "Demo Toggle Long Text",
              },
              description: "This is a demo description",
              isError: true,
              helperText: "This is an error helper text",
            }}
          />
        </div>
        <div className="flex items-center gap-2 w-[50%]">
          <Switch
            {...{
              label: {
                label: "Demo",
              },
              alignment: "spaced",
            }}
          />
        </div>
        <div className="flex items-center gap-2 w-[50%]">
          <Switch
            {...{
              label: {
                label: "Demo",
              },
              order: "rtl",
              alignment: "spaced",
            }}
          />
        </div>
      </div>
    );
  },
};
