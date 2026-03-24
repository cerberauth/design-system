import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@cerberauth/ui";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is CerberAuth?</AccordionTrigger>
        <AccordionContent>
          CerberAuth is an open-source authentication platform built for
          developers who need flexibility without compromise.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it production-ready?</AccordionTrigger>
        <AccordionContent>
          Yes. CerberAuth is battle-tested and used in production by teams of
          all sizes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I get started?</AccordionTrigger>
        <AccordionContent>
          Install the SDK, configure your provider, and add authentication to
          your app in minutes.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  name: "Multiple open",
  render: () => (
    <Accordion type="multiple" className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section A</AccordionTrigger>
        <AccordionContent>Content for section A.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section B</AccordionTrigger>
        <AccordionContent>Content for section B.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
