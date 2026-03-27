import type { Meta, StoryObj } from "@storybook/react";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
  Input,
  Checkbox,
} from "@cerberauth/ui";

const meta: Meta = {
  title: "Components/Field",
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Field className="w-80">
      <FieldLabel htmlFor="email">Email address</FieldLabel>
      <Input id="email" type="email" placeholder="you@example.com" />
      <FieldDescription>We&apos;ll never share your email.</FieldDescription>
    </Field>
  ),
};

export const WithError: Story = {
  name: "With error",
  render: () => (
    <Field className="w-80">
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" defaultValue="ab" aria-invalid />
      <FieldError>Username must be at least 3 characters.</FieldError>
    </Field>
  ),
};

export const FieldSetExample: Story = {
  name: "FieldSet",
  render: () => (
    <FieldSet className="w-80">
      <FieldLegend>Account preferences</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Full name</FieldLabel>
          <Input id="name" placeholder="John Doe" />
        </Field>
        <Field>
          <FieldLabel htmlFor="email2">Email</FieldLabel>
          <Input id="email2" type="email" placeholder="john@example.com" />
          <FieldDescription>Used for login and notifications.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

export const Horizontal: Story = {
  name: "Horizontal orientation",
  render: () => (
    <div className="w-96">
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="notifications">
            <Checkbox id="notifications" />
            Email notifications
          </FieldLabel>
          <FieldDescription>Receive updates via email.</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="marketing">
            <Checkbox id="marketing" />
            Marketing emails
          </FieldLabel>
          <FieldDescription>Tips and product updates.</FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  ),
};
