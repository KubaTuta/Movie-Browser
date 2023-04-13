import { useSelector } from "react-redux";
import { selectCast } from "../../../profileSlice";
import noPoster from "../../../../../../common/img/noposter.svg"
import { MoviesGridWrapper } from "../../../../../Movies/PopularMovies/Core/MoviesGridWrapper/styled";
import { selectGenres } from "../../../../../../common/Genres/genresSlice";
import Genres from "../../../../../../common/Genres";
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
} from "../../../../../../common/MovieTile/styled"

const MoviesCast = () => {

  const cast = useSelector(selectCast);
  const genres = useSelector(selectGenres)
  const profilePicturePath = "https://image.tmdb.org/t/p/w300";

  return (
    <>
      <MoviesGridWrapper>
        {cast.map((cast, id) => (
          <StyledLink to={`/movie/${cast.id}`} key={id}>
            <TileWrapper>
              <PosterWrapper>
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
                  <VoteAverange> {cast.vote_average}</VoteAverange>
                  <VoteCount>{cast.vote_count} votes</VoteCount>
                </VoteWrapper>
              </TextInfoWrapper>
            </TileWrapper>
          </StyledLink>
        ))}
      </MoviesGridWrapper>
    </>


  )
}
export default MoviesCast;