import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from "@cerberauth/ui";
import { ChevronsUpDown } from "lucide-react";

const meta: Meta = {
  title: "Components/Collapsible",
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-72">
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-medium">Starred repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm">
            <ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm mt-2">
        @radix-ui/react-collapsible
      </div>
      <CollapsibleContent className="space-y-2 mt-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          @radix-ui/react-dialog
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          @radix-ui/react-dropdown-menu
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
