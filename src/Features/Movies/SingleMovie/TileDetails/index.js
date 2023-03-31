import {
  InfoCategory,
  InfoText,
  InfoWrapper,
  Overview,
  Poster,
  PosterWrapper,
  TextWrapper,
  TileDetailsWrapper,
  Title,
  OverviewWrapper,
} from "../../../../common/DetailsTileStyles/styled";
import {
  VoteWrapper,
  VoteAverangeWrapper,
  Scale,
  VoteAverange,
  Star,
  VoteCount,
  GenreWrapperTD,
  Year,
  
}
  from "./styled";
import poster from "../../../../common/image/noposter.svg";
import { Genre, GenresWrapper } from "../../../../common/Genres/styled";
const TileDetails = () => {
  return (
    <TileDetailsWrapper>
      <PosterWrapper>
        <Poster src={poster} />
      </PosterWrapper>
      <TextWrapper>
        <Title> Mulan</Title>
        <Year>2022</Year>
        <InfoWrapper>
          <InfoCategory>hhxjd</InfoCategory>
          <InfoText>cdcdcdc</InfoText>
        </InfoWrapper>
        <InfoWrapper>
          <InfoCategory>hhxjd</InfoCategory>
          <InfoText>cdcdcdc</InfoText>
        </InfoWrapper>
       <GenresWrapper>
        <GenreWrapperTD><Genre>Drama</Genre></GenreWrapperTD>
        <GenreWrapperTD><Genre>Actionkk</Genre></GenreWrapperTD>

       </GenresWrapper>
        <VoteWrapper>
              <VoteAverangeWrapper>
                <Star alt="" />
                <VoteAverange> 7,6</VoteAverange>
                <Scale>/ 10</Scale>
                </VoteAverangeWrapper>
              <VoteCount>786 votes</VoteCount>
            </VoteWrapper>
            </TextWrapper>
            <OverviewWrapper>
            <Overview>
              A young Chinese maiden disguises herself as a male warrior in order to save her father. 
Disguises herself as a male warrior in order to save her father.  
A young Chinese maiden disguises herself as a male warrior in order to save her father.
</Overview>
</OverviewWrapper>
     
      
    
    </TileDetailsWrapper>
  )
};

export default TileDetails;