import { useState } from "react";
import ArrowIcon from "../../assets/arrow.svg";
import "./FiltersItem.scss";
import { sortBy } from "../../helpers/sortBy";
import { FilterItemType } from "./FiltersItem.types";

const FiltersItem = ({
  name,
  type,
  setSortOrder,
  sortOrder,
  results,
  setResults,
}: FilterItemType) => {
  const [toggleArrow, setToggleArrow] = useState(false);

  const toggle = () => {
    setToggleArrow(!toggleArrow);
  };

  return (
    <button
      onClick={() => {
        sortBy(type, setSortOrder, sortOrder, results, setResults);
        toggle();
      }}
      className="filters-item"
    >
      <span>{name}</span>

      <img
        src={ArrowIcon}
        alt="Arrow"
        className="filters-item__arrow"
        style={{ transform: toggleArrow ? "rotate(0)" : "rotate(0.5turn)" }}
      />
    </button>
  );
};

export default FiltersItem;
