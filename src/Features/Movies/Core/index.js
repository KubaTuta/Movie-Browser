import { useSelector } from "react-redux";
import { selectStatus } from "../popularMoviesSlice";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading"
import Success from "./Success";

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