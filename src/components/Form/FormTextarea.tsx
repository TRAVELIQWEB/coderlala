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
    <div className={cn("w-full", className)}>
      <div className="relative">
        <Label className="absolute -top-2.5 left-3 px-1 text-xs text-muted-foreground z-10 rounded-sm p-0.5">
          {label}
        </Label>

        <Textarea
          rows={rows}
          {...props}
          className={cn(
            "w-full min-h-12 pt-6 transition-all",
            error &&
              "border-destructive focus-visible:ring-destructive focus-visible:ring-2"
          )}
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 20px 35px rgba(0,0,0,0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
          }}
        />
      </div>

      {error && errorMessage && (
        <p className="mt-1 text-xs text-destructive">
          {errorMessage}
        </p>
      )}
    </div>
  )
}