import { PosterPeople, WrapperPeople, TileWrapperPeople, NamePeople } from "./styled"
import { useSelector } from "react-redux";
import { selectPeople } from "../popularPeopleSlice";

const Tile = () => {

  const people = useSelector(selectPeople);

  const posterPath = "https://image.tmdb.org/t/p/w300";

  return (
    <WrapperPeople>
      {people.map((person, id) => (
        <TileWrapperPeople key={id} >
          <PosterPeople src={person.profile_path && `${posterPath}${person.profile_path}`} alt="" />
          <NamePeople>{person.name}</NamePeople>
        </TileWrapperPeople>
      ))}
    </WrapperPeople>
  );
}
export default Tile;