import { useSelector } from "react-redux";
import { useImageUrl } from "../hooks/useImageUrl";
import {
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
  PosterWrapper,
  StyledLink,
} from "./styled";
import noPoster from "../img/noposter.svg";
import Genres from "../Genres/index";
import { selectGenres } from "../Genres/genresSlice";

const MovieTile = ({ movies }) => {
  const { posterPathUrl } = useImageUrl();

  const genres = useSelector(selectGenres);
  const posterPath = posterPathUrl();

  return (
    <>
      {movies.map((movie, id) => (
        <StyledLink to={`/movies/${movie.id}`} key={id}>
          <TileWrapper>
            <PosterWrapper>
              <>
                {movie.poster_path ? (
                  <Poster
                    src={
                      movie.poster_path && `${posterPath}${movie.poster_path}`
                    }
                    alt=""
                  />
                ) : (
                  <Poster src={noPoster} alt="" />
                )}
              </>
            </PosterWrapper>
            <TextInfoWrapper>
              <MovieData>
                <Title>{movie.original_title}</Title>
                <Year>
                  {movie.release_date && movie.release_date.slice(0, 4)}
                </Year>
                <Genres genres={genres} genreIds={movie.genre_ids} />
              </MovieData>
              <VoteWrapper>
                <Star alt="" />
                <VoteAverange> {movie?.vote_average?.toFixed(1)}</VoteAverange>
                <VoteCount>{movie.vote_count} votes</VoteCount>
              </VoteWrapper>
            </TextInfoWrapper>
          </TileWrapper>
        </StyledLink>
      ))}
    </>
  );
};

export default MovieTile;
