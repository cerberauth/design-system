import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Toggle } from "@cerberauth/ui";
import { Bold, Italic, Underline } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold className="size-4" />
    </Toggle>
  ),
  play: async ({ canvas, userEvent }) => {
    const toggle = canvas.getByRole("button", { name: "Toggle bold" });
    await expect(toggle).toHaveAttribute("aria-pressed", "false");

    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-pressed", "true");

    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-pressed", "false");
  },
};

export const WithText: Story = {
  render: () => (
    <Toggle>
      <Bold className="size-4" />
      Bold
    </Toggle>
  ),
};

export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div className="flex gap-2">
      <Toggle variant="default" aria-label="Bold">
        <Bold className="size-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Italic">
        <Italic className="size-4" />
      </Toggle>
    </div>
  ),
};

export const Toolbar: Story = {
  render: () => (
    <div className="flex gap-1 border rounded-md p-1 w-fit">
      <Toggle size="sm" aria-label="Bold">
        <Bold className="size-4" />
      </Toggle>
      <Toggle size="sm" aria-label="Italic">
        <Italic className="size-4" />
      </Toggle>
      <Toggle size="sm" aria-label="Underline">
        <Underline className="size-4" />
      </Toggle>
    </div>
  ),
};
