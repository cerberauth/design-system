import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
} from "@cerberauth/ui";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// ─── Individual Stories ───────────────────────────────────────────────────────

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          A short description of what this card is about.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-fg">
          Card content goes here. You can put any content inside a card.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Action</Button>
        <Button variant="outline" size="sm">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};

// ─── Content Only ─────────────────────────────────────────────────────────────

export const ContentOnly: Story = {
  name: "Content Only",
  render: () => (
    <Card className="w-80">
      <CardContent className="pt-6">
        <p className="text-sm text-fg">A card with content only — no header or footer.</p>
      </CardContent>
    </Card>
  ),
};

// ─── With Badge ───────────────────────────────────────────────────────────────

export const WithBadge: Story = {
  name: "With Badge",
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>API Key</CardTitle>
          <Badge variant="secondary">Active</Badge>
        </div>
        <CardDescription>
          Used to authenticate requests to the CerberAuth API.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <code className="block text-xs font-mono bg-muted text-muted-fg px-3 py-2 rounded-md break-all">
          ca_live_••••••••••••••••3f9a
        </code>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm" variant="outline">Reveal</Button>
        <Button size="sm" variant="destructive">Revoke</Button>
      </CardFooter>
    </Card>
  ),
};

// ─── Multiple Cards ───────────────────────────────────────────────────────────

export const MultipleCards: Story = {
  name: "Multiple Cards — Grid",
  parameters: { layout: "padded" },
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
      {[
        { title: "Total Users", value: "12,483", badge: "↑ 12%", badgeVariant: "default" as const },
        { title: "Active Sessions", value: "2,891", badge: "↑ 4%", badgeVariant: "secondary" as const },
        { title: "Failed Logins", value: "47", badge: "↓ 8%", badgeVariant: "destructive" as const },
      ].map(({ title, value, badge, badgeVariant }) => (
        <Card key={title}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription>{title}</CardDescription>
              <Badge variant={badgeVariant}>{badge}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-fg">{value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};
