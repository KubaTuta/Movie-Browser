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
} from "../../../../../common/Navigation/Input/Search/searchSlice";
import HeaderTitle from "../../../../../common/Header";
import { selectSearchedTotalFrazes } from "../../../../../common/Navigation/Input/Search/searchSlice";

const Success = () => {
  const page = useSelector(selectPages);
  const movies = useSelector(selectMovies);
  const total = useSelector(selectTotalMovies);

  const searchQuery = useSelector(selectSearchedQuery);
  const searchPage = useSelector(selectSearchedPages);
  const searchedMovies = useSelector(selectSearchedMovies);
  const searchedTotalPages = useSelector(selectSearchedTotalPages);
  const searchedResults = useSelector(selectSearchedTotalFrazes);

  return (
    <>
      <HeaderTitle title={"Popular movies"} query={searchQuery} results={searchedResults}/>
      <MoviesGridWrapper>
        <MovieTile movies={searchQuery.length > 0 ? searchedMovies : movies} />
      </MoviesGridWrapper>
      <Pagination
        page={searchQuery.length > 0 ? searchPage : page}
        fetchApi={searchQuery.length > 0 ? fetchSearchPending : fetchMoviesPending}
        query={searchQuery.length > 0 ? searchQuery : null}
        total={searchQuery.length > 0 ? searchedTotalPages : total}
      />
    </>
  )
};

export default Success;

