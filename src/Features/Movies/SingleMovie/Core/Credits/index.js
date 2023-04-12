import { 
  NamePeople, 
  NamePeopleWrapper, 
  PeoplePosterWrapper, 
  PosterPeople 
} from "../../../../../common/PersonTileStyles/styled";
import { CreditWrapper, Role, CreditPeopleWrapper } from "./styled";
import noProfilePicture from "../../../../../common/PersonTileStyles/noProfilePicture.svg";
import { StyledLink } from "../../../../../common/MovieTile/styled";

const Credits = ({ credits }) => {

  const personsProfilePicturePath = "https://image.tmdb.org/t/p/w300";

  return (
    <CreditWrapper>
      {credits && credits.map((credit, id) => (
        <StyledLink to={`/profile/${credit.id}`}>
        <CreditPeopleWrapper key={id}>
          <PeoplePosterWrapper>
            {credit.profile_path ?
              (<PosterPeople src={`${personsProfilePicturePath}${credit.profile_path}`} />)
              : (
                <PosterPeople src={noProfilePicture} alt="" />
              )
            }
          </PeoplePosterWrapper>
          <NamePeopleWrapper>
            <NamePeople>{credit.name}</NamePeople>
            <Role>{(credit.character || credit.job)}</Role>
          </NamePeopleWrapper>
        </CreditPeopleWrapper>
        </StyledLink>
      ))}
    </CreditWrapper>
  )
};

export default Credits;