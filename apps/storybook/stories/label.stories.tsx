import type { Meta, StoryObj } from "@storybook/react";
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
};

export const WithInput: Story = {
  name: "With input",
  render: () => (
    <div className="flex flex-col gap-2 w-72">
      <Label htmlFor="email-field">Email</Label>
      <Input id="email-field" type="email" placeholder="you@example.com" />
    </div>
  ),
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
