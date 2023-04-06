import { useSelector } from "react-redux";
import SingleProfile from "./SingleProfile";
import { selectProfile } from "../../profileSlice";

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
    </>
  )
};
export default Success;