import { useSelector } from "react-redux";
import { selectCrew } from "../../../profileSlice";
import { selectGenres } from "../../../../../../common/Genres/genresSlice";
import noPoster from "../../../../../../common/img/noPoster.png"

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
} from "../../../../../../common/MovieTile/styled";
import Genres from "../../../../../../common/Genres/index";
import { MoviesGrid } from "../MoviesGrid/styled";
import { CrewPoster, CrewTextInfoWrapper, MoviesTileWrapper } from "../styled";

const MoviesCrew = () => {

  const crew = useSelector(selectCrew);
  const genres = useSelector(selectGenres);
  const profilePicturePath = "https://image.tmdb.org/t/p/w300";


  return (
    <>
      <MoviesGrid>
        {crew.map((cast, id) => (
          <StyledLink to={`/movies/${cast.id}`} key={id}>
            <MoviesTileWrapper >
              <PosterWrapper key={id}>
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
export default MoviesCrew;