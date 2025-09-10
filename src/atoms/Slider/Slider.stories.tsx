import { Colors, Sizes } from "@/interfaces";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Slider } from "./Slider";
import { SliderTypes, SliderVariants } from "./SliderProps";

const meta: Meta<typeof Slider> = {
  title: "Components/Atoms/Slider",
  component: Slider,
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
      options: ["default", "square", "stick"],
    },
    type: {
      control: "select",
      options: ["single", "double"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "md", "lg"],
    },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Trial: Story = {
  args: {
    defaultValue: [10, 30],
    type: SliderTypes.Double,
    disabled: false,
    isError: false,
  },
  render: (args) => {
    const [value, setValue] = useState<number[]>();
    return (
      <Slider
        label={{
          label: "Select a range",
        }}
        helperText="This is a helper text"
        description="This is a sample description"
        {...args}
        value={value}
        onValueChange={(val) => setValue(val)}
      />
    );
  },
};

export const Gallery: Story = {
  args: {
    defaultValue: [10, 30],
  },
  render: (args) => {
    return (
      <div className="flex flex-col gap-10 w-[600px] m-auto">
        <div className="flex gap-10 w-full items-center">
          Types
          <div className="flex flex-col gap-10 w-full">
            <Slider {...args} />
            <Slider {...args} variant={SliderVariants.Square} />
            <Slider {...args} variant={SliderVariants.Stick} />
          </div>
        </div>
        <hr />
        <div className="flex gap-10 w-full items-center">
          Colors
          <div className="flex flex-col gap-10 w-full">
            <Slider {...args} />
            <Slider {...args} color={Colors.Secondary} />
            <Slider {...args} color={Colors.Success} />
            <Slider {...args} color={Colors.Warning} />
            <Slider {...args} color={Colors.Destructive} />
            <Slider {...args} color={Colors.Light} />
            <Slider {...args} color={Colors.Dark} />
          </div>
        </div>
        <hr />
        <div className="flex gap-10 w-full items-center">
          Sizes
          <div className="flex flex-col gap-10 w-full">
            <Slider {...args} color={Colors.Primary} size={Sizes.Small} />
            <Slider {...args} />
            <Slider {...args} color={Colors.Primary} size={Sizes.Medium} />
            <Slider {...args} color={Colors.Primary} size={Sizes.Large} />
          </div>
        </div>
        <hr />
        <div className="flex gap-10 w-full items-center">
          Orientation
          <div className="flex gap-4 w-full">
            <Slider {...args} />
            <Slider {...args} orientation="vertical" />
          </div>
        </div>
      </div>
    );
  },
};
