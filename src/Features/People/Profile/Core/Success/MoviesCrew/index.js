import { useSelector } from "react-redux";
import { selectCrew } from "../../../profileSlice";
import { selectGenres } from "../../../../../../common/Genres/genresSlice";
import { MoviesGridWrapper } from "../../../../../Movies/PopularMovies/Core/MoviesGridWrapper/styled";
import noPoster from "../../../../../../common/img/noposter.svg"
import {
  MovieData,
  Poster,
  PosterWrapper,
  Star,
  TextInfoWrapper,
  TileWrapper,
  Title,
  VoteAverange,
  VoteCount,
  VoteWrapper,
  Year
} from "../../../../../../common/MovieTile/styled";
import Genres from "../../../../../../common/Genres/index";

const MoviesCrew = () => {

  const crew = useSelector(selectCrew);
  const genres = useSelector(selectGenres);
  const profilePicturePath = "https://image.tmdb.org/t/p/w300";


  return (
    <>
      <MoviesGridWrapper>
        {crew.map((cast, id) => (
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
                <VoteAverange> {cast.vote_average}</VoteAverange>
                <VoteCount>{cast.vote_count} votes</VoteCount>
              </VoteWrapper>
            </TextInfoWrapper>
          </TileWrapper>
        ))}
      </MoviesGridWrapper>
    </>
  )
};
export default MoviesCrew;