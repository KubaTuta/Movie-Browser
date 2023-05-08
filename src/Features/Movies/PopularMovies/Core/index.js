import { useSelector } from "react-redux";
import { selectStatus } from "../popularMoviesSlice";
import Loading from "../../../../common/Search/Loading";
import Success from "./Success";
import ErrorPage from "../../../../common/Search/ErrorPage";
import {
  selectSearchedQuery,
  selectSearchedStatus,
  selectSearchedTotalFrazes,
} from "../../../../common/Navigation/Input/Search/searchSlice";
import NoResult from "../../../../common/Search/NoResult";

const Core = () => {
  const status = useSelector(selectStatus);
  const queryStatus = useSelector(selectSearchedStatus);
  const query = useSelector(selectSearchedQuery);
  const results = useSelector(selectSearchedTotalFrazes);

  switch (status) {
    case "pending":
      return <Loading />;
    case "success":
      if (queryStatus === "pending") {
        return <Loading />;
      }
      return results === 0 && query.length > 0 ? (
        <NoResult query={query} />
      ) : (
        <Success />
      );
    default:
      return <ErrorPage />;
  }
};

export default Core;
