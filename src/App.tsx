import { useEffect, useState, ChangeEvent } from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import Filters from "./components/Filters/Filters";
import Results from "./components/Results/Results";
import { GetTopDebts, GetFilteredDebts } from "./api/api";
import { ResultType } from "./App.types";

const App = () => {
  const [results, setResults] = useState<never[] | ResultType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [sortOrder, setSortOrder] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    GetTopDebts(setShowLoader, setResults);
  }, []);

  const searchByQuery = (e: ChangeEvent): void => {
    GetFilteredDebts(
      e,
      searchQuery,
      setShowLoader,
      setResults,
      setError,
      setSearchQuery
    );
  };

  return (
    <div className="app">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchByQuery={searchByQuery}
      />
      <div className="app__content">
        <Filters
          setSortOrder={setSortOrder}
          sortOrder={sortOrder}
          results={results}
          setResults={setResults}
        />
        <Results showLoader={showLoader} results={results} error={error} />
      </div>
    </div>
  );
};

export default App;
