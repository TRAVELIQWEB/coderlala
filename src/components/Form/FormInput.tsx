"use client"
import { InputHTMLAttributes, useState } from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

import { LucideIcon } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon?: LucideIcon
  error?: boolean
  errorMessage?: string
}

export function FormInput({
  label,
  icon: Icon,
  error,
  errorMessage,
  className,
  ...props
}: FormInputProps) {
  return (
    <div className={cn("space-y-1", className)}>

      <div className="relative">

        {/* Floating Label */}
        <Label
          className="absolute -top-2.5 left-3 z-10 px-1 text-xs text-muted-foreground"
        >
          {label}
        </Label>

        {/* Glass Container */}
        <div
          className={cn(
            "relative flex items-center w-full min-h-12 rounded-md border px-3 transition-all",
            error ? "border-destructive" : "border-input"
          )}
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
          }}
        >
          {/* Icon */}
          {Icon && (
            <Icon
              size={18}
              className="absolute left-3 text-muted-foreground"
            />
          )}

          <Input
            {...props}
            className={cn(
              "border-0  px-0 py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
              Icon && "pl-7"
            )}
          />
        </div>
      </div>

      {/* Error */}
      {error && errorMessage && (
        <p className="text-xs text-destructive">{errorMessage}</p>
      )}

    </div>
  )
}




type FieldInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  icon?: LucideIcon
  error?: boolean
  errorMessage?: string
  iconPosition?: 'left' | 'right'
}

export function FieldInput2({
  id,
  label,
  icon: Icon,
  error,
  errorMessage,
  className,
  iconPosition = 'left',
  value,
  defaultValue,
  ...props
}: FieldInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = Boolean(value ?? defaultValue)

  return (
    <div className={cn("relative space-y-1.5", className)}>
      <div className="relative">
        {/* Input with integrated label */}
        <div className="relative">
          {Icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Icon className="h-4 w-4" />
            </div>
          )}

          <Input
            id={id}
            className={cn(
              "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              Icon && iconPosition === 'left' && "pl-10",
              Icon && iconPosition === 'right' && "pr-10",
              error && "border-destructive focus-visible:ring-destructive",
              (isFocused || hasValue) && "border-primary"
            )}
            // placeholder=" " // Empty placeholder for CSS pseudo-class
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          {Icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Icon className="h-4 w-4" />
            </div>
          )}

          {/* Floating Label */}
          <FieldLabel
            htmlFor={id}
            className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground transition-all duration-200 ease-out",
              "pointer-events-none bg-background px-1",
              (isFocused || hasValue) && "top-0 -translate-y-1/2 text-xs font-medium text-primary",
              Icon && iconPosition === 'left' && (isFocused || hasValue) && "left-3",
              Icon && iconPosition === 'left' && !isFocused && !hasValue && "left-10",
              error && (isFocused || hasValue) && "text-destructive"
            )}
          >
            {label}
          </FieldLabel>
        </div>
      </div>

      {/* Error Message */}
      {error && errorMessage && (
        <p className="text-xs text-destructive animate-in fade-in slide-in-from-top-1">
          {errorMessage}
        </p>
      )}
    </div>
  )
}