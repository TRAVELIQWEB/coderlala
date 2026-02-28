"use client"

import * as React from "react"
import { Check, X, ChevronsUpDown, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ComboboxSingleProps } from "@/types/ComboboxProps"

export function ComboboxSingle({
  icon: Icon,
  label,
  options,
  value,
  onChange,
  className,
  error,
  errorMessage,
}: ComboboxSingleProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className={cn("relative w-full", className)}>
      <Label
        className={cn(
          "absolute -top-2.5 left-3 px-1 text-xs bg-card rounded-sm p-0.5",
          error ? "text-red-500" : "text-muted-foreground"
        )}
      >
        {label}
      </Label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-full justify-between min-h-12 pt-3 transition-all",
              error &&
              "border-red-500 focus-visible:ring-red-500 focus-visible:ring-2"
            )}
          >
            <div className="flex items-center gap-2 overflow-hidden">

              {Icon && (
                <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
              )}

              <span className="truncate">
                {value ?? (
                  <span className="text-muted-foreground">
                    Select {label}...
                  </span>
                )}
              </span>
            </div>

            <ChevronsUpDown className="h-4 w-4 opacity-50 shrink-0" />
          </Button>
        </PopoverTrigger>

        {/* 👇 Dropdown width auto matches trigger */}
        <PopoverContent
          className="w-(--radix-popover-trigger-width) p-0 border-border"
        >
          <Command>
            <CommandInput placeholder={`Search ${label}...`} />
            <CommandList className="max-h-48 overflow-y-auto">
              <CommandEmpty>No {label} found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option}
                    value={option}
                    onSelect={() => {
                      onChange(option)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {option}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </div>
  )
}