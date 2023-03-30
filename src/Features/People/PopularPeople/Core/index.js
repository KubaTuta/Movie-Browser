import { useSelector } from "react-redux";
import ErrorPage from "../../../../common/ErrorPage/index";
import Loading from "../../../../common/Loading/index";
import { selectStatus } from "../popularPeopleSlice";
import Success from "./Success/";

const Core = () => {

  const status = useSelector(selectStatus);

  switch(status) {
    case "pending":
      return <Loading />;
    case "success":
      return <Success />;
    default:
      return <ErrorPage />
  }
};

export default Core;