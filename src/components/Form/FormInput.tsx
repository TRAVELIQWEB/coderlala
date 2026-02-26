"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: boolean
  errorMessage?: string
}

export function FormInput({
  label,
  error,
  errorMessage,
  className,
  ...props
}: FormInputProps) {
  return (
    <div className={cn("w-full space-y-1 ", className)}>
      {/* Floating Label */}
      <div className="relative">
        <Label className="absolute -top-2 left-3 bg-background px-1 text-xs text-muted-foreground rounded-sm z-10">
          {label}
        </Label>

        <Input
          {...props}
          className={cn(
            "h-10 pt-2 bg-background", // fixed height
            error &&
              "border-destructive focus-visible:ring-destructive"
          )}
        />
      </div>

      {/* Fixed error space (prevents layout shift) */}
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