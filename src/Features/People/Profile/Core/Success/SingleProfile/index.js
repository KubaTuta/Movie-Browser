
import { useSelector } from "react-redux";
import { selectCast, selectCrew, } from "../../../profileSlice";
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

const SingleProfile = ({ picture, name, birthday, placeOfBirth, biography }) => {


  const profilePicturePath = "https://image.tmdb.org/t/p/w500";


  const cast = useSelector(selectCast)
  console.log(cast)
  const crew = useSelector(selectCrew)
  console.log(crew)
  return (

    <TileDetailsWrapper>
      <PosterWrapper >
        <Poster src={picture && `${profilePicturePath}${picture}`} alt="" />
      </PosterWrapper>
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

    </TileDetailsWrapper>







  )
};
export default SingleProfile;
