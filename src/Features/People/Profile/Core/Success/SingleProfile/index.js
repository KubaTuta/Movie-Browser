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
import noProfilePicture from "../../../../../../common/PersonTileStyles/noProfilePicture.svg"
const SingleProfile = ({ picture, name, birthday, placeOfBirth, biography }) => {

  const profilePicturePath = "https://image.tmdb.org/t/p/w500";

  return (

    <TileDetailsWrapper>
      <PosterWrapper >
        <>
          {picture
            ?
            (<Poster src={picture && `${profilePicturePath}${picture}`} alt="" />)
            :
            (<Poster src={noProfilePicture} alt="" />)}
        </>

      </PosterWrapper>
      <TextWrapper>
        <Title> {name}</Title>
        <InfoWrapper>
          <InfoCategory>Date of birth:</InfoCategory>
          <InfoText>{birthday}</InfoText>
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
    </TileDetailsWrapper>
  )
};
export default SingleProfile;
