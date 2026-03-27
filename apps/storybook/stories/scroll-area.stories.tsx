import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea, ScrollBar, Separator } from "@cerberauth/ui";

const tags = Array.from({ length: 50 }, (_, i) => `Tag ${i + 1}`);
const artworks = [
  "Sunrise over the mountains",
  "Urban geometry",
  "Coastal silence",
  "Forest in fog",
  "Desert dunes at dusk",
  "Cityscape at night",
  "Ocean reflections",
  "Autumn leaves",
];

const meta: Meta = {
  title: "Components/ScrollArea",
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj;

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-64 w-48 rounded-md border p-4">
      <div className="pr-4">
        {tags.map((tag) => (
          <div key={tag}>
            <p className="text-sm">{tag}</p>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-80 whitespace-nowrap rounded-md border">
      <div className="flex w-max gap-4 p-4">
        {artworks.map((art) => (
          <div key={art} className="flex flex-col gap-2">
            <div className="h-32 w-48 rounded-md bg-muted flex items-center justify-center">
              <span className="text-xs text-center text-muted-foreground px-2">{art}</span>
            </div>
            <p className="text-xs text-muted-foreground">{art}</p>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};
