import {apiKey, apiUrl} from "../apiData";

export const getSearchMoviesApi = async (page, query) => {
  const response = await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`);

  if (!response.ok) {
    throw Error(response.statusText)
  }

  return await response.json();
}

export const getSearchPeopleApi = async (page, query) => {
  const response = await fetch(`${apiUrl}/search/person?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`);

  if (!response.ok) {
    throw Error(response.statusText)
  }

  return await response.json();
}