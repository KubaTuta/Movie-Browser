import { apiKey, apiUrl } from "../../../apiData";

export const getSearchApi = async (page, query) => {
  const response = await fetch(`${apiUrl}/search/person?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`);

  if (!response.ok) {
    throw Error(response.statusText)
  }

  return await response.json();
}