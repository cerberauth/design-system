import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { CopyButton, TooltipProvider } from "@cerberauth/ui";

const meta: Meta<typeof CopyButton> = {
  title: "Components/CopyButton",
  component: CopyButton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  render: () => (
    <CopyButton value="npm install @cerberauth/ui" label="Copy install command" />
  ),
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole("button", {
      name: "Copy install command",
    });
    // The test runner doesn't grant clipboard permissions, so this only
    // verifies the click is handled without throwing and the button
    // remains in the document — clipboard-write success is exercised by
    // the browser, not by this environment.
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
  },
};

export const InContext: Story = {
  name: "In context",
  render: () => (
    <div className="flex items-center gap-2 rounded-md border bg-muted px-3 py-2 font-mono text-sm">
      <span>npm install @cerberauth/ui</span>
      <CopyButton value="npm install @cerberauth/ui" />
    </div>
  ),
};
