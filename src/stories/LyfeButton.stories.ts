import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { fn } from "@storybook/test";

const meta = {
  title: "Library/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "error", "warning", "tertiary"], // options to choose from
      },
    },
    size: {
      control: {
        type: "select",
        options: ["large", "medium", "small"],
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    color: "primary",
    variant: "contained",
    children: "Label",
  },
};

export const Outlined: Story = {
  args: {
    color: "primary",
    variant: "outlined",
    children: "Label",
  },
};

export const Text: Story = {
  args: {
    color: "primary",
    variant: "text",
    children: "Label",
  },
};
