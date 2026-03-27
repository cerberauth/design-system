import type { Preview, Decorator } from "@storybook/react";
import "./preview.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Toggle light / dark mode",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", icon: "sun", title: "Light" },
        { value: "dark", icon: "moon", title: "Dark" },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals["theme"] as string | undefined;
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "dark" : ""
    );
    document.documentElement.style.backgroundColor =
      theme === "dark" ? "var(--token-bg)" : "var(--token-bg)";
  }
  return Story();
};

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
  },
  decorators: [withTheme],
};

export default preview;
