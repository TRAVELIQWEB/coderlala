import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./MultiSelect.module.css";

export interface Option {
  label: string;
  value: string;
}

interface MultiSelectProps {
  options: Option[];
  selected: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  className?: string;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select options...",
  className,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleUnselect = (value: string) => {
    onChange(selected.filter((s) => s !== value));
  };

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      handleUnselect(value);
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button
          role="combobox"
          aria-expanded={open}
          className={cn(styles.trigger, className)}
        >
          <div className={styles.selectedItems}>
            {selected.length === 0 && (
              <span className={styles.placeholder}>{placeholder}</span>
            )}
            {selected.map((value) => {
              const option = options.find((o) => o.value === value);
              return (
                <span
                  key={value}
                  className={styles.tag}
                >
                  {option?.label}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUnselect(value);
                    }}
                    className={styles.tagRemove}
                  >
                    <X className={styles.tagRemoveIcon} />
                  </button>
                </span>
              );
            })}
          </div>
          <ChevronsUpDown className={styles.chevronIcon} />
        </button>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content
        className={styles.popoverContent}
        align="start"
        sideOffset={4}
      >
        <div className={styles.optionsContainer}>
          <button
            onClick={() => onChange([])}
            className={cn(
              styles.option,
              selected.length === 0 ? styles.showAllButtonSelected : styles.option
            )}
          >
            <span className={styles.optionCheckContainer}>
              {selected.length === 0 && (
                <Check className={styles.optionCheckIcon} />
              )}
            </span>
            Show All
          </button>
          <div className={styles.divider} />
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={cn(
                styles.option,
                selected.includes(option.value) && styles.optionSelected
              )}
            >
              <span className={styles.optionCheckContainer}>
                {selected.includes(option.value) && (
                  <Check className={styles.optionCheckIcon} />
                )}
              </span>
              {option.label}
            </button>
          ))}
        </div>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
}