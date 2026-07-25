import type { Meta, StoryObj } from "@storybook/react";
import { expect, screen } from "storybook/test";
import { toast } from "sonner";
import { Button, Sonner } from "@cerberauth/ui";

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
  play: async ({ canvas, userEvent }) => {
    // Sonner renders toasts in a portal, outside canvasElement.
    await userEvent.click(canvas.getByRole("button", { name: "Show toast" }));
    await expect(
      await screen.findByText("Event has been created"),
    ).toBeInTheDocument();
  },
};

export const Success: Story = {
  render: () => (
    <Button onClick={() => toast.success("Profile updated successfully!")}>
      Success
    </Button>
  ),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Success" }));
    await expect(
      await screen.findByText("Profile updated successfully!"),
    ).toBeInTheDocument();
  },
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
