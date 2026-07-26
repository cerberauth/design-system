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
      theme === "dark" ? "dark" : "",
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

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "error",
    },
  },
  decorators: [withTheme],
};

export default preview;
