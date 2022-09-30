import { searchQueryType, setSearchQueryType } from "../../App.types";
import { ChangeEvent } from "react";

export interface SearchBarType {
  searchQuery: searchQueryType;
  setSearchQuery: setSearchQueryType;
  searchByQuery: (e: ChangeEvent | any) => void;
}
