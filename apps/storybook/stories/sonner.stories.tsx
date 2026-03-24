import type { Meta, StoryObj } from "@storybook/react";
import { Toaster as Sonner } from "sonner";
import { toast } from "sonner";
import { Button } from "@cerberauth/ui";

const meta: Meta = {
  title: "Components/Sonner",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Sonner richColors />
        <Story />
      </>
    ),
  ],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast("Event has been created")}>
      Show toast
    </Button>
  ),
};

export const Success: Story = {
  render: () => (
    <Button onClick={() => toast.success("Profile updated successfully!")}>
      Success
    </Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button
      variant="destructive"
      onClick={() => toast.error("Something went wrong.")}
    >
      Error
    </Button>
  ),
};

export const AllTypes: Story = {
  name: "All types",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("Default message")}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success("Success!")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error("Error!")}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.warning("Warning!")}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.info("Info message")}>
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event created", {
            description: "Monday, January 3rd at 6:00pm",
            action: { label: "Undo", onClick: () => console.log("Undo") },
          })
        }
      >
        With action
      </Button>
    </div>
  ),
};
