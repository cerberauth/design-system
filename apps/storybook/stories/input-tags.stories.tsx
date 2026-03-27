import type { Meta, StoryObj } from "@storybook/react";
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
