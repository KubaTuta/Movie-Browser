import { useSelector } from "react-redux";
import SingleProfile from "./SingleProfile";
import { selectProfile } from "../../profileSlice";
import { Wrapper } from "../../../../Movies/SingleMovie/styled";





const Success = () => {
    const profile = useSelector(selectProfile);
    console.log(profile)

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