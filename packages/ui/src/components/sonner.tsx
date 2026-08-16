'use client'

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

const Toaster = ({ theme = 'system', ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={theme}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
          // Sonner's built-in richColors text shades fall short of the
          // WCAG AA 4.5:1 contrast ratio against their own backgrounds
          // (as low as 3.07:1 for warning). These darken the text only,
          // keeping sonner's default background/border hues.
          '--success-text': 'hsl(140, 100%, 24%)',
          '--info-text': 'hsl(210, 92%, 42%)',
          '--warning-text': 'hsl(31, 92%, 33%)',
          '--error-text': 'hsl(360, 100%, 42%)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
