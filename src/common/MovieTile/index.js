
import { useSelector } from "react-redux";
import {
  GridWrapper,
  TileWrapper,
  Poster,
  Title,
  Year,
  Star,
  VoteWrapper,
  VoteAverange,
  VoteCount,
  TextInfoWrapper,
  MovieData,
} from "./styled";
import noPoster from "./noposter.svg";
import Genres from "./Genres/index";
import { selectGenres } from "./Genres/genresSlice";

const MovieTile = ({movies}) => {
  const genres = useSelector(selectGenres);
  const posterPath = "https://image.tmdb.org/t/p/w500";

  return (
    <GridWrapper>
      {movies.map((movie, id) => (
        <TileWrapper key={id}>
          <>
            {
              movie.poster_path ?
                (
                  <Poster src={movie.poster_path && `${posterPath}${movie.poster_path}`} alt="" />
                ) : (
                  <Poster src={noPoster} alt="" />
                )
            }
          </>
          <TextInfoWrapper>
            <MovieData>
              <Title>{movie.original_title}</Title>
              <Year>{movie.release_date && movie.release_date.slice(0, 4)}</Year>
              <Genres genres={genres} genreIds={movie.genre_ids} />
            </MovieData>
            <VoteWrapper>
              <Star alt="" />
              <VoteAverange> {movie.vote_average}</VoteAverange>
              <VoteCount>{movie.vote_count} votes</VoteCount>
            </VoteWrapper>
          </TextInfoWrapper>
        </TileWrapper>
      ))}
    </GridWrapper>
  )
}
export default MovieTile;