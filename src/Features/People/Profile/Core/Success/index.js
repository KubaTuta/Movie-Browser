import { useSelector } from "react-redux";
import SingleProfile from "./SingleProfile";
import { selectCast, selectCrew, selectProfile } from "../../profileSlice";
import MoviesCast from "./MoviesCast";
import { Header3 } from "../../../../../common/Header/styled";
import MoviesCrew from "./MoviesCrew";

const Success = () => {

  const profile = useSelector(selectProfile);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  return (
    <>
      <SingleProfile
        picture={profile.profile_path}
        name={profile.name}
        birthday={profile.birthday}
        placeOfBirth={profile.place_of_birth}
        biography={profile.biography}
      />
      {cast.length === 0 
      ? "" 
      :  
      <Header3>Movies - cast ({cast.length})</Header3>}
     
      <MoviesCast />
      {crew.length === 0 
      ? "" 
      : 
      <Header3>Movies - crew ({crew.length})</Header3>}
      
      <MoviesCrew />
    </>
  )
};
export default Success;