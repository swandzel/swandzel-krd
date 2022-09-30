import "./Filters.scss";
import FiltersItem from "../FiltersItem/FiltersItem";
import { filters_list } from "../../variables/filters_list";
import { FiltersType } from "./Filters.types";

const Filters = ({
  setSortOrder,
  sortOrder,
  results,
  setResults,
}: FiltersType) => {
  return (
    <div className="filters">
      {filters_list?.map((filters_item) => (
        <FiltersItem
          key={filters_item.id}
          setSortOrder={setSortOrder}
          sortOrder={sortOrder}
          results={results}
          setResults={setResults}
          name={filters_item.name}
          type={filters_item.type}
        />
      ))}
    </div>
  );
};

export default Filters;
