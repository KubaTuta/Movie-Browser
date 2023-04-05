export const getProfileApi = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=fef5caf4726934d4be6d4893838ad041`)

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();

};
export const getCastCrewApi = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=fef5caf4726934d4be6d4893838ad041`)

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();

};