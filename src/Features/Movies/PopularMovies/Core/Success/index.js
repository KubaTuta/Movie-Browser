import { useSelector } from "react-redux";
import { useQueryParameter } from "../../../../../common/useParameter";
import {
  selectPages,
  selectTotalMovies,
} from "../../popularMoviesSlice";
import {
  selectSearchedPages,
  selectSearchedTotalPages,
  selectSearchedTotalFrazes
} from "../../../../../common/SearchBar/searchMoviesSlice";
import MovieTile from "../../../../../common/MovieTile/index";
import HeaderTitle from "../../../../../common/HeaderTitle";
import Pagination from "../../../../../common/Pagination";
import { MoviesGridWrapper } from "./styled";

const Success = ({ movies }) => {
  const moviesPage = useSelector(selectPages);
  const total = useSelector(selectTotalMovies);

  const searchParam = useQueryParameter("search");
  const searchPage = useSelector(selectSearchedPages);
  const searchedTotalPages = useSelector(selectSearchedTotalPages);
  const searchedResults = useSelector(selectSearchedTotalFrazes);

  return (
    <>
      <HeaderTitle
        title={"Popular movies"}
        query={searchParam}
        results={searchedResults}
      />
      <MoviesGridWrapper>
        <MovieTile movies={movies} />
      </MoviesGridWrapper>
      <Pagination
        page={searchParam !== null ? searchPage : moviesPage}
        total={searchParam !== null ? searchedTotalPages : total}
      />
    </>
  );
};

export default Success;