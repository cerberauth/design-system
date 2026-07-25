import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardContent, CardHeader, CardTitle, CardDescription, Button, Input, Label } from "@cerberauth/ui";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="tab-name">Name</Label>
              <Input id="tab-name" defaultValue="John Doe" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="tab-username">Username</Label>
              <Input id="tab-username" defaultValue="@johndoe" />
            </div>
            <Button>Save changes</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
            <Button>Save password</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
  play: async ({ canvas, userEvent }) => {
    const accountTab = canvas.getByRole("tab", { name: "Account" });
    const passwordTab = canvas.getByRole("tab", { name: "Password" });
    await expect(accountTab).toHaveAttribute("aria-selected", "true");
    await expect(canvas.getByText("Save changes")).toBeVisible();

    await userEvent.click(passwordTab);
    await expect(passwordTab).toHaveAttribute("aria-selected", "true");
    await expect(accountTab).toHaveAttribute("aria-selected", "false");
    await expect(canvas.getByText("Save password")).toBeVisible();
  },
};
