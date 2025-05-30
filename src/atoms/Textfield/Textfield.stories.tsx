import type { Meta, StoryObj } from "@storybook/react";

import { Colors } from "@/interfaces/Colors";
import { Story } from "@storybook/blocks";
import { Check, EyeClosed, Info, Search } from "lucide-react";
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
      options: ["text", "date", "search", "email", "number", "file"],
    },
    helperText: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    description: {
      control: "text",
    },
    isError: {
      control: "boolean",
    },
    startIcon: {
      control: "object",
    },
    label: {
      control: "object",
    },
    endIcon: {
      control: "object",
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
    helperText: "This is a demo error text",
    description: "This is a demo description",
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

const PasswordHelper = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <Check className="h-4 w-4 text-success" />
        Atleast 8 characters
      </div>
      <div className="flex items-center gap-1">
        <Check className="h-4 w-4 text-success" />
        Atleast 1 uppercase character
      </div>
      <div className="flex items-center gap-1">
        <Check className="h-4 w-4 text-success" />
        Atleast 1 lowercase character
      </div>
      <div className="flex items-center gap-1">
        <Check className="h-4 w-4 text-success" />
        Atleast 1 digit
      </div>
      <div className="flex items-center gap-1">
        <Check className="h-4 w-4 text-success" />
        Atleast 1 special character
      </div>
    </div>
  );
};

const ErrorHelperText = () => {
  return (
    <div className="flex items-center gap-1">
      <Info className="h-3 w-3" />
      This is demo helper text with icon
    </div>
  );
};

export const Gallery: Story = {
  args: {
    id: "test",
    placeholder: "Enter email",
  },
  render: (args) => {
    return (
      <div className="m-4 grid grid-cols-2 gap-4">
        <Textfield {...args} classes={{ inputWrapper: "my-auto" }} />
        <Textfield
          {...args}
          label={{ id: "test", children: "Email" }}
          description="This is a demo description"
          startIcon={<Search className="h-5 w-5 text-slate-400" />}
        />
        <Textfield
          {...args}
          label={{ id: "test", children: "Email" }}
          description="This is a demo description"
          startIcon={<Search className="h-5 w-5 text-slate-400" />}
          helperText={<ErrorHelperText />}
          isError
        />
        <Textfield
          {...args}
          placeholder="Enter password"
          label={{ id: "test", children: "Password" }}
          type="password"
          description={<PasswordHelper />}
          endIcon={<EyeClosed className="h-5 w-5 text-slate-400" />}
        />
        <Textfield
          label={{ id: "test", children: "Choose Resume" }}
          type="file"
        />
        <Textfield
          label={{ id: "test", children: "Choose Resume" }}
          type="file"
          color={Colors.Secondary}
        />
        <Textfield
          label={{ id: "test", children: "Choose Resume" }}
          type="file"
          color={Colors.Success}
        />
        <Textfield
          label={{ id: "test", children: "Choose Resume" }}
          type="file"
          color={Colors.Destructive}
        />
        <Textfield
          label={{ id: "test", children: "Choose Resume" }}
          type="file"
          color={Colors.Warning}
        />
        <Textfield
          label={{ id: "test", children: "Choose Resume" }}
          type="file"
          color={Colors.Gray}
        />
        <Textfield
          label={{ id: "test", children: "Choose Resume" }}
          type="file"
          color={Colors.Dark}
        />
        <Textfield
          label={{
            id: "test",
            children: "Choose resume",
          }}
          type="file"
          color={Colors.Light}
        />
      </div>
    );
  },
};
