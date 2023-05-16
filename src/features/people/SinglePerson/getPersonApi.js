import {apiKey, apiUrl} from "../../../common/apiData";

export const getPersonApi = async (id) => {
    const response = await fetch(`${apiUrl}/person/${id}?api_key=${apiKey}`)

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();

};
export const getCastCrewApi = async (id) => {
    const response = await fetch(`${apiUrl}/person/${id}/movie_credits?api_key=${apiKey}`)

    if (!response.ok) {
        throw new Error(response.statusText);

    }
    return await response.json();

}; 