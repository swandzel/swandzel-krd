import {
  setResultsType,
  ResultType,
  setSortOrderType,
  sortOrderType,
} from "../../App.types";

export interface FiltersType {
  setSortOrder: setSortOrderType;
  sortOrder: sortOrderType;
  results: ResultType[];
  setResults: setResultsType;
}
