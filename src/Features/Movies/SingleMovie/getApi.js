export const getMovie = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fef5caf4726934d4be6d4893838ad041&language=en-US`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getCredits = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=fef5caf4726934d4be6d4893838ad041&language=en-US`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};