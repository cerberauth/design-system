import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@cerberauth/ui";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: { value: 60, className: "w-80" },
};

export const AllStates: Story = {
  name: "All states",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div className="space-y-1">
        <p className="text-sm">0%</p>
        <Progress value={0} />
      </div>
      <div className="space-y-1">
        <p className="text-sm">33%</p>
        <Progress value={33} />
      </div>
      <div className="space-y-1">
        <p className="text-sm">66%</p>
        <Progress value={66} />
      </div>
      <div className="space-y-1">
        <p className="text-sm">100%</p>
        <Progress value={100} />
      </div>
    </div>
  ),
};
