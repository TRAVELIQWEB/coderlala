import React from "react";
import { Search, Calendar, Tag, Layers, X, Tags } from "lucide-react";
import { BlogTag, BlogTechStack } from "@/types/blog";
import { Option } from "@/components/ui/multi-select";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/RangePicker";
import { ComboboxMultiple } from "./ComboboxMultiple";
import { FilterDateRange } from "./FilterDateRange";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import { ComboboxMultiple } from "./MultiSelect2";

interface FiltersProps {
  dateFrom: string;
  setDateFrom: (val: string) => void;
  dateTo: string;
  setDateTo: (val: string) => void;
  selectedTechStacks: string[];
  setSelectedTechStacks: (val: string[]) => void;
  selectedTags: string[];
  setSelectedTags: (val: string[]) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

const TECH_OPTIONS: Option[] = Object.values(BlogTechStack).map((tech) => ({
  label: tech.toUpperCase(),
  value: tech,
}));

const TAG_OPTIONS: Option[] = Object.values(BlogTag).map((tag) => ({
  label: tag.toUpperCase(),
  value: tag,
}));

export const FilterBar: React.FC<FiltersProps> = ({
  dateFrom,
  setDateFrom,
  dateTo,
  setDateTo,
  selectedTechStacks,
  setSelectedTechStacks,
  selectedTags,
  setSelectedTags,
  searchQuery,
  setSearchQuery,
}) => {
  const handleReset = () => {
    setDateFrom("");
    setDateTo("");
    setSelectedTechStacks([]);
    setSelectedTags([]);
    setSearchQuery("");
  };

  return (
    <div className="w-full max-w-7xl mx-auto mb-12">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 p-5 rounded-xl bg-card border border-border shadow-lg">
        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Label className="absolute -top-2.5 left-3 px-1 text-xs text-muted-foreground bg-card rounded-sm p-0.5">
            Search
          </Label>

          {/* Icon inside input */}
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />

          <Input
            placeholder="Search titles, content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12 pl-9 border border-input focus-visible:ring-0 bg-background rounded-md min-h-12"
          />
        </div>


        <FilterDateRange />

        {/* Tech Stack */}
        <ComboboxMultiple
          label="Tech Stack"
          options={TECH_OPTIONS.map((t) => t.label)}
          value={selectedTechStacks}
          onChange={setSelectedTechStacks}
          icon={Layers}

        />
        <ComboboxMultiple
          label="Tags"
          options={TAG_OPTIONS.map((t) => t.label)}
          value={selectedTags}
          onChange={setSelectedTags}
          icon={Tags}

        />


        {/* Actions */}
        <div className="flex flex-row gap-2 w-full sm:w-auto sm:ml-auto">
          <Button
            onClick={handleReset}
            size="lg"
            variant="default"
            className="w-full sm:w-auto h-12 px-6"
            // className="flex-1 lg:flex-none gap-2 h-12 px-6 hover:opacity-90"
          >
            <Search className="w-4 h-4" />
            Search
          </Button>

          <Button
            onClick={handleReset}
            size="icon"
            variant="destructive"
            className="size-12 "
          >
            <X className="w-4 h-4 text-white!" />
          </Button>
        </div>
      </div>
    </div>
  );
};