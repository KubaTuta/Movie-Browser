import { useSelector } from "react-redux";
import Pagination from "../../../../../common/Pagination";
import { fetchMoviesPending, selectPages } from "../../popularMoviesSlice";
import MovieTile from "../../../../../common/MovieTile/index";
import { selectMovies } from "../../popularMoviesSlice";
import { MoviesGridWrapper } from "../MoviesGridWrapper/styled";
import { selectSearchedMovies } from "../../../../../common/Navigation/Input/Search/searchSlice";

const Success = () => {
  const page = useSelector(selectPages);
  const movies = useSelector(selectMovies);
  const searchedMovies = useSelector(selectSearchedMovies);

  return (
    <>
    <MoviesGridWrapper>
      <MovieTile movies={searchedMovies ? searchedMovies : movies} />
      </MoviesGridWrapper>
      <Pagination page={page} fetchApi={fetchMoviesPending} />
    </>
  )
};

export default Success;

