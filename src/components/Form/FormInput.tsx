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
    <div className={cn("w-full", className)}>
      <div className="relative">
        {/* Floating Label */}
        <Label className="absolute -top-2.5 left-3 px-1 text-xs text-muted-foreground z-10 rounded-sm p-0.5">
          {label}
        </Label>

        {/* Icon */}
        {Icon && (
          <Icon
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-20"
          />
        )}

        {/* Input with glass effect */}
        <Input
          {...props}
          className={cn(
            "flex h-12 w-full rounded-md border px-3 py-3 text-sm outline-none transition-all",
            "placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            Icon && "pl-10",
            error && "border-destructive focus-visible:ring-destructive focus-visible:ring-2"
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

      {/* Error */}
      {error && errorMessage && (
        <p className="mt-1 text-xs text-destructive">{errorMessage}</p>
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
    <div className={cn("relative w-full", className)}>
      <div className="relative">
        {/* Input with integrated label */}
        <div className="relative">
          {Icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-20">
              <Icon className="h-4 w-4" />
            </div>
          )}

          <Input
            id={id}
            className={cn(
              "flex h-12 w-full rounded-md border px-3 py-2 text-sm",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "disabled:cursor-not-allowed disabled:opacity-50",
              Icon && iconPosition === 'left' && "pl-10",
              Icon && iconPosition === 'right' && "pr-10",
              error && "border-destructive focus-visible:ring-destructive focus-visible:ring-2"
            )}
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease"
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 20px 35px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
            }}
            {...props}
          />

          {Icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground z-20">
              <Icon className="h-4 w-4" />
            </div>
          )}

          {/* Floating Label */}
          <Label
            htmlFor={id}
            className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground transition-all duration-200 ease-out z-10 rounded-sm px-1",
              "pointer-events-none",
              (isFocused || hasValue) && "top-0 -translate-y-1/2 text-xs font-medium",
              Icon && iconPosition === 'left' && (isFocused || hasValue) && "left-3",
              Icon && iconPosition === 'left' && !isFocused && !hasValue && "left-10",
              error && (isFocused || hasValue) && "text-destructive"
            )}
            style={{
              background: "transparent",
              backdropFilter: "none"
            }}
          >
            {label}
          </Label>
        </div>
      </div>

      {/* Error Message */}
      {error && errorMessage && (
        <p className="mt-1 text-xs text-destructive animate-in fade-in slide-in-from-top-1">
          {errorMessage}
        </p>
      )}
    </div>
  )
}