import { useSelector } from "react-redux";
import Pagination from "../../../../common/Pagination";
import { fetchMoviesPending, selectPages } from "../../popularMoviesSlice";
import MovieTile from "../../../../common/MovieTile/index";
import { selectMovies } from "../../popularMoviesSlice";
import { MoviesGridWrapper } from "./MoviesGridWrapper/styled";

const Success = () => {
  const page = useSelector(selectPages);
  const movies = useSelector(selectMovies);

  return (
    <>
    <MoviesGridWrapper>
      <MovieTile movies={movies} />
      </MoviesGridWrapper>
      <Pagination page={page} fetchApi={fetchMoviesPending} />
    </>
  )
};

export default Success;

