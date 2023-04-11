import { useSelector } from "react-redux";
import ErrorPage from "../../../../common/ErrorPage/index";
import Loading from "../../../../common/Loading/index";
import { selectStatus } from "../popularPeopleSlice";
import Success from "./Success/";
import { selectSearchedPeopleStatus } from "../../../../common/Navigation/PeopleInput/Search/searchPeopleSlice";

const Core = () => {

  const status = useSelector(selectStatus);
  const queryStatus = useSelector(selectSearchedPeopleStatus);

  switch(status) {
    case "pending":
      return <Loading />;
    case "success":
      if (queryStatus === "pending") {
        return <Loading />
      }
      return <Success />;
    default:
      return <ErrorPage />
  }
};

export default Core;