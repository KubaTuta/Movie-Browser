export const getApi = async (page) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fef5caf4726934d4be6d4893838ad041&language=en-US&page=${page}`);
 
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

