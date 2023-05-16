import {apiKey, apiUrl} from "../../../common/apiData";

export const getApiPeople = async (page) => {
    const response = await fetch(`${apiUrl}/person/popular?api_key=${apiKey}&page=${page}`);
    
    if(!response.ok){
      throw new Error(response.statusText);
    }
    return await response.json();
  }