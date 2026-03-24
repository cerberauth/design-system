import type { Meta, StoryObj } from "@storybook/react";
import { Textarea, Label } from "@cerberauth/ui";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => (
    <Textarea placeholder="Type your message here." className="w-80" />
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Textarea
      placeholder="This is disabled"
      disabled
      className="w-80"
    />
  ),
};
