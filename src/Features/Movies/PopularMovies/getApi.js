import { apiKey, apiUrl } from "../../../common/apiData";

export const getApi = async (page) => {
  const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};