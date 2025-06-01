import type { Meta, StoryObj } from "@storybook/react";

import { Colors, Sizes } from "@/interfaces";
import { Story } from "@storybook/blocks";
import { X } from "lucide-react";
import { Checkbox } from "./Checkbox";
import { CheckboxVariants } from "./CheckboxProps";
const meta = {
  title: "Components/Atoms/Checkbox",
  component: Checkbox,
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
    variant: {
      control: "select",
      options: ["contained", "outlined"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Trial: Story = {
  args: {
    id: "test",
    label: {
      id: "test",
      className: "font-regular",
      label: "Accept terms and conditions",
    },
    description: "This is a demo description",
    helperText: "This is a demo helper text",
    //  checkIcon: <X className="m-auto h-3 w-3" strokeWidth={3} />,
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
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <Checkbox {...args} />
          <Checkbox {...args} color={Colors.Secondary} />
          <Checkbox {...args} color={Colors.Success} />
          <Checkbox {...args} color={Colors.Destructive} />
          <Checkbox {...args} color={Colors.Warning} />
          <Checkbox {...args} color={Colors.Gray} />
          <Checkbox {...args} color={Colors.Dark} />
          <Checkbox {...args} color={Colors.Light} />
        </div>
        <div className="flex items-center gap-4">
          <Checkbox variant={CheckboxVariants.Outlined} {...args} />
          <Checkbox
            variant={CheckboxVariants.Outlined}
            {...args}
            color={Colors.Secondary}
          />
          <Checkbox
            variant={CheckboxVariants.Outlined}
            {...args}
            color={Colors.Success}
          />
          <Checkbox
            variant={CheckboxVariants.Outlined}
            {...args}
            color={Colors.Destructive}
          />
          <Checkbox
            variant={CheckboxVariants.Outlined}
            {...args}
            color={Colors.Warning}
          />
          <Checkbox
            variant={CheckboxVariants.Outlined}
            {...args}
            color={Colors.Gray}
          />
          <Checkbox
            variant={CheckboxVariants.Outlined}
            {...args}
            color={Colors.Dark}
          />
          <Checkbox
            variant={CheckboxVariants.Outlined}
            {...args}
            color={Colors.Light}
          />
        </div>
        <div className="flex items-center gap-4">
          <Checkbox {...args} size={Sizes.Small} />
          <Checkbox {...args} color={Colors.Secondary} />
          <Checkbox {...args} size={Sizes.Medium} color={Colors.Success} />
          <Checkbox {...args} size={Sizes.Large} color={Colors.Destructive} />
        </div>
        <Checkbox
          {...{
            label: {
              id: "test",
              className: "font-regular",
              label: "Custom check icon",
            },
            checked: true,
            variant: CheckboxVariants.Outlined,
            color: Colors.Destructive,
            checkIcon: <X className="m-auto h-3 w-3" strokeWidth={3} />,
          }}
        />
        <Checkbox
          {...{
            label: {
              id: "test",
              className: "font-regular",
              label: "Accept terms and conditions",
            },
            description: "This is a demo description",
            helperText: "This is a demo helper text",
          }}
        />
        <Checkbox
          {...{
            label: {
              id: "test",
              className: "font-regular",
              label: "Accept terms and conditions",
            },
            description: "This is a demo description",
            helperText: "This is a demo helper text",
            isError: true,
          }}
        />
        <Checkbox
          {...{
            label: {
              id: "test",
              className: "font-regular",
              label: "Accept terms and conditions",
            },
            order: "rtl",
          }}
        />
        <Checkbox
          {...{
            label: {
              id: "test",
              label: "Demo Field 1 Description",
            },
          }}
          alignment="spaced"
          order="rtl"
        />
      </div>
    );
  },
};
