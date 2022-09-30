export interface ResultType {
  Id: number;
  Number?: string;
  Name: string;
  Value: number;
  NIP: string;
  Date: Date;
  DocumentType?: string;
  Price?: number;
  Address?: string;
}

export type setShowLoaderType = React.Dispatch<React.SetStateAction<boolean>>;
export type showLoaderType = boolean;

export type setResultsType = React.Dispatch<React.SetStateAction<ResultType[]>>;

export type setErrorType = React.Dispatch<React.SetStateAction<string>>;
export type errorType = null | string;

export type setSearchQueryType = React.Dispatch<React.SetStateAction<string>>;
export type searchQueryType = string;

export type setSortOrderType = React.Dispatch<React.SetStateAction<boolean>>;
export type sortOrderType = boolean;
