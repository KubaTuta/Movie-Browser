import { apiKey, apiUrl } from "../../../common/apiData";

export const getMovie = async (id) => {
  const response = await fetch(`${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getCredits = async (id) => {
  const response = await fetch(`${apiUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};