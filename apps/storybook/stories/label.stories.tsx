import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Label, Input, Checkbox } from "@cerberauth/ui";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => <Label htmlFor="email">Email address</Label>,
  play: async ({ canvas }) => {
    const label = canvas.getByText("Email address");
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveAttribute("for", "email");
  },
};

export const WithInput: Story = {
  name: "With input",
  render: () => (
    <div className="flex flex-col gap-2 w-72">
      <Label htmlFor="email-field">Email</Label>
      <Input id="email-field" type="email" placeholder="you@example.com" />
    </div>
  ),
  play: async ({ canvas }) => {
    // Associated via htmlFor/id, so the input must be reachable by its label text.
    await expect(canvas.getByLabelText("Email")).toBeInTheDocument();
  },
};

export const WithCheckbox: Story = {
  name: "With checkbox",
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="accept" />
      <Label htmlFor="accept">I agree to the terms of service</Label>
    </div>
  ),
};
