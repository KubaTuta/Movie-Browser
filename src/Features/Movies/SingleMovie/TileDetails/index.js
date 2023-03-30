import { InfoCategory, InfoText, InfoWrapper, Poster, PosterWrapper, TextWrapper, TileDetailsWrapper, Title } from "../../../../common/DetailsTileStyles/styled"
import poster from "../../../../common/image/noposter.svg"
const TileDetails = () => {
  return (
<TileDetailsWrapper>
<PosterWrapper>
  <Poster src={poster}/>
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
</TextWrapper>
</TileDetailsWrapper>
  )
};

export default TileDetails;