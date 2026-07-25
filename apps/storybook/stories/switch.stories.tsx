import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Switch, Label } from "@cerberauth/ui";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => <Switch aria-label="Default switch" />,
  play: async ({ canvas, userEvent }) => {
    const toggle = canvas.getByRole("switch");
    await expect(toggle).toHaveAttribute("aria-checked", "false");

    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-checked", "true");

    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-checked", "false");
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane mode</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="notifications" defaultChecked />
      <Label htmlFor="notifications">Enable notifications</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Switch id="d1" disabled />
        <Label htmlFor="d1" className="opacity-50">Disabled off</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="d2" disabled defaultChecked />
        <Label htmlFor="d2" className="opacity-50">Disabled on</Label>
      </div>
    </div>
  ),
  play: async ({ canvas, userEvent }) => {
    const off = canvas.getByRole("switch", { name: "Disabled off" });
    const on = canvas.getByRole("switch", { name: "Disabled on" });
    await expect(off).toBeDisabled();
    await expect(on).toBeDisabled();

    // Clicking a disabled switch must not change its state.
    await userEvent.click(off);
    await expect(off).toHaveAttribute("aria-checked", "false");
  },
};
