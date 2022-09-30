import "./ResultsItem.scss";
import { ResultsItemType } from "./ResultsItem.types";

const ResultsItem = ({ result }: ResultsItemType) => {
  return (
    <div className="results-item">
      <span className="results-item__name">{result.Name}</span>
      <span className="results-item__nip">{result.NIP}</span>
      <span className="results-item__value">{result.Value}</span>
      <span className="results-item__date">
        {new Date(result.Date).toLocaleDateString("pl-PL")}
      </span>
    </div>
  );
};

export default ResultsItem;
