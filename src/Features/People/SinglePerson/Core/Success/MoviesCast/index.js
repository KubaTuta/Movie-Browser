import { useSelector } from "react-redux";
import { selectCast } from "../../../personSlice";
import noPoster from "../../../../../../common/img/noPoster.png"
import { selectGenres } from "../../../../../../common/Genres/genresSlice";
import Genres from "../../../../../../common/Genres";
import {
  MovieData,
  PosterWrapper,
  Star,
  StyledLink,
  Title,
  VoteAverange,
  VoteCount,
  VoteWrapper,
  Year
} from "../../../../../../common/MovieTile/styled"
import { MoviesGrid } from "../MoviesGrid/styled";
import { CrewPoster, CrewTextInfoWrapper, MoviesTileWrapper } from "../styled";

const MoviesCast = () => {

  const cast = useSelector(selectCast);
  const genres = useSelector(selectGenres)
  const profilePicturePath = "https://image.tmdb.org/t/p/w300";

  return (
    <>
      <MoviesGrid>
        {cast.map((cast, id) => (
          <StyledLink to={`/movies/${cast.id}`} key={id}>
            <MoviesTileWrapper>
              <PosterWrapper>
                <>
                  {
                    cast.poster_path ?
                      (
                        <CrewPoster src={cast.poster_path && `${profilePicturePath}${cast.poster_path}`} alt="" />
                      ) : (
                        <CrewPoster src={noPoster} alt="" />
                      )
                  }
                </>
              </PosterWrapper>
              <CrewTextInfoWrapper>
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
              </CrewTextInfoWrapper>
            </MoviesTileWrapper>
          </StyledLink>
        ))}
      </MoviesGrid>
    </>
  )
};
export default MoviesCast;