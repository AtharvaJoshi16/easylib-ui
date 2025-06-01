import type { Meta, StoryObj } from "@storybook/react";

import { Colors, Sizes } from "@/interfaces";
import { Story } from "@storybook/blocks";
import { RadioGroup } from "./RadioGroup";
import { RadioGroupVariants } from "./RadioGroupProps";
const meta = {
  title: "Components/Molecules/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "inverse"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
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
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Trial: Story = {
  args: {
    defaultValue: "option1",
    label: {
      label: "Select an option",
    },
    description: "This is a test description",
    helperText: "This is test helper text",
    isError: false,
    options: [
      {
        id: "option1",
        value: "option1",
        label: {
          label: "Option 1",
        },
      },
      {
        id: "option2",
        value: "option2",
        label: {
          label: "Option 2",
        },
      },
      {
        id: "option3",
        value: "option3",
        label: {
          label: "Option 3",
        },
      },
    ],
  },
};

export const Gallery: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    defaultValue: "1",
    options: [
      {
        id: "1",
        value: "1",
        label: {
          label: "",
        },
      },
    ],
  },
  render: (args) => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <RadioGroup {...args} color={Colors.Primary} />
          <RadioGroup {...args} color={Colors.Secondary} />
          <RadioGroup {...args} color={Colors.Success} />
          <RadioGroup {...args} color={Colors.Destructive} />
          <RadioGroup {...args} color={Colors.Warning} />
          <RadioGroup {...args} color={Colors.Gray} />
          <RadioGroup {...args} color={Colors.Dark} />
          <RadioGroup {...args} color={Colors.Light} />
        </div>
        <div className="flex items-center gap-2">
          <RadioGroup
            {...args}
            variant={RadioGroupVariants.Inverse}
            color={Colors.Primary}
          />
          <RadioGroup
            {...args}
            variant={RadioGroupVariants.Inverse}
            color={Colors.Secondary}
          />
          <RadioGroup
            {...args}
            variant={RadioGroupVariants.Inverse}
            color={Colors.Success}
          />
          <RadioGroup
            {...args}
            variant={RadioGroupVariants.Inverse}
            color={Colors.Destructive}
          />
          <RadioGroup
            {...args}
            variant={RadioGroupVariants.Inverse}
            color={Colors.Warning}
          />
          <RadioGroup
            {...args}
            variant={RadioGroupVariants.Inverse}
            color={Colors.Gray}
          />
          <RadioGroup
            {...args}
            variant={RadioGroupVariants.Inverse}
            color={Colors.Dark}
          />
          <RadioGroup
            {...args}
            variant={RadioGroupVariants.Inverse}
            color={Colors.Light}
          />
        </div>
        <div className="flex items-center gap-2">
          <RadioGroup
            {...args}
            variant={RadioGroupVariants.Inverse}
            size={Sizes.Small}
          />
          <RadioGroup
            {...args}
            variant={RadioGroupVariants.Inverse}
            color={Colors.Primary}
          />
          <RadioGroup
            {...args}
            variant={RadioGroupVariants.Inverse}
            color={Colors.Success}
            size={Sizes.Medium}
          />
          <RadioGroup
            {...args}
            variant={RadioGroupVariants.Inverse}
            color={Colors.Destructive}
            size={Sizes.Large}
          />

          <RadioGroup {...args} color={Colors.Destructive} size={Sizes.Large} />
          <RadioGroup {...args} color={Colors.Success} size={Sizes.Medium} />
          <RadioGroup {...args} color={Colors.Primary} />
          <RadioGroup {...args} size={Sizes.Small} />
        </div>
        <RadioGroup
          {...{
            defaultValue: "option1",
            label: {
              label: "Select an option",
            },
            description: "This is a test description",
            helperText: "This is test helper text",
            isError: false,
            options: [
              {
                id: "option1",
                value: "option1",
                label: {
                  label: "Option 1",
                },
              },
              {
                id: "option2",
                value: "option2",
                label: {
                  label: "Option 2",
                },
              },
              {
                id: "option3",
                value: "option3",
                label: {
                  label: "Option 3",
                },
              },
            ],
          }}
        />
        <RadioGroup
          {...{
            defaultValue: "option1",
            label: {
              label: "Select an option",
            },
            helperText: "This is test helper text",
            isError: true,
            options: [
              {
                id: "option1",
                value: "option1",
                label: {
                  label: "Option 1",
                },
              },
              {
                id: "option2",
                value: "option2",
                label: {
                  label: "Option 2",
                },
              },
              {
                id: "option3",
                value: "option3",
                label: {
                  label: "Option 3",
                },
              },
            ],
          }}
        />
        <RadioGroup
          {...{
            defaultValue: "option1",
            label: {
              label: "Select an option",
            },
            orientation: "horizontal",
            description: "This is a test description",
            helperText: "This is test helper text",
            isError: false,
            options: [
              {
                id: "option1",
                value: "option1",
                label: {
                  label: "Option 1",
                },
              },
              {
                id: "option2",
                value: "option2",
                label: {
                  label: "Option 2",
                },
              },
              {
                id: "option3",
                value: "option3",
                label: {
                  label: "Option 3",
                },
              },
            ],
          }}
        />
      </div>
    );
  },
};
