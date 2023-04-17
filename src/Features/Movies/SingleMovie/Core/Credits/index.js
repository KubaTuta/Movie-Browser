import { 
  NamePeople, 
  NamePeopleWrapper,   
  } from "../../../../../common/PersonTileStyles/styled";
import { CreditWrapper, Role, CreditPeopleWrapper, PosterPerson, PosterWrapper } from "./styled";
import noProfilePicture from "../../../../../common/img/noPersonPoster.png";
import { StyledLink } from "../../../../../common/MovieTile/styled";

const Credits = ({ credits }) => {

  const personsProfilePicturePath = "https://image.tmdb.org/t/p/w300";

  return (
    <CreditWrapper>
      {credits && credits.map((credit, id) => (
        <StyledLink to={`/profile/${credit.id}`} key={id}>
        <CreditPeopleWrapper >
          <PosterWrapper>
            {credit.profile_path ?
              (<PosterPerson src={`${personsProfilePicturePath}${credit.profile_path}`} />)
              : (
                <PosterPerson src={noProfilePicture} alt="" />
              )
            }
          </PosterWrapper>
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