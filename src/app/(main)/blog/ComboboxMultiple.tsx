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
import { ComboboxMultipleProps } from "@/types/ComboboxProps"


export function ComboboxMultiple({
  label,
  options,
  value,
  onChange,
  icon: Icon,
  className,
  error,
  errorMessage,
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
    <div className={cn("relative w-full", className)}>
      <Label className="absolute -top-2.5 left-3 px-1 text-xs text-muted-foreground z-10 rounded-sm p-0.5">
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
              "border-destructive focus-visible:ring-destructive focus-visible:ring-2"
            )}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(0,0,0,0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 20px 35px rgba(0,0,0,0.25)")
            }
            onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 10px 25px rgba(0,0,0,0.15)")
            }
          >
            <div className="flex items-center gap-2 flex-1 overflow-hidden">
              {Icon && (
                <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
              )}

              <div className="flex gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide uppercase">
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
                        e.preventDefault();
                        e.stopPropagation();
                        removeItem(item);
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>

            <ChevronsUpDown className="h-4 w-4 opacity-50 shrink-0" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-(--radix-popover-trigger-width) p-0 border-0"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.25)"
          }}
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
                    onSelect={() => toggleItem(option)}
                    className="uppercase"
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
      {error && errorMessage && (
        <p className="mt-1 text-xs text-destructive">
          {errorMessage}
        </p>
      )}
    </div>
  )
}