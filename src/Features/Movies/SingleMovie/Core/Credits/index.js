import { 
  NamePeople, 
  NamePeopleWrapper, 
  PeoplePosterWrapper, 
  PosterPeople 
} from "../../../../../common/PersonTileStyles/styled";
import { CreditWrapper, Role, CreditPeopleWrapper } from "./styled";
import noProfilePicture from "../../../../../common/PersonTileStyles/noProfilePicture.svg";

const Credits = ({ credits }) => {

  const personsProfilePicturePath = "https://image.tmdb.org/t/p/w300";

  return (
    <CreditWrapper>
      {credits && credits.map((credit) => (
        <CreditPeopleWrapper key={credit.id}>
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
      ))}
    </CreditWrapper>
  )
};

export default Credits;