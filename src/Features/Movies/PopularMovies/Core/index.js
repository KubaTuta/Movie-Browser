import { useSelector } from "react-redux";
import { selectStatus } from "../popularMoviesSlice";
import Loading from "../../../../common/Loading"
import Success from "./Success";
import ErrorPage from "../../../../common/ErrorPage";

const Core = () => {

  const status = useSelector(selectStatus);

  switch (status) {
    case "pending":
      return <Loading />;
    case "success":
      return <Success />;
    default:
      return <ErrorPage />;
  }
};

export default Core;