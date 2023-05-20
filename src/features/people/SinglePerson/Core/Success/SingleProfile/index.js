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
  Title,
} from "../../../../../../common/DetailsTileStyles/styled";
import { useImageUrl } from "../../../../../../common/hooks/useImageUrl";
import noProfilePicture from "../../../../../../common/img/noPersonPoster.png";

const SingleProfile = ({
  picture,
  name,
  birthday,
  placeOfBirth,
  biography,
}) => {
  const { posterPathInSingleMovie } = useImageUrl();
  const profilePicturePath = posterPathInSingleMovie();

  return (
    <TileDetailsWrapper>
      <PosterWrapper>
        <>
          {picture ? (
            <Poster src={picture && `${profilePicturePath}${picture}`} alt="" />
          ) : (
            <Poster src={noProfilePicture} alt="" />
          )}
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
        <Overview>{biography}</Overview>
      </OverviewWrapper>
    </TileDetailsWrapper>
  );
};
export default SingleProfile;
