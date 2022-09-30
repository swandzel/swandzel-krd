import "./NoDataFound.scss";
import { NoDataFoundType } from "./NoDataFound.types";

const NoDataFound = ({ error }: NoDataFoundType) => {
  return (
    <div className="no-data-found">
      Brak wyników
      {error && <div className="no-data-found__server">{error}</div>}
    </div>
  );
};

export default NoDataFound;
