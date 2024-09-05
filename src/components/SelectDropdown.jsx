import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDropdown({ onChangeCategory, selectedCategory }) {
  return (
    <Select onValueChange={(v) => onChangeCategory(v)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`Filter by ${selectedCategory}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="all" className="cursor-pointer">
            All
          </SelectItem>
          <SelectItem value="name" className="cursor-pointer">
            Name
          </SelectItem>
          <SelectItem value="region" className="cursor-pointer">
            Region
          </SelectItem>
          <SelectItem value="lang" className="cursor-pointer">
            Language
          </SelectItem>
          <SelectItem value="ascending" className="cursor-pointer">
            Sort Ascending by Name
          </SelectItem>
          <SelectItem value="descending" className="cursor-pointer">
            Sort Descending by Name
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
