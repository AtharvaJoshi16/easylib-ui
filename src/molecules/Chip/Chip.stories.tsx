import type { Meta, StoryObj } from "@storybook/react";

import { Story } from "@storybook/blocks";
import { Colors, Sizes } from "../../interfaces";
import { Chip } from "./Chip";
import { ChipTypes, ChipVariants } from "./ChipProps";
const meta = {
  title: "Components/Molecules/Chip",
  parameters: {
    layout: "centered",
  },
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined", "ghost", "mixed"],
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
    type: {
      control: "select",
      options: ["badge", "button", "toggle"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "md", "lg"],
    },
    selected: {
      control: "boolean",
    },
    rounded: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Trial: Story = {
  args: {
    label: "Chip",
    onDelete: () => {
      console.log("Deleted");
    },
  },
};

export const Gallery: Story = {
  args: {
    label: "Chip",
    type: ChipTypes.Button,
  },
  render: (args) => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Chip label="Badge" />
          <Chip label="Button" type={ChipTypes.Button} />
          <Chip label="Toggle" type={ChipTypes.Toggle} />
        </div>
        <div className="flex items-center gap-4">
          <Chip {...args} label="Contained" />
          <Chip {...args} label="Outlined" variant={ChipVariants.Outlined} />
          <Chip {...args} label="Ghost" variant={ChipVariants.Ghost} />
          <Chip {...args} label="Mixed" variant={ChipVariants.Mixed} />
        </div>
        <div className="flex items-center gap-4">
          <Chip {...args} color={Colors.Primary} />
          <Chip {...args} color={Colors.Secondary} />
          <Chip {...args} color={Colors.Success} />
          <Chip {...args} color={Colors.Destructive} />
          <Chip {...args} color={Colors.Warning} />
          <Chip {...args} color={Colors.Gray} />
          <Chip {...args} color={Colors.Dark} />
          <Chip {...args} color={Colors.Light} />
        </div>
        <div className="flex items-center gap-4">
          <Chip
            {...args}
            variant={ChipVariants.Outlined}
            color={Colors.Primary}
          />
          <Chip
            {...args}
            variant={ChipVariants.Outlined}
            color={Colors.Secondary}
          />
          <Chip
            {...args}
            variant={ChipVariants.Outlined}
            color={Colors.Success}
          />
          <Chip
            {...args}
            variant={ChipVariants.Outlined}
            color={Colors.Destructive}
          />
          <Chip
            {...args}
            variant={ChipVariants.Outlined}
            color={Colors.Warning}
          />
          <Chip {...args} variant={ChipVariants.Outlined} color={Colors.Gray} />
          <Chip {...args} variant={ChipVariants.Outlined} color={Colors.Dark} />
          <Chip
            {...args}
            variant={ChipVariants.Outlined}
            color={Colors.Light}
          />
        </div>
        <div className="flex items-center gap-4">
          <Chip {...args} variant={ChipVariants.Ghost} color={Colors.Primary} />
          <Chip
            {...args}
            variant={ChipVariants.Ghost}
            color={Colors.Secondary}
          />
          <Chip {...args} variant={ChipVariants.Ghost} color={Colors.Success} />
          <Chip
            {...args}
            variant={ChipVariants.Ghost}
            color={Colors.Destructive}
          />
          <Chip {...args} variant={ChipVariants.Ghost} color={Colors.Warning} />
          <Chip {...args} variant={ChipVariants.Ghost} color={Colors.Gray} />
          <Chip {...args} variant={ChipVariants.Ghost} color={Colors.Dark} />
          <Chip {...args} variant={ChipVariants.Ghost} color={Colors.Light} />
        </div>
        <div className="flex items-center gap-4">
          <Chip {...args} variant={ChipVariants.Mixed} color={Colors.Primary} />
          <Chip
            {...args}
            variant={ChipVariants.Mixed}
            color={Colors.Secondary}
          />
          <Chip {...args} variant={ChipVariants.Mixed} color={Colors.Success} />
          <Chip
            {...args}
            variant={ChipVariants.Mixed}
            color={Colors.Destructive}
          />
          <Chip {...args} variant={ChipVariants.Mixed} color={Colors.Warning} />
          <Chip {...args} variant={ChipVariants.Mixed} color={Colors.Gray} />
          <Chip {...args} variant={ChipVariants.Mixed} color={Colors.Dark} />
          <Chip {...args} variant={ChipVariants.Mixed} color={Colors.Light} />
        </div>
        <div className="flex items-center gap-4">
          <Chip label="Small" size={Sizes.Small} />
          <Chip label="Default" size={Sizes.Default} />
          <Chip label="Medium" size={Sizes.Medium} />
          <Chip label="Large" size={Sizes.Large} />
        </div>
        <div className="flex items-center gap-4">
          <Chip {...args} label="Rounded" rounded />
          <Chip
            {...args}
            label="Deletable"
            onDelete={() => console.log("Deleted")}
            rounded
          />
        </div>
      </div>
    );
  },
};
