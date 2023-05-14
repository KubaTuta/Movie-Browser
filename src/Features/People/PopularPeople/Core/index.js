import { useSelector } from "react-redux";
import ErrorPage from "../../../../common/statuses/ErrorPage/index";
import Loading from "../../../../common/statuses/Loading/index";
import { selectPeople, selectStatus } from "../popularPeopleSlice";
import Success from "./Success/";
import {
  selectSearchedPeople,
  selectSearchedPeopleStatus,
  selectSearchedPeopleTotalFrazes,
} from "../../../../common/SearchBar/searchPeopleSlice";
import NoResult from "../../../../common/statuses/NoResult";

const Core = ({ queryParam }) => {
  const status = useSelector(selectStatus);
  const queryStatus = useSelector(selectSearchedPeopleStatus);
  const resultsPeople = useSelector(selectSearchedPeopleTotalFrazes);
  const people = useSelector(selectPeople);
  const searchedPeople = useSelector(selectSearchedPeople);

  switch (queryParam !== null ? queryStatus : status) {
    case "pending":
      return <Loading />;
    case "success":
      if (resultsPeople !== 0) {
        return (
          <Success people={queryParam !== null ? searchedPeople : people} />
        )
      } else {
        return <NoResult query={queryParam} />;
      }
    default:
      return <ErrorPage />;
  }
};

export default Core;
