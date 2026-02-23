"use client"

import * as React from "react"
import { Check, X, ChevronsUpDown, Layers, LucideIcon } from "lucide-react"
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

interface ComboboxMultipleProps {
  icon?: LucideIcon

  label: string
  options: string[]
  value: string[]
  onChange: (val: string[]) => void
}

export function ComboboxMultiple({
  label,
  options,
  value,
  onChange,
  icon: Icon,
}: ComboboxMultipleProps) {
  const [open, setOpen] = React.useState(false)

  const toggleItem = (item: string) => {
    onChange(
      value.includes(item)
        ? value.filter((i) => i !== item)
        : [...value, item]
    )
  }

  const removeItem = (item: string) => {
    onChange(value.filter((i) => i !== item))
  }

  return (
    <div className="relative w-full sm:w-52">
      <Label className="absolute -top-2.5 left-3 px-1 text-xs text-muted-foreground bg-card rounded-sm p-0.5">
        {label}
      </Label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between min-h-12 pt-3"
          >
            <div className="flex items-center gap-2 flex-1 overflow-hidden">

              {Icon && (
                <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
              )}

              <div className="flex gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {value.length === 0 && (
                  <span className="text-muted-foreground">
                    Select {label}...
                  </span>
                )}

                {value.map((item) => (
                  <span
                    key={item}
                    className="flex shrink-0 items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs text-primary"
                  >
                    {item}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        removeItem(item)
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>

            <ChevronsUpDown className="h-4 w-4 opacity-50 shrink-0" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-full p-0 border-border">
          <Command>
            <CommandInput placeholder={`Search ${label}...`} />
            <CommandList className="max-h-48 overflow-y-auto">
              <CommandEmpty>No {label} found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option}
                    value={option}
                    onSelect={() => toggleItem(option)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value.includes(option)
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