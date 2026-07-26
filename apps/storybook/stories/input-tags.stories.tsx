import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { InputTags } from "@cerberauth/ui";
import { useState } from "react";

const meta: Meta<typeof InputTags> = {
  title: "Components/InputTags",
  component: InputTags,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof InputTags>;

export const Default: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(["react", "typescript"]);
    return (
      <div className="w-80">
        <InputTags
          value={tags}
          onChange={setTags}
          placeholder="Add a tag..."
        />
      </div>
    );
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText("react")).toBeInTheDocument();
    await expect(canvas.getByText("typescript")).toBeInTheDocument();

    // Remove a tag via its remove button.
    await userEvent.click(canvas.getByRole("button", { name: "Remove react" }));
    await expect(canvas.queryByText("react")).not.toBeInTheDocument();

    // Type a new tag and press Enter to add it.
    const input = canvas.getByPlaceholderText("Add a tag...");
    await userEvent.type(input, "storybook{Enter}");
    await expect(canvas.getByText("storybook")).toBeInTheDocument();
    await expect(input).toHaveValue("");
  },
};

export const Empty: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>([]);
    return (
      <div className="w-80">
        <InputTags
          value={tags}
          onChange={setTags}
          placeholder="Type and press Enter..."
        />
      </div>
    );
  },
};
