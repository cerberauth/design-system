import type { Meta, StoryObj } from "@storybook/react";
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
  render: () => <Switch />,
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
};
