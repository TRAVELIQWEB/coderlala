"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

export default function EnquiryFilters() {
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      search: search.trim(),
      fromDate,
      toDate,
    };

    console.log("Search Payload:", payload);

    // API Call
    // fetchEnquiries(payload);
  };

  const handleReset = () => {
    setSearch("");
    setFromDate("");
    setToDate("");

    console.log("Filters Reset");
  };

  return (
    <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
      <form
        onSubmit={handleSearch}
        className="flex flex-wrap items-end gap-3"
      >
        {/* From Date */}
        <div className="w-full sm:w-44">
          <label className="mb-1 block text-sm font-medium text-foreground">
            From Date
          </label>

          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* To Date */}
        <div className="w-full sm:w-44">
          <label className="mb-1 block text-sm font-medium text-foreground">
            To Date
          </label>

          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        {/* Search */}
        <div className="min-w-[260px] flex-1 lg:flex-none">
          <label className="mb-1 block text-sm font-medium text-foreground">
            Search
          </label>

          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Name, Phone, Email or Company..."
              className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>


        {/* Right Side Buttons */}
        <div className="ml-auto flex w-full gap-2 sm:w-auto">
          <Button type="submit">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button
            type="button"
            variant="destructive"
            className="text-white!"
            onClick={handleReset}
          >
            Reset
          </Button>

        </div>
      </form>
    </div>
  );
}