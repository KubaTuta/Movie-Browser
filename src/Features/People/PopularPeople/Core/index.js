import { useSelector } from "react-redux";
import ErrorPage from "../../../../common/Search/ErrorPage/index";
import Loading from "../../../../common/Search/Loading/index";
import { selectStatus } from "../popularPeopleSlice";
import Success from "./Success/";
import { selectSearchedPeopleQuery, selectSearchedPeopleStatus, selectSearchedPeopleTotalFrazes } from "../../../../common/Navigation/PeopleInput/Search/searchPeopleSlice";
import NoResult from "../../../../common/Search/NoResult";

const Core = () => {

  const status = useSelector(selectStatus);
  const queryStatus = useSelector(selectSearchedPeopleStatus);
  const queryPeople = useSelector(selectSearchedPeopleQuery);
  const resultsPeople = useSelector(selectSearchedPeopleTotalFrazes);

  switch (status) {
    case "pending":
      return <Loading />;
    case "success":
      if (queryStatus === "pending") {
        return <Loading />
      }
      return (resultsPeople === 0 && queryPeople.length > 0) ? <NoResult query={queryPeople} /> : <Success />
    default:
      return <ErrorPage />
  }
};

export default Core;