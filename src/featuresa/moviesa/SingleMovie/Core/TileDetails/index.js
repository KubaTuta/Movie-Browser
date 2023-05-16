import {
  InfoCategory,
  InfoWrapper,
  Overview,
  Poster,
  PosterWrapper,
  TextWrapper,
  TileDetailsWrapper,
  Title,
  OverviewWrapper,
  InfoText,
} from "../../../../../common/DetailsTileStyles/styled";
import {
  InfoTextWrapper,
  VoteAverangeWrapper,
  Scale,
  VoteAverange,
  Star,
  VoteCount,
  GenreWrapperTD,
  Year,
  Countries,
}
  from "./styled";
import noPoster from "../../../../../common/img/noPoster.png"
import { Genre, GenresWrapper } from "../../../../../common/Genres/styled";
import { Fragment } from "react";

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
        <InfoTextWrapper>
          <InfoCategory>Production:</InfoCategory>
          {countries && countries.map((country, index, countries) => (
                <Fragment key={index}>
                  <Countries $big key={country.name}>
                    {country.name}
                    {countries.length > 0 ? (
                      index < countries.length - 1 ? (
                        <span>,&nbsp;</span>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </Countries>
                  <Countries $small key={country.iso_3166_1}>
                    {country.iso_3166_1}
                    {countries.length > 0 ? (
                      index < countries.length - 1 ? (
                        <span>,&nbsp;</span>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </Countries>
                </Fragment>
              ))}
        </InfoTextWrapper>
        <InfoWrapper>
          <InfoCategory>Release date:</InfoCategory>
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
}

export default TileDetails;