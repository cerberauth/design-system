import type { Meta, StoryObj } from "@storybook/react";

// ─── Color Swatch ─────────────────────────────────────────────────────────────

interface ColorSwatchProps {
  token: string;
  label: string;
  textToken?: string;
}

function ColorSwatch({ token, label, textToken }: ColorSwatchProps) {
  return (
    <div className="flex items-center gap-3 min-w-0">
      <div
        className="h-10 w-16 shrink-0 rounded-md border border-border shadow-sm"
        style={{ backgroundColor: `var(${token})` }}
        aria-hidden="true"
      />
      <div className="min-w-0">
        <p className="text-sm font-medium text-fg truncate">{label}</p>
        <p className="text-xs font-mono text-muted-fg truncate">{token}</p>
        {textToken && (
          <p className="text-xs font-mono text-muted-fg truncate">{textToken}</p>
        )}
      </div>
    </div>
  );
}

// ─── Spacing Swatch ───────────────────────────────────────────────────────────

interface SpacingSwatchProps {
  token: string;
  label: string;
  value: string;
}

function SpacingSwatch({ token, label, value }: SpacingSwatchProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-6 shrink-0 rounded-sm bg-primary/30 border border-primary/40"
        style={{ width: `var(${token})` }}
        aria-hidden="true"
      />
      <div>
        <p className="text-sm font-medium text-fg">{label}</p>
        <p className="text-xs font-mono text-muted-fg">
          {token} · {value}
        </p>
      </div>
    </div>
  );
}

// ─── Radius Swatch ────────────────────────────────────────────────────────────

interface RadiusSwatchProps {
  token: string;
  label: string;
  value: string;
}

function RadiusSwatch({ token, label, value }: RadiusSwatchProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-12 w-12 shrink-0 bg-primary/20 border-2 border-primary"
        style={{ borderRadius: `var(${token})` }}
        aria-hidden="true"
      />
      <div>
        <p className="text-sm font-medium text-fg">{label}</p>
        <p className="text-xs font-mono text-muted-fg">
          {token} · {value}
        </p>
      </div>
    </div>
  );
}

// ─── Token Palette Component ──────────────────────────────────────────────────

function TokenPalette() {
  return (
    <div className="p-8 bg-bg min-h-screen font-sans">
      <h1 className="text-2xl font-bold text-fg mb-2">Design Tokens</h1>
      <p className="text-muted-fg mb-10">
        All semantic token values. Toggle the theme toolbar to see dark mode
        overrides.
      </p>

      {/* Colors */}
      <section aria-labelledby="colors-heading" className="mb-12">
        <h2 id="colors-heading" className="text-lg font-semibold text-fg mb-6 pb-2 border-b border-border">
          Color Tokens
        </h2>

        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-fg mb-4">
            Interactive
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ColorSwatch token="--token-primary" label="Primary" textToken="--token-primary-fg" />
            <ColorSwatch token="--token-primary-fg" label="Primary Foreground" />
            <ColorSwatch token="--token-secondary" label="Secondary" textToken="--token-secondary-fg" />
            <ColorSwatch token="--token-secondary-fg" label="Secondary Foreground" />
            <ColorSwatch token="--token-destructive" label="Destructive" textToken="--token-destructive-fg" />
            <ColorSwatch token="--token-destructive-fg" label="Destructive Foreground" />
            <ColorSwatch token="--token-accent" label="Accent" textToken="--token-accent-fg" />
            <ColorSwatch token="--token-accent-fg" label="Accent Foreground" />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-fg mb-4">
            Surface
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ColorSwatch token="--token-bg" label="Background" />
            <ColorSwatch token="--token-fg" label="Foreground" />
            <ColorSwatch token="--token-card" label="Card" />
            <ColorSwatch token="--token-card-fg" label="Card Foreground" />
            <ColorSwatch token="--token-popover" label="Popover" />
            <ColorSwatch token="--token-popover-fg" label="Popover Foreground" />
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-fg mb-4">
            Utility
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ColorSwatch token="--token-muted" label="Muted" />
            <ColorSwatch token="--token-muted-fg" label="Muted Foreground" />
            <ColorSwatch token="--token-border" label="Border" />
            <ColorSwatch token="--token-input" label="Input" />
            <ColorSwatch token="--token-ring" label="Ring" />
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section aria-labelledby="spacing-heading" className="mb-12">
        <h2 id="spacing-heading" className="text-lg font-semibold text-fg mb-6 pb-2 border-b border-border">
          Spacing Tokens
        </h2>
        <div className="flex flex-col gap-3">
          <SpacingSwatch token="--token-space-sm" label="Space SM" value="0.5rem / 8px" />
          <SpacingSwatch token="--token-space-md" label="Space MD" value="1rem / 16px" />
          <SpacingSwatch token="--token-space-lg" label="Space LG" value="2rem / 32px" />
          <SpacingSwatch token="--token-space-xl" label="Space XL" value="4rem / 64px" />
        </div>
      </section>

      {/* Radius */}
      <section aria-labelledby="radius-heading" className="mb-12">
        <h2 id="radius-heading" className="text-lg font-semibold text-fg mb-6 pb-2 border-b border-border">
          Border Radius Tokens
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <RadiusSwatch token="--token-radius-sm" label="Radius SM" value="0.25rem" />
          <RadiusSwatch token="--token-radius-md" label="Radius MD" value="0.375rem" />
          <RadiusSwatch token="--token-radius-lg" label="Radius LG" value="0.5rem" />
          <RadiusSwatch token="--token-radius-xl" label="Radius XL" value="0.75rem" />
          <RadiusSwatch token="--token-radius-full" label="Radius Full" value="9999px" />
        </div>
      </section>

      {/* Typography */}
      <section aria-labelledby="typography-heading">
        <h2 id="typography-heading" className="text-lg font-semibold text-fg mb-6 pb-2 border-b border-border">
          Typography Tokens
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-mono text-muted-fg mb-1">--token-font-sans · font-sans</p>
            <p className="font-sans text-fg text-base">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-fg mb-1">--token-font-mono · font-mono</p>
            <p className="font-mono text-fg text-base">
              const greeting = &quot;Hello, World!&quot;;
            </p>
          </div>
          <div className="flex flex-wrap gap-6 mt-2">
            {(
              [
                { label: "text-sm", cls: "text-sm" },
                { label: "text-base", cls: "text-base" },
                { label: "text-lg", cls: "text-lg" },
              ] as const
            ).map(({ label, cls }) => (
              <div key={label}>
                <p className="text-xs font-mono text-muted-fg mb-1">{label}</p>
                <p className={`${cls} text-fg`}>Aa</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Storybook Meta ───────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Design System/Tokens",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const AllTokens: StoryObj = {
  name: "All Tokens",
  render: () => <TokenPalette />,
};
