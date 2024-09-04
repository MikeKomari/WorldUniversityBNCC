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

export function SelectDropdown({ onChangeCategory }) {
  return (
    <Select onValueChange={(v) => onChangeCategory(v)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="region">Region</SelectItem>
          <SelectItem value="lang">Language</SelectItem>
          <SelectItem value="ascending">Sort Ascending</SelectItem>
          <SelectItem value="descending">Sort Descending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
