import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Checkbox } from "@cerberauth/ui";
import { Label } from "@cerberauth/ui";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => <Checkbox id="default" aria-label="Default checkbox" />,
  play: async ({ canvas, userEvent }) => {
    const checkbox = canvas.getByRole("checkbox");
    await expect(checkbox).toHaveAttribute("aria-checked", "false");

    await userEvent.click(checkbox);
    await expect(checkbox).toHaveAttribute("aria-checked", "true");

    await userEvent.click(checkbox);
    await expect(checkbox).toHaveAttribute("aria-checked", "false");
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Notifications enabled</Label>
    </div>
  ),
  play: async ({ canvas }) => {
    const checkbox = canvas.getByRole("checkbox", {
      name: "Notifications enabled",
    });
    await expect(checkbox).toHaveAttribute("aria-checked", "true");
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled" className="opacity-50">Disabled unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked" className="opacity-50">Disabled checked</Label>
      </div>
    </div>
  ),
};
