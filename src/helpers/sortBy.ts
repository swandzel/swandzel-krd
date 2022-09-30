import {
  setSortOrderType,
  ResultType,
  setResultsType,
  sortOrderType,
} from "../App.types";

export const sortBy = (
  param: string,
  setSortOrder: setSortOrderType,
  sortOrder: sortOrderType,
  results: ResultType[],
  setResults: setResultsType
) => {
  setSortOrder(!sortOrder);

  if (param === "Date") {
    const sortedResults = [...results].sort((a, b) =>
      sortOrder
        ? new Date(a[param]).getTime() - new Date(b[param]).getTime()
        : new Date(b[param]).getTime() - new Date(a[param]).getTime()
    );
    setResults(sortedResults);
    return;
  }
  const sortedResults = [...results].sort((a, b) =>
    // @ts-ignore
    sortOrder ? (a[param] > b[param] ? -1 : 1) : a[param] > b[param] ? 1 : -1
  );
  setResults(sortedResults);
};
