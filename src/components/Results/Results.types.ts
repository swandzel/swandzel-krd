import { errorType, ResultType, showLoaderType } from "../../App.types";

export interface ResultsType {
  showLoader: showLoaderType;
  results: ResultType[];
  error: errorType;
}
