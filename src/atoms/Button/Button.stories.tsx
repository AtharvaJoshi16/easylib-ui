import type { Meta, StoryObj } from "@storybook/react";

import { Story } from "@storybook/blocks";
import { Loader, Star } from "lucide-react";
import { Button } from "./Button";
import { ButtonColors, ButtonSizes, ButtonVariants } from "./ButtonProps";
const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: ["contained", "outlined", "text", "link"],
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
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      table: {
        type: { summary: "ButtonSize" },
        defaultValue: { summary: "default" },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Trial: Story = {
  args: {
    children: "Button",
    loader: <Loader className="animate-spin" />,
  },
};

export const Gallery: Story = {
  args: {
    children: "Button",
  },
  render: () => {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <Button variant={ButtonVariants.Contained}>Button</Button>
          <Button
            variant={ButtonVariants.Contained}
            color={ButtonColors.Secondary}
          >
            Button
          </Button>
          <Button
            variant={ButtonVariants.Contained}
            color={ButtonColors.Destructive}
          >
            Button
          </Button>
          <Button
            variant={ButtonVariants.Contained}
            color={ButtonColors.Success}
          >
            Button
          </Button>
          <Button variant={ButtonVariants.Contained} color={ButtonColors.Gray}>
            Button
          </Button>
          <Button
            variant={ButtonVariants.Contained}
            color={ButtonColors.Warning}
          >
            Button
          </Button>
          <Button variant={ButtonVariants.Contained} color={ButtonColors.Dark}>
            Button
          </Button>
          <Button variant={ButtonVariants.Contained} color={ButtonColors.Light}>
            Button
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant={ButtonVariants.Outlined}>Button</Button>
          <Button
            variant={ButtonVariants.Outlined}
            color={ButtonColors.Secondary}
          >
            Button
          </Button>
          <Button
            variant={ButtonVariants.Outlined}
            color={ButtonColors.Destructive}
          >
            Button
          </Button>
          <Button
            variant={ButtonVariants.Outlined}
            color={ButtonColors.Success}
          >
            Button
          </Button>
          <Button variant={ButtonVariants.Outlined} color={ButtonColors.Gray}>
            Button
          </Button>
          <Button
            variant={ButtonVariants.Outlined}
            color={ButtonColors.Warning}
          >
            Button
          </Button>
          <Button variant={ButtonVariants.Outlined} color={ButtonColors.Dark}>
            Button
          </Button>
          <Button variant={ButtonVariants.Outlined} color={ButtonColors.Light}>
            Button
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant={ButtonVariants.Text}>Button</Button>
          <Button variant={ButtonVariants.Text} color={ButtonColors.Secondary}>
            Button
          </Button>
          <Button
            variant={ButtonVariants.Text}
            color={ButtonColors.Destructive}
          >
            Button
          </Button>
          <Button variant={ButtonVariants.Text} color={ButtonColors.Success}>
            Button
          </Button>
          <Button variant={ButtonVariants.Text} color={ButtonColors.Gray}>
            Button
          </Button>
          <Button variant={ButtonVariants.Text} color={ButtonColors.Warning}>
            Button
          </Button>
          <Button variant={ButtonVariants.Text} color={ButtonColors.Dark}>
            Button
          </Button>
          <Button variant={ButtonVariants.Text} color={ButtonColors.Light}>
            Button
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant={ButtonVariants.Link}>Button</Button>
          <Button variant={ButtonVariants.Link} color={ButtonColors.Secondary}>
            Button
          </Button>
          <Button
            variant={ButtonVariants.Link}
            color={ButtonColors.Destructive}
          >
            Button
          </Button>
          <Button variant={ButtonVariants.Link} color={ButtonColors.Success}>
            Button
          </Button>
          <Button variant={ButtonVariants.Link} color={ButtonColors.Gray}>
            Button
          </Button>
          <Button variant={ButtonVariants.Link} color={ButtonColors.Warning}>
            Button
          </Button>
          <Button variant={ButtonVariants.Link} color={ButtonColors.Dark}>
            Button
          </Button>
          <Button variant={ButtonVariants.Link} color={ButtonColors.Light}>
            Button
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant={ButtonVariants.Contained} size={ButtonSizes.Small}>
            Small
          </Button>
          <Button variant={ButtonVariants.Contained}>Default</Button>
          <Button variant={ButtonVariants.Contained} size={ButtonSizes.Large}>
            Large
          </Button>
          <Button variant={ButtonVariants.Contained} size={ButtonSizes.Icon}>
            <Star />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant={ButtonVariants.Contained} loading>
            Loading
          </Button>
          <Button variant={ButtonVariants.Contained} disabled>
            Disabled
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant={ButtonVariants.Contained} startIcon={<Star />}>
            Button
          </Button>
          <Button variant={ButtonVariants.Contained} endIcon={<Star />}>
            Button
          </Button>
        </div>
        <div className="flex items-center gap-4 w-[50%]">
          <Button
            variant={ButtonVariants.Text}
            startIcon={<Star />}
            className="w-full"
            alignment="spaced"
          >
            Menu Item
          </Button>
          <Button
            variant={ButtonVariants.Text}
            endIcon={<Star />}
            className="w-full"
            alignment="spaced"
          >
            Menu Item
          </Button>
        </div>
      </div>
    );
  },
};
