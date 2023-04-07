import { useSelector } from "react-redux";
import Pagination from "../../../../../common/Pagination";
import {
  fetchMoviesPending,
  selectPages,
  selectTotalMovies
} from "../../popularMoviesSlice";
import MovieTile from "../../../../../common/MovieTile/index";
import { selectMovies } from "../../popularMoviesSlice";
import { MoviesGridWrapper } from "../MoviesGridWrapper/styled";
import {
  fetchSearchPending,
  selectSearchedMovies,
  selectSearchedPages,
  selectSearchedQuery,
  selectSearchedTotalPages,
  selectSearchedTotalFrazes,
} from "../../../../../common/Navigation/Input/Search/searchSlice";
import HeaderTitle from "../../../../../common/Header";

const Success = () => {
  const page = useSelector(selectPages);
  const movies = useSelector(selectMovies);
  const total = useSelector(selectTotalMovies);

  const searchQuery = useSelector(selectSearchedQuery);
  const searchPage = useSelector(selectSearchedPages);
  const searchedMovies = useSelector(selectSearchedMovies);
  const searchedTotalPages = useSelector(selectSearchedTotalPages);
  const searchedTotalFrazes = useSelector(selectSearchedTotalFrazes);

  return (
    <>
      <HeaderTitle />
      <MoviesGridWrapper>
        <MovieTile movies={searchQuery.length > 0 ? searchedMovies : movies} />
      </MoviesGridWrapper>
      <Pagination
        page={searchQuery.length > 0 ? searchPage : page}
        fetchApi={searchQuery.length > 0 ? fetchSearchPending : fetchMoviesPending}
        query={searchQuery.length > 0 ? searchQuery : null}
        total={searchQuery.length > 0 ? searchedTotalPages : total}
        frazes={searchQuery.length > 0 ? searchedTotalFrazes : null}
      />
    </>
  )
};

export default Success;

