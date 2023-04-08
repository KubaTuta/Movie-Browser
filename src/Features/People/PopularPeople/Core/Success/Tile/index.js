import {
  PosterPeople,
  WrapperPeople,
  TileWrapperPeople,
  NamePeople,
  PeoplePosterWrapper,
  NamePeopleWrapper,
  StyledNavLink,
}
  from "../../../../../../common/PersonTileStyles/styled";
import noProfilePicture from "../../../../../../common/PersonTileStyles/noProfilePicture.svg"
import { useSelector } from "react-redux";
import { selectPeople } from "../../../popularPeopleSlice";


const Tile = () => {

  const people = useSelector(selectPeople);

  const personsProfilePicturePath = "https://image.tmdb.org/t/p/w300";

  return (
    <WrapperPeople>
      {people.map((person, id) => (
        <StyledNavLink to={`/profile/${person.id}`}>
        <TileWrapperPeople key={id} >
          <PeoplePosterWrapper>

            {person.profile_path
              ? (
                <PosterPeople src={person.profile_path && `${personsProfilePicturePath}${person.profile_path}`} alt="" />
              ) : (
                < PosterPeople src={noProfilePicture} alt="" />
              )
            }
          </PeoplePosterWrapper>
          <NamePeopleWrapper>
            <NamePeople>{person.name}</NamePeople>
          </NamePeopleWrapper>
        </TileWrapperPeople>
        </StyledNavLink>
      ))};
    </WrapperPeople>
  );
}
export default Tile;