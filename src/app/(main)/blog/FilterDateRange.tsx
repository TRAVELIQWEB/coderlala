"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"
import { Label } from "@/components/ui/label"

interface FilterDateRangeProps {
  dateFrom: string;
  dateTo: string;
  setDateFrom: (val: string) => void;
  setDateTo: (val: string) => void;
}

export function FilterDateRange({ dateFrom, dateTo, setDateFrom, setDateTo }: FilterDateRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: dateFrom ? new Date(dateFrom) : undefined,
    to: dateTo ? new Date(dateTo) : undefined,
  });

  const handleDateSelect = (newDate: DateRange | undefined) => {
    setDate(newDate);
    if (newDate?.from) {
      setDateFrom(format(newDate.from, "yyyy-MM-dd"));
    } else {
      setDateFrom('');
    }
    if (newDate?.to) {
      setDateTo(format(newDate.to, "yyyy-MM-dd"));
    } else {
      setDateTo('');
    }
  };

  return (
   <div className="relative w-full sm:w-64">
  <Label className="absolute -top-2.5 left-3 px-1 text-xs text-muted-foreground z-10 rounded-sm">
    Select Date Range
  </Label>

  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        className="w-full justify-between min-h-12 pt-3 font-normal"
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
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />

          {date?.from ? (
            date.to ? (
              <span className="text-sm">
                {format(date.from, "LLL dd, y")} -{" "}
                {format(date.to, "LLL dd, y")}
              </span>
            ) : (
              <span className="text-sm">
                {format(date.from, "LLL dd, y")}
              </span>
            )
          ) : (
            <span className="text-muted-foreground text-sm">
              Pick a date
            </span>
          )}
        </div>
      </Button>
    </PopoverTrigger>

    <PopoverContent
      align="start"
      className="w-auto p-0 border-0"
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.25)"
      }}
    >
      <Calendar
        mode="range"
        selected={date}
        onSelect={handleDateSelect}
        numberOfMonths={2}
        className="rounded-md bg-transparent"
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 relative",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex justify-between absolute w-full",
          nav_button:
            "h-9! w-9! bg-transparent p-5! opacity-50 hover:opacity-100",
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell:
            "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside: "text-muted-foreground opacity-50",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
        }}
      />
    </PopoverContent>
  </Popover>
</div>
  );
}