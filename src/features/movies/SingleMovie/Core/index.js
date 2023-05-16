import { useSelector } from "react-redux";
import { selectStatus } from "../movieSlice";
import Loading from "../../../../common/statuses/Loading"
import Success from "./Success";
import ErrorPage from "../../../../common/statuses/ErrorPage";

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