import { useSelector } from "react-redux";
import { selectCrew } from "../../../profileSlice";
import { selectGenres } from "../../../../../../common/Genres/genresSlice";
import noPoster from "../../../../../../common/img/noposter.svg"

import {
  MovieData,
  Poster,
  PosterWrapper,
  Star,
  StyledLink,
  TextInfoWrapper,
  TileWrapper,
  Title,
  VoteAverange,
  VoteCount,
  VoteWrapper,
  Year
} from "../../../../../../common/MovieTile/styled";
import Genres from "../../../../../../common/Genres/index";
import { MoviesGrid } from "../MoviesGrid/styled";

const MoviesCrew = () => {

  const crew = useSelector(selectCrew);
  const genres = useSelector(selectGenres);
  const profilePicturePath = "https://image.tmdb.org/t/p/w300";


  return (
    <>
      <MoviesGrid>
        {crew.map((cast, id) => (
          <StyledLink to={`/movies/${cast.id}`} key={id}>
            <TileWrapper >
              <PosterWrapper key={id}>
                <>
                  {
                    cast.poster_path ?
                      (
                        <Poster src={cast.poster_path && `${profilePicturePath}${cast.poster_path}`} alt="" />
                      ) : (
                        <Poster src={noPoster} alt="" />
                      )
                  }
                </>
              </PosterWrapper>
              <TextInfoWrapper>
                <MovieData>
                  <Title>{cast.original_title}</Title>
                  <Year>{cast.release_date && cast.release_date.slice(0, 4)}</Year>
                  <Genres genres={genres} genreIds={cast.genre_ids} />
                </MovieData>
                <VoteWrapper>
                  <Star alt="" />
                  <VoteAverange> {cast.vote_average.toFixed(1)}</VoteAverange>
                  <VoteCount>{cast.vote_count} votes</VoteCount>
                </VoteWrapper>
              </TextInfoWrapper>
            </TileWrapper>
          </StyledLink>
        ))}
      </MoviesGrid>
    </>
  )
};
export default MoviesCrew;