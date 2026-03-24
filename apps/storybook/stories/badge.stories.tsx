import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@cerberauth/ui";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "Visual style of the badge",
    },
    children: {
      control: "text",
      description: "Badge label",
    },
  },
  args: {
    children: "Badge",
    variant: "default",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// ─── Individual Stories ───────────────────────────────────────────────────────

export const Default: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Error" },
};

export const Outline: Story = {
  args: { variant: "outline" },
};

// ─── All Variants ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: "All Variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-3 items-center p-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

// ─── Real-world Usage ─────────────────────────────────────────────────────────

export const UsageExamples: Story = {
  name: "Usage Examples",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-3 items-center p-4">
      <Badge variant="default">New</Badge>
      <Badge variant="secondary">Beta</Badge>
      <Badge variant="destructive">Deprecated</Badge>
      <Badge variant="outline">v1.2.0</Badge>
      <Badge variant="secondary">In review</Badge>
      <Badge variant="default">Published</Badge>
    </div>
  ),
};
