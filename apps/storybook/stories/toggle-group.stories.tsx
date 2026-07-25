import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { ToggleGroup, ToggleGroupItem } from "@cerberauth/ui";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  play: async ({ canvas, userEvent }) => {
    const bold = canvas.getByRole("button", { name: "Bold" });
    const italic = canvas.getByRole("button", { name: "Italic" });
    await expect(bold).toHaveAttribute("aria-pressed", "false");

    // "multiple" mode: items toggle independently.
    await userEvent.click(bold);
    await userEvent.click(italic);
    await expect(bold).toHaveAttribute("aria-pressed", "true");
    await expect(italic).toHaveAttribute("aria-pressed", "true");

    await userEvent.click(bold);
    await expect(bold).toHaveAttribute("aria-pressed", "false");
    await expect(italic).toHaveAttribute("aria-pressed", "true");
  },
};

export const SingleSelect: Story = {
  name: "Single select (alignment)",
  render: () => (
    <ToggleGroup type="single" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify">
        <AlignJustify className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  play: async ({ canvas, userEvent }) => {
    const left = canvas.getByRole("radio", { name: "Align left" });
    const center = canvas.getByRole("radio", { name: "Align center" });
    await expect(left).toHaveAttribute("aria-checked", "true");

    // "single" mode: selecting a new option deselects the previous one.
    await userEvent.click(center);
    await expect(center).toHaveAttribute("aria-checked", "true");
    await expect(left).toHaveAttribute("aria-checked", "false");
  },
};

export const Outline: Story = {
  render: () => (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
