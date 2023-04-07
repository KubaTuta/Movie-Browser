import { useSelector } from "react-redux";
import { selectStatus } from "../popularMoviesSlice";
import Loading from "../../../../common/Loading"
import Success from "./Success";
import ErrorPage from "../../../../common/ErrorPage";
import { selectSearchedStatus } from "../../../../common/Navigation/Input/Search/searchSlice";

const Core = () => {

  const status = useSelector(selectStatus);
  const queryStatus = useSelector(selectSearchedStatus);

  switch (status) {
    case "pending":
      return <Loading />;
    case "success":
      if (queryStatus === "pending") {
        return <Loading />
      }
      return <Success />;
    default:
      return <ErrorPage />;
  }
};

export default Core;