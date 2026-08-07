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
  label,
  options,
  value,
  onChange,
  icon: Icon,
  className,
  error,
  errorMessage,
}: ComboboxSingleProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className={cn("relative w-full", className)}>
      <Label className="absolute -top-2.5 left-2 px-1 text-xs text-foreground rounded-sm p-0.5">
        {label}
      </Label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between pt-3 border-border bg-border min-h-12 transition-all"
          >
            <div className="flex items-center gap-2 overflow-hidden">

              {Icon && (
                <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
              )}

              <span className="truncate uppercase">
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
                    className="uppercase"
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
    </div>
  )
}