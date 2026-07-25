import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Separator } from "@cerberauth/ui";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-80">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Design System</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const separators = canvasElement.querySelectorAll('[data-slot="separator"]');
    await expect(separators.length).toBe(3);
    await expect(separators[0]).toHaveAttribute("data-orientation", "horizontal");
    await expect(separators[1]).toHaveAttribute("data-orientation", "vertical");
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-10 items-center gap-4 text-sm">
      <span>Home</span>
      <Separator orientation="vertical" />
      <span>About</span>
      <Separator orientation="vertical" />
      <span>Contact</span>
    </div>
  ),
};
