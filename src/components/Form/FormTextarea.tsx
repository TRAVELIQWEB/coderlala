"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: boolean
  errorMessage?: string
}

export function FormTextarea({
  label,
  error,
  errorMessage,
  className,
  rows = 4,
  ...props
}: FormTextareaProps) {
  return (
    <div className={cn("w-full space-y-1", className)}>
      <div className="relative">
        <Label className="absolute -top-2.5 left-2.5 px-1 text-xs text-foreground z-10">
          {label}
        </Label>

        <Textarea
          rows={rows}
          {...props}
          className={cn(
            "pt-3 resize-none border-border bg-border",
            error &&
              "border-destructive focus-visible:ring-destructive"
          )}
        />
      </div>

      <div className="">
        {error && errorMessage && (
          <p className="text-xs text-destructive">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  )
}