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
import noProfilePicture from "../../../../../../common/img/noPersonPoster.png"

const Tile = ({people}) => {

  const personsProfilePicturePath = "https://image.tmdb.org/t/p/w300";

  return (
    <WrapperPeople>
      {people.map((person, id) => (
        <StyledNavLink to={`/profile/${person.id}`} key={id}>
        <TileWrapperPeople  >
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
            <NamePeople>{(person.name.length > 23) ? `${person.name.slice(0, 21)}...` : person.name}</NamePeople>
          </NamePeopleWrapper>
        </TileWrapperPeople>
        </StyledNavLink>
      ))};
    </WrapperPeople>
  );
}
export default Tile;