
import { Wrapper } from "../../../../../Movies/SingleMovie/styled";
import {
  InfoCategory,
  InfoText,
  InfoWrapper,
  Overview,
  OverviewWrapper,
  Poster,
  PosterWrapper,
  TextWrapper,
 
  TileDetailsWrapper,
 
  Title
} from "../../../../../../common/DetailsTileStyles/styled";
import { useSelector } from "react-redux";
import { selectProfile } from "../../../profileSlice";

const SingleProfile = ({picture, name, birthday, placeOfBirth, biography}) => {
 

  const profilePicturePath = "https://image.tmdb.org/t/p/w300";
  const profile = useSelector(selectProfile);
  return (
    
     

        
    <TileDetailsWrapper>
          <PosterWrapper >
            <Poster src={picture && `${profilePicturePath}${picture}`} alt="" />
            <TextWrapper>
              <Title> {name}</Title>
              <InfoWrapper>
                <InfoCategory>Date of birth:</InfoCategory>
                <InfoText>{birthday}</InfoText> {/*Uwaga odwrócić kolejnośćw w dacie */}
              </InfoWrapper>
              <InfoWrapper>
                <InfoCategory>Place of brith:</InfoCategory>
                <InfoText>{placeOfBirth}</InfoText>
              </InfoWrapper>
            </TextWrapper>
            <OverviewWrapper>
              <Overview>
                {biography}
              </Overview>
            </OverviewWrapper>
          </PosterWrapper>
          </TileDetailsWrapper>
        



      

    
  )
};
export default SingleProfile;
