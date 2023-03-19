
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
  GenersWrapper,
  Genre,
  Star,
  VoteWrapper,
  VoteAverange,
  VoteCount,
  GenerWrapper,
  TextInfoWrapper,
} from "./styled";

const Tile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch((fetchMoviesPending(1)));
  }, [dispatch])

  const movies = useSelector(selectMovies);

  const posterPath = "https://image.tmdb.org/t/p/w500";
  return (
    <GridWrapper>
      {movies.map(movie => (
        <TileWrapper key={movie.id}>
          <Poster src={`${posterPath}${movie.poster_path}`} alt="" />
          <TextInfoWrapper>
            <Title>{movie.original_title}</Title>
            <Year>{new Date(movie.release_date).getFullYear()}</Year>
            <GenersWrapper>
              <GenerWrapper><Genre>Action</Genre></GenerWrapper>
              <GenerWrapper><Genre>Comedy</Genre></GenerWrapper>
              <GenerWrapper><Genre>Drama</Genre></GenerWrapper>
            </GenersWrapper>
            <VoteWrapper>
              <Star alt="" />
              <VoteAverange> {movie.vote_average}</VoteAverange>
              <VoteCount>{movie.vote_count} votes</VoteCount>
            </VoteWrapper>
          </TextInfoWrapper>
        </TileWrapper>
      )
      )}
    </GridWrapper>
  )
}
export default Tile;