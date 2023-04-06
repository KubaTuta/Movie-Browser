import { useSelector } from "react-redux";
import SingleProfile from "./SingleProfile";
import { selectCast, selectProfile } from "../../profileSlice";
import MoviesCast from "./MoviesCast";
import { Header3 } from "../../../../../common/Header/styled";

const Success = () => {

  const profile = useSelector(selectProfile);
  const cast = useSelector(selectCast);
  console.log(cast)

  return (
    <>
      <SingleProfile
        picture={profile.profile_path}
        name={profile.name}
        birthday={profile.birthday}
        placeOfBirth={profile.place_of_birth}
        biography={profile.biography}
      />
      <Header3>Movies -cast</Header3>
      <MoviesCast
      poster={cast.poster_path}
      title={cast.title}
      />
    </>
  )
};
export default Success;