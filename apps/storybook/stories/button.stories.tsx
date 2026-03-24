import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@cerberauth/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
      description: "Visual style of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "Size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
    children: {
      control: "text",
      description: "Button label",
    },
    asChild: {
      control: false,
      description: "Render as child element via Radix Slot",
    },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Individual Stories ───────────────────────────────────────────────────────

export const Default: Story = {};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Destructive: Story = {
  args: { variant: "destructive" },
};

export const Small: Story = {
  args: { size: "sm" },
};

export const Large: Story = {
  args: { size: "lg" },
};


export const Disabled: Story = {
  args: { disabled: true },
};

// ─── All Variants ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: "All Variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-3 items-center p-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

// ─── All Sizes ────────────────────────────────────────────────────────────────

export const AllSizes: Story = {
  name: "All Sizes",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-3 items-end p-4">
      <Button size="sm">Small (h-9)</Button>
      <Button size="default">Default (h-10)</Button>
      <Button size="lg">Large (h-11)</Button>
    </div>
  ),
};

// ─── Disabled State ───────────────────────────────────────────────────────────

export const DisabledAllVariants: Story = {
  name: "Disabled — All Variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-3 items-center p-4">
      <Button variant="default" disabled>Default</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="outline" disabled>Outline</Button>
      <Button variant="ghost" disabled>Ghost</Button>
      <Button variant="destructive" disabled>Destructive</Button>
    </div>
  ),
};

// ─── As Child (link) ──────────────────────────────────────────────────────────

export const AsChildLink: Story = {
  name: "asChild — renders as <a>",
  parameters: { controls: { disable: true } },
  render: () => (
    <Button asChild>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">Open link</a>
    </Button>
  ),
};
