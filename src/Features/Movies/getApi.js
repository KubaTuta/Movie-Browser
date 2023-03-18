export const getApi = async () => {
  const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=fef5caf4726934d4be6d4893838ad041&language=en-US&page=1");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};