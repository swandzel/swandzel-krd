import axios from "axios";
import { ChangeEvent } from "react";
import {
  ResultType,
  setShowLoaderType,
  setResultsType,
  setErrorType,
  setSearchQueryType,
} from "../App.types";

const BASE_URL = "http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/";

export const GetTopDebts = async (
  setShowLoader: setShowLoaderType,
  setResults: setResultsType
) => {
  setShowLoader(true);
  const { data } = await axios(BASE_URL + "GetTopDebts");
  const sortedData = data.sort((a: ResultType, b: ResultType) =>
    a.Name > b.Name ? 1 : -1
  );
  setResults(sortedData);
  setShowLoader(false);
};

export const GetFilteredDebts = async (
  e: ChangeEvent,
  searchQuery: string,
  setShowLoader: setShowLoaderType,
  setResults: setResultsType,
  setError: setErrorType,
  setSearchQuery: setSearchQueryType
) => {
  e.preventDefault();

  if (searchQuery !== "") {
    setShowLoader(true);
    setResults([]);

    try {
      const { data } = await axios.post(BASE_URL + "GetFilteredDebts", {
        searchQuery,
      });
      setResults(data);
      setError("");
      setSearchQuery("");
      setShowLoader(false);
    } catch (error) {
      setError(error.message);
      setSearchQuery("");
      setShowLoader(false);
    }
  }
};
