import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { RadioGroup, RadioGroupItem, Label } from "@cerberauth/ui";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="opt1" />
        <Label htmlFor="opt1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="opt2" />
        <Label htmlFor="opt2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="opt3" />
        <Label htmlFor="opt3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
  play: async ({ canvas, userEvent }) => {
    const option1 = canvas.getByRole("radio", { name: "Option 1" });
    const option2 = canvas.getByRole("radio", { name: "Option 2" });
    await expect(option1).toHaveAttribute("aria-checked", "true");
    await expect(option2).toHaveAttribute("aria-checked", "false");

    await userEvent.click(option2);
    await expect(option2).toHaveAttribute("aria-checked", "true");
    await expect(option1).toHaveAttribute("aria-checked", "false");
  },
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="card" className="flex gap-6">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="card" id="card" />
        <Label htmlFor="card">Card</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="paypal" id="paypal" />
        <Label htmlFor="paypal">PayPal</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="apple" id="apple" />
        <Label htmlFor="apple">Apple Pay</Label>
      </div>
    </RadioGroup>
  ),
};
