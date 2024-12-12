import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../components/Typography";

const meta = {
  title: "Library/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    colorVariant: { control: "color" },
  },
  args: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    style: { padding: "10px" },
    colorVariant: "main",
    variant: "large_semibold_uppercase",
    children:
      "Lyfegen solutions are trusted by health insurances, governments and hospital payers around the globe.",
  },
};

export const Secondary: Story = {
  args: {
    colorVariant: "dark",
    variant: "h1",
    children:
      "Lyfegen solutions are trusted by health insurances, governments and hospital payers around the globe.",
    textTransform: "capitalize",
  },
};
