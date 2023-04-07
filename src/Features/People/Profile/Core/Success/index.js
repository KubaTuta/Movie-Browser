import { useSelector } from "react-redux";
import SingleProfile from "./SingleProfile";
import { selectProfile } from "../../profileSlice";
import MoviesCast from "./MoviesCast";
import { Header3 } from "../../../../../common/Header/styled";
import MoviesCrew from "./MoviesCrew";

const Success = () => {

  const profile = useSelector(selectProfile);


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
      <MoviesCast />
      <Header3>Movies -crew</Header3>
      <MoviesCrew />
    </>
  )
};
export default Success;