import { PosterPeople, WrapperPeople, TileWrapperPeople, NamePeople } from "./styled"
import { useSelector } from "react-redux";
import { selectPeople } from "../popularPeopleSlice";
import noProfilePicture from "./noProfilePicture.svg"

const Tile = () => {

  const people = useSelector(selectPeople);

  const personsProfilePicturePath = "https://image.tmdb.org/t/p/w300";

  return (
    <WrapperPeople>
      {people.map((person, id) => (
        <TileWrapperPeople key={id} >
          <>
            {person.profile_path
              ?
              (
                <PosterPeople src={person.profile_path && `${personsProfilePicturePath}${person.profile_path}`} alt="" />
              )
              :
              (
                <PosterPeople src={noProfilePicture} alt=""/>
              )
            } </>

          <NamePeople>{person.name}</NamePeople>
        </TileWrapperPeople>
      ))};
    </WrapperPeople>
  );
}
export default Tile;