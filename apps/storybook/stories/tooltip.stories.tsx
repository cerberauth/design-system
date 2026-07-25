import type { Meta, StoryObj } from "@storybook/react";
import { expect, screen } from "storybook/test";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Button,
} from "@cerberauth/ui";

const meta: Meta = {
  title: "Components/Tooltip",
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
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
  play: async ({ canvas, userEvent }) => {
    await expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

    await userEvent.hover(canvas.getByRole("button", { name: "Hover me" }));
    await expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "Add to library",
    );

    await userEvent.unhover(canvas.getByRole("button", { name: "Hover me" }));
    await expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  },
};

export const Positions: Story = {
  render: () => (
    <div className="flex gap-4">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="capitalize">{side}</Button>
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>Tooltip on {side}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};
