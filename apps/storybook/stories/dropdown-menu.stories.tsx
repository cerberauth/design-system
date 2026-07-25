import type { Meta, StoryObj } from "@storybook/react";
import { expect, screen } from "storybook/test";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
  Button,
} from "@cerberauth/ui";
import { User, Settings, LogOut, CreditCard } from "lucide-react";

const meta: Meta = {
  title: "Components/DropdownMenu",
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="size-4" />
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="size-4" />
          Billing
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="size-4" />
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut className="size-4" />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  play: async ({ canvas, userEvent }) => {
    await expect(screen.queryByRole("menu")).not.toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Open menu" }));
    await expect(await screen.findByRole("menu")).toBeInTheDocument();
    const profileItem = screen.getByRole("menuitem", { name: /Profile/ });
    await expect(profileItem).toBeInTheDocument();

    // Selecting an item closes the menu.
    await userEvent.click(profileItem);
    await expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  },
};

export const WithCheckboxes: Story = {
  name: "With checkboxes",
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">View options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>Show toolbar</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Show status bar</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked>Show activity bar</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "View options" }));
    const toolbar = await screen.findByRole("menuitemcheckbox", {
      name: "Show toolbar",
    });
    const statusBar = screen.getByRole("menuitemcheckbox", {
      name: "Show status bar",
    });
    await expect(toolbar).toHaveAttribute("aria-checked", "true");
    await expect(statusBar).toHaveAttribute("aria-checked", "false");

    // Close the menu so the story doesn't end mid-interaction.
    await userEvent.keyboard("{Escape}");
    await expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  },
};

export const WithRadioGroup: Story = {
  name: "With radio group",
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Select position</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="bottom">
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
