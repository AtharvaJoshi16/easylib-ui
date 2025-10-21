import type { Meta, StoryObj } from "@storybook/react";

import { Story } from "@storybook/blocks";
import { useState } from "react";
import { CheckboxGroup } from "./CheckboxGroup";
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
    description: "This is a test description",
    helperText: "This is a demo text",
    isError: true,
    classes: {
      wrapper: "w-[50%]",
    },
    options: [
      {
        label: { label: "Parent" },
        id: "parent",
        value: "parent-1",
        options: [
          {
            id: "1",
            value: "1",
            label: {
              label: "Option 1",
            },
            options: [
              {
                id: "nested-1",
                value: "nested-1",
                label: {
                  label: "Nested Option 1",
                },
              },
            ],
            checked: true,
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
            checked: true,
          },
          {
            id: "4",
            value: "4",
            label: {
              label: "Option 4",
            },
          },
          {
            id: "5",
            value: "5",
            label: {
              label: "Option 5",
            },
            disabled: true,
          },
        ],
      },
      {
        label: { label: "Parent 2" },
        id: "parent-2",
        value: "parent-2",
        options: [
          {
            id: "1x",
            value: "1x",
            label: {
              label: "Option 1",
            },
            checked: true,
            onCheckedChange: (checked) => {
              console.log(!!checked);
            },
          },
          {
            id: "2x",
            value: "2x",
            label: {
              label: "Option 2",
            },
          },
          {
            id: "3x",
            value: "3x",
            label: {
              label: "Option 3",
            },
            checked: true,
          },
          {
            id: "4x",
            value: "4x",
            label: {
              label: "Option 4",
            },
          },
        ],
      },
    ],
  },
  render: (args) => {
    const [options, setOptions] = useState(args.options);

    return (
      <div className="flex flex-col gap-4">
        <CheckboxGroup {...args} onChange={(opts) => setOptions(opts)} />
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
        checked: true,
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
        checked: true,
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
