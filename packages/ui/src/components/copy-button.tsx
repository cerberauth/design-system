'use client'

import * as React from 'react'
import { Check, Copy } from 'lucide-react'

import { Button } from './button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from './tooltip'
import { cn } from '../lib/utils'

export interface CopyButtonProps extends Omit<
  React.ComponentProps<typeof Button>,
  'onClick'
> {
  value: string
  label?: string
}

function CopyButton({
  value,
  label = 'Copy',
  className,
  variant = 'ghost',
  size = 'icon',
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }, [value])

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={cn('h-8 w-8', className)}
          onClick={handleCopy}
          {...props}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span className="sr-only">{label}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{copied ? 'Copied!' : label}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export { CopyButton }
