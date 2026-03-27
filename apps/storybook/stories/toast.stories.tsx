import type { Meta, StoryObj } from "@storybook/react";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Button,
} from "@cerberauth/ui";

const meta: Meta = {
  title: "Components/Toast",
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj;

function ToastDemo({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      {children}
      <ToastViewport className="relative flex flex-col gap-2 p-0 static" />
    </ToastProvider>
  );
}

export const Default: Story = {
  render: () => (
    <ToastDemo>
      <Toast open>
        <div className="grid gap-1">
          <ToastTitle>Scheduled</ToastTitle>
          <ToastDescription>
            Your event has been scheduled for tomorrow.
          </ToastDescription>
        </div>
        <ToastClose />
      </Toast>
    </ToastDemo>
  ),
};

export const WithAction: Story = {
  name: "With action",
  render: () => (
    <ToastDemo>
      <Toast open>
        <div className="grid gap-1">
          <ToastTitle>Uh oh! Something went wrong.</ToastTitle>
          <ToastDescription>There was a problem with your request.</ToastDescription>
        </div>
        <ToastAction altText="Try again">Try again</ToastAction>
        <ToastClose />
      </Toast>
    </ToastDemo>
  ),
};

export const Destructive: Story = {
  render: () => (
    <ToastDemo>
      <Toast open variant="destructive">
        <div className="grid gap-1">
          <ToastTitle>Error</ToastTitle>
          <ToastDescription>Your session has expired. Please log in again.</ToastDescription>
        </div>
        <ToastAction altText="Login">Login</ToastAction>
        <ToastClose />
      </Toast>
    </ToastDemo>
  ),
};
