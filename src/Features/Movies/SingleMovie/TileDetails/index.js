import {
  InfoCategory,
  InfoText,
  InfoWrapper,
  Poster,
  PosterWrapper,
  TextWrapper,
  TileDetailsWrapper,
  Title,
} from "../../../../common/DetailsTileStyles/styled";
import {
  VoteWrapper,
  VoteAverangeWrapper,
  Scale,
  VoteAverange,
  Star,
  VoteCount,
}
  from "./styled";
import poster from "../../../../common/image/noposter.svg";
const TileDetails = () => {
  return (
    <TileDetailsWrapper>
      <PosterWrapper>
        <Poster src={poster} />
      </PosterWrapper>
      <TextWrapper>
        <Title> Mulan</Title>
        <InfoWrapper>
          <InfoCategory>hhxjd</InfoCategory>
          <InfoText>cdcdcdc</InfoText>
        </InfoWrapper>
        <InfoWrapper>
          <InfoCategory>hhxjd</InfoCategory>
          <InfoText>cdcdcdc</InfoText>
        </InfoWrapper>
        <VoteWrapper>
              <VoteAverangeWrapper>
                <Star alt="" />
                <VoteAverange> 7,6</VoteAverange>
                <Scale>/ 10</Scale>
                </VoteAverangeWrapper>
              <VoteCount>786 votes</VoteCount>
            </VoteWrapper>
            <InfoText>A young Chinese maiden disguises herself as a male warrior in order to save her father. 
Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.</InfoText>
      </TextWrapper>
    
    </TileDetailsWrapper>
  )
};

export default TileDetails;