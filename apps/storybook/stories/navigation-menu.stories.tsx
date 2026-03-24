import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@cerberauth/ui";

const meta: Meta = {
  title: "Components/NavigationMenu",
  tags: ["autodocs"],
  parameters: { controls: { disable: true }, layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-80">
              <li>
                <NavigationMenuLink href="#" className="block p-3 rounded-md hover:bg-accent">
                  <div className="font-medium mb-1">Introduction</div>
                  <p className="text-sm text-muted-foreground">
                    Re-usable components built with Radix UI and Tailwind CSS.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#" className="block p-3 rounded-md hover:bg-accent">
                  <div className="font-medium mb-1">Installation</div>
                  <p className="text-sm text-muted-foreground">
                    How to install dependencies and structure your app.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#" className="block p-3 rounded-md hover:bg-accent">
                  <div className="font-medium mb-1">Typography</div>
                  <p className="text-sm text-muted-foreground">
                    Styles for headings, paragraphs, lists.
                  </p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 gap-3 p-4 w-96">
              {["Alert", "Badge", "Button", "Card", "Input", "Select"].map((c) => (
                <li key={c}>
                  <NavigationMenuLink href="#" className="block p-3 rounded-md hover:bg-accent text-sm font-medium">
                    {c}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="text-sm font-medium px-4 py-2 inline-block">
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
