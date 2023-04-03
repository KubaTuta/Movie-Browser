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
  InfoTextWrapper,
  VoteAverangeWrapper,
  Scale,
  VoteAverange,
  Star,
  VoteCount,
  GenreWrapperTD,
  Year,
}
  from "./styled";
import noPoster from "../../../../common/image/noposter.svg"
import { Genre, GenresWrapper } from "../../../../common/Genres/styled";

const TileDetails = (
  { poster, title, year, countries, release, genres, vote, votes, overview }
) => {

  const posterPath = "https://image.tmdb.org/t/p/w500";

  return (
    <TileDetailsWrapper>
      <PosterWrapper>
        {
          poster ?
            (
              <Poster src={`${posterPath}${poster}`} alt="" />
            ) : (
              <Poster src={noPoster} alt="" />
            )
        }
      </PosterWrapper>
      <TextWrapper>
        <Title> {title}</Title>
        <Year>{year && year.slice(0, 4)}</Year>
        <InfoWrapper>
          <InfoCategory>Production</InfoCategory>
          {
            countries && countries.map((country) => (
              <InfoTextWrapper key={country.iso_3166_1}>
                <InfoText>{country.name}</InfoText>
              </InfoTextWrapper>
            ))
          }
        </InfoWrapper>
        <InfoWrapper>
          <InfoCategory>Release date</InfoCategory>
          <InfoText>{new Date(release).toLocaleDateString()}</InfoText>
        </InfoWrapper>
        <GenresWrapper>
          {
            genres && genres.map((genre) => (

              <GenreWrapperTD key={genre.id}>
                <Genre>{genre.name}</Genre>
              </GenreWrapperTD>
            ))
          }
        </GenresWrapper>
        <InfoTextWrapper>
          <VoteAverangeWrapper>
            <Star alt="" />
            <VoteAverange>{vote && vote.toFixed(1)}</VoteAverange>
            <Scale>/ 10</Scale>
          </VoteAverangeWrapper>
          <VoteCount>{votes}</VoteCount>
        </InfoTextWrapper>
      </TextWrapper>
      <OverviewWrapper>
        <Overview>
          {overview}
        </Overview>
      </OverviewWrapper>
    </TileDetailsWrapper>
  )
};

export default TileDetails;