import {
  ResultType,
  setSortOrderType,
  setResultsType,
  sortOrderType,
} from "../../App.types";

export interface FilterItemType {
  name: ResultType["Name"];
  type: string;
  setSortOrder: setSortOrderType;
  sortOrder: sortOrderType;
  results: ResultType[];
  setResults: setResultsType;
}
