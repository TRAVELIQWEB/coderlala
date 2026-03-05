import React from "react";
import { Search, Layers, X, Tags, SearchIcon } from "lucide-react";
import { BlogTag, BlogTechStack } from "@/types/blog";
import { Option } from "@/components/ui/multi-select";
import { Button } from "@/components/ui/button";
import { ComboboxMultiple } from "./ComboboxMultiple";
import { FilterDateRange } from "./FilterDateRange";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FieldInput2, FormInput } from '@/components/Form/FormInput';
import { Globe, Mail } from "lucide-react"

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
  onSearch: () => void;
  onReset: () => void;
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
  onSearch,
  onReset,
}) => {
  // Check if any filter has a value
  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedTechStacks.length > 0 ||
    selectedTags.length > 0 ||
    dateFrom !== "" ||
    dateTo !== "";

  const handleReset = () => {
    // Reset all local states first
    setSearchQuery("");
    setDateFrom("");
    setDateTo("");
    setSelectedTechStacks([]);
    setSelectedTags([]);

    // Then call the parent's onReset which should fetch all data
    // Make sure your parent's onReset doesn't trigger a useEffect that also fetches
    onReset();
  };

  return (
    <div className="w-full max-w-7xl mx-auto mb-12 ">
      <div className="flex flex-col md:flex-row sm:flex-wrap gap-4 p-5 rounded-xl  border border-gray-400/30 shadow-lg">
        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Label className="absolute -top-2.5 left-3 px-1 text-xs text-muted-foreground z-10  rounded-sm p-0.5">
            Search
          </Label>

          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground  glass-cardpointer-events-none" />

          <Input
            placeholder="Search titles, content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            // onMouseEnter={(e) =>
            // (e.currentTarget.style.boxShadow =
            //   "0 20px 35px rgba(0,0,0,0.25)")
            // }
            // onMouseLeave={(e) =>
            // (e.currentTarget.style.boxShadow =
            //   "0 10px 25px rgba(0,0,0,0.15)")
            // }
            className="h-12 pl-9 min-h-12 rounded-md border-input"
            style={{
              background: "#ffffff0d",
              // border: "1px solid rgba(0,0,0,0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease"
            }}
          />
        </div>
        {/* <FormInput
          name="search"
          label="Search"
          icon={Search}

          // required
          placeholder="Search titles, content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 20px 35px rgba(0,0,0,0.25)")
          }
          onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 10px 25px rgba(0,0,0,0.15)")
          }
        // error={!!errors.slug}
        // errorMessage={errors.slug}
        // className="h-12 pl-9 min-h-12 rounded-md"

        /> */}
        {/* <FieldInput2
          id="search"
          label="Search"
          type="text"
          placeholder="placeholder"
          icon={Search}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          // error={!!errors.email}
          // errorMessage={errors.email}
        />
        <FieldInput2
          id="search"
          label="Search"
          name="search"
          type="text"
          placeholder="Search titles, content..."
          icon={Search}
          required
        /> */}


        <FilterDateRange
          dateFrom={dateFrom}
          dateTo={dateTo}
          setDateFrom={setDateFrom}
          setDateTo={setDateTo}
        />

        {/* Tech Stack */}
        <ComboboxMultiple
          label="Tech Stack"
          options={TECH_OPTIONS.map((t) => t.label)}
          value={selectedTechStacks}
          onChange={setSelectedTechStacks}
          icon={Layers}
          className="md:w-52"
        />

        <ComboboxMultiple
          label="Tags"
          options={TAG_OPTIONS.map((t) => t.label)}
          value={selectedTags}
          onChange={setSelectedTags}
          icon={Tags}
          className="md:w-52"
        />

        {/* Actions */}
        {/* <div className="flex flex-row gap-2 flex-1 ms-auto justify-end"> */}
        <Button
          onClick={onSearch}
          size="lg"
          className="h-12 w-full md:w-auto ms-auto px-12
             bg-blue-700 hover:bg-blue-800
             dark:bg-blue-600 dark:hover:bg-blue-700
             text-white! shadow-md transition-all"
        >
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
        {/* </div> */}
      </div>
    </div>
  );
};

///
{/* {hasActiveFilters && (
            <Button
              onClick={handleReset}
              size="icon"
              variant="destructive"
              className="size-12"
            >
              <X className="w-4 h-4 text-white!" />
            </Button>
          )} */}