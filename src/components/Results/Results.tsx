import "./Results.scss";
import ResultsItem from "../ResultsItem/ResultsItem";
import Loader from "../Loader/Loader";
import NoDataFound from "../NoDataFound/NoDataFound";
import { ResultsType } from "./Results.types";

const Results = ({ showLoader, results, error }: ResultsType) => {
  return (
    <div className="results">
      {results.length === 0 && !showLoader && <NoDataFound error={error} />}
      {showLoader && <Loader />}
      {results?.map((result) => (
        <ResultsItem key={result.Id} result={result} />
      ))}
    </div>
  );
};

export default Results;
