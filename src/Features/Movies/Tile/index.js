
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectMovies, fetchMoviesPending } from "../popularMoviesSlice";
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
} from "./styled";
import Genres from "./Genres";
import { fetchGenresPending, selectGenres } from "./Genres/genresSlice";

const Tile = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchMoviesPending(1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchGenresPending())
  });
  
  const posterPath = "https://image.tmdb.org/t/p/w500";

  return (
    <GridWrapper>
      {movies.map((movie, id) => (
        <TileWrapper key={id}>
          <Poster src={movie.poster_path && `${posterPath}${movie.poster_path}`} alt="" />
          <TextInfoWrapper>
            <Title>{movie.original_title}</Title>
            <Year>{movie.release_date && movie.release_date.slice(0, 4)}</Year>
            <Genres genres={genres} genreIds={movie.genre_ids}/>
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
export default Tile;