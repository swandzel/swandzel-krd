import "./SearchBar.scss";
import { SearchBarType } from "./SearchBar.types";
import { KeyboardEvent } from "react";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  searchByQuery,
}: SearchBarType) => {
  const searchOnEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      searchByQuery(e);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-bar__container">
        <div className="search-bar__info">PODAJ NIP LUB NAZWĘ DŁUŻNIKA</div>
        <div className="search-bar__search">
          <input
            type="text"
            value={searchQuery}
            className="search-bar__input"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={searchOnEnter}
          />
          <button className="search-bar__button" onClick={searchByQuery}>
            SZUKAJ
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
