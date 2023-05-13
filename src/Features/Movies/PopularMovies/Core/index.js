import { useSelector } from "react-redux";
import { selectMovies, selectStatus } from "../popularMoviesSlice";
import Loading from "../../../../common/Search/Loading";
import Success from "./Success";
import ErrorPage from "../../../../common/Search/ErrorPage";
import {
  selectSearchedMovies,
  selectSearchedStatus,
  selectSearchedTotalFrazes,
} from "../../../../common/Navigation/Input/Search/searchSlice";
import NoResult from "../../../../common/Search/NoResult";

const Core = ({ queryParam }) => {
  const status = useSelector(selectStatus);
  const queryStatus = useSelector(selectSearchedStatus);
  const results = useSelector(selectSearchedTotalFrazes);
  const movies = useSelector(selectMovies);
  const searchedMovies = useSelector(selectSearchedMovies);

  switch (queryParam !== null ? queryStatus : status) {
    case "pending":
      return <Loading />;
    case "success":
      if (results !== 0) {
        return (
          <Success movies={queryParam !== null ? searchedMovies : movies} />
        )
      } else {
        return <NoResult query={queryParam} />;
      }
    default:
      return <ErrorPage />;
  }
};

export default Core;
