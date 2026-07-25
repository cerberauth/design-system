import type { Meta, StoryObj } from "@storybook/react";
import { expect, screen, within } from "storybook/test";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  Button,
} from "@cerberauth/ui";

const meta: Meta = {
  title: "Components/AlertDialog",
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  play: async ({ canvas, userEvent }) => {
    await expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();

    await userEvent.click(
      canvas.getByRole("button", { name: "Delete account" }),
    );
    const dialog = await screen.findByRole("alertdialog");
    await expect(
      within(dialog).getByText("Are you absolutely sure?"),
    ).toBeInTheDocument();

    await userEvent.click(within(dialog).getByRole("button", { name: "Cancel" }));
    await expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
  },
};
