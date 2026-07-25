import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import {
  SidebarProvider,
  SidebarInset,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarSeparator,
  Sidebar,
} from "@cerberauth/ui";
import {
  Home,
  Settings,
  Shield,
  Users,
  Key,
  LogOut,
  BarChart,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Dashboard", href: "#" },
  { icon: Users, label: "Users", href: "#" },
  { icon: Key, label: "API Keys", href: "#" },
  { icon: Shield, label: "Security", href: "#" },
  { icon: BarChart, label: "Analytics", href: "#" },
];

const meta: Meta = {
  title: "Components/Sidebar",
  tags: ["autodocs"],
  parameters: {
    controls: { disable: true },
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <Shield className="size-5 text-primary" />
            <span className="font-semibold text-sm">CerberAuth</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      <a href={item.href}>
                        <item.icon className="size-4" />
                        {item.label}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Settings className="size-4" />
                      Settings
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <LogOut className="size-4" />
                Log out
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">Dashboard</span>
        </header>
        <div className="p-6">
          <p className="text-muted-foreground text-sm">
            Main content area. Toggle the sidebar with the button above or press{" "}
            <kbd className="rounded border px-1 font-mono text-xs">⌘B</kbd>.
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
  play: async ({ canvas, userEvent, canvasElement }) => {
    await expect(
      canvas.getByRole("link", { name: /Dashboard/ }),
    ).toBeInTheDocument();

    const sidebar = canvasElement.querySelector('[data-slot="sidebar"]');
    await expect(sidebar).toHaveAttribute("data-state", "expanded");

    await userEvent.click(
      canvas.getByRole("button", { name: "Toggle Sidebar" }),
    );
    await expect(sidebar).toHaveAttribute("data-state", "collapsed");

    await userEvent.click(
      canvas.getByRole("button", { name: "Toggle Sidebar" }),
    );
    await expect(sidebar).toHaveAttribute("data-state", "expanded");
  },
};
