import { ApiParameters, ApiSettings } from "@constants/api";

export interface INewsProps {
  dates: string;
  onPage: string;
  query: string;
  page: string;
}

export function generateNewsUrl(props: INewsProps): string {
  const baseUrl = "https://content.guardianapis.com/search";
  const API_KEY = "b0873738-c5a8-4f80-a274-1fc42fc39cad";
  const queryParams = new URLSearchParams();

  queryParams.append(ApiParameters.Fields, ApiSettings.ThumbNail);
  queryParams.append(ApiParameters.ApiKey, API_KEY);
  queryParams.append(ApiParameters.PageSize, "100");

  return `${baseUrl}?${queryParams.toString()}`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
}
