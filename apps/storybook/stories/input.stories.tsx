import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Input } from "@cerberauth/ui";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label rendered above the input",
    },
    error: {
      control: "text",
      description: "Error message rendered below the input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "url", "tel"],
      description: "HTML input type",
    },
  },
  args: {
    placeholder: "Enter text...",
    type: "text",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// ─── Individual Stories ───────────────────────────────────────────────────────

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByPlaceholderText("Enter text...");
    await userEvent.type(input, "Hello world");
    await expect(input).toHaveValue("Hello world");
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    type: "email",
  },
};

export const WithError: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    type: "email",
    error: "Please enter a valid email address.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "johndoe",
    disabled: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText("johndoe")).toBeDisabled();
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "••••••••",
    type: "password",
  },
};

// ─── All States ───────────────────────────────────────────────────────────────

export const AllStates: Story = {
  name: "All States",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-6 p-4 w-80">
      <Input label="Default" placeholder="Enter text..." />
      <Input
        label="With value"
        placeholder="hello@cerberauth.com"
        defaultValue="hello@cerberauth.com"
      />
      <Input
        label="With error"
        placeholder="you@example.com"
        defaultValue="not-an-email"
        error="Please enter a valid email."
        type="email"
      />
      <Input label="Disabled" placeholder="Cannot edit" disabled />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByPlaceholderText("hello@cerberauth.com"),
    ).toHaveValue("hello@cerberauth.com");
    await expect(canvas.getByPlaceholderText("Cannot edit")).toBeDisabled();
  },
};
