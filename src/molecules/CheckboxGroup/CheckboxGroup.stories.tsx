import type { Meta, StoryObj } from "@storybook/react";

import { Colors } from "@/interfaces";
import { Story } from "@storybook/blocks";
import { useState } from "react";
import { CheckboxGroup } from "./CheckboxGroup";
import { options } from "./mockData";
const meta = {
  title: "Components/Molecules/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined"],
    },
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
      control: "select",
      options: ["default", "sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Trial: Story = {
  args: {
    label: {
      label: "Choose one or more options",
    },
    color: Colors.Secondary,
    description: "This is a test description",
    helperText: "This is a demo text",
    isError: true,
    options: options,
  },
  render: (args) => {
    const [options, setOptions] = useState(args.options);

    return (
      <div className="flex flex-col gap-4">
        <CheckboxGroup
          {...args}
          onChange={(opts) => {
            setOptions(opts);
            console.log(opts);
          }}
        />
        <div className="flex items-center gap-2">
          Selected options:
          {options
            .filter((opt) => opt.checked)
            .map((opt) => (
              <span>{opt.id}</span>
            ))}
        </div>
      </div>
    );
  },
};

export const Gallery: Story = {
  args: {
    options: [
      {
        id: "1",
        value: "1",
        label: {
          label: "Option 1",
        },

        onCheckedChange: (checked) => {
          console.log(!!checked);
        },
      },
      {
        id: "2",
        value: "2",
        label: {
          label: "Option 2",
        },
      },
      {
        id: "3",
        value: "3",
        label: {
          label: "Option 3",
        },
      },
    ],
  },
  render: (args) => {
    return (
      <div className="flex flex-col gap-4">
        <CheckboxGroup {...args} />
        <div className="w-[50%]">
          <CheckboxGroup {...args} order="rtl" alignment="spaced" />
        </div>
        <div className="w-[50%]">
          <CheckboxGroup {...args} alignment="spaced" />
        </div>
        <CheckboxGroup
          {...args}
          label={{ label: "Choose an option" }}
          description="This is a test description"
        />
        <CheckboxGroup
          {...args}
          label={{ label: "Choose an option" }}
          description="This is a test description"
          isError
          helperText="This is a test helper text"
        />
        <CheckboxGroup
          {...args}
          label={{ label: "Choose an option" }}
          orientation="horizontal"
          description="This is a test description"
        />
      </div>
    );
  },
};
