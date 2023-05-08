import { useSelector } from "react-redux";
import {
  fetchPeoplePending,
  selectPages,
  selectPeople,
  selectTotalPages,
} from "../../popularPeopleSlice";
import Pagination from "../../../../../common/Pagination";
import Tile from "../Success/Tile/index";
import HeaderTitle from "../../../../../common/Header";
import {
  fetchSearchPeoplePending,
  selectSearchedPeople,
  selectSearchedPeoplePages,
  selectSearchedPeopleQuery,
  selectSearchedPeopleTotalFrazes,
  selectSearchedPeopleTotalPages,
} from "../../../../../common/Navigation/PeopleInput/Search/searchPeopleSlice";

const Success = () => {
  const people = useSelector(selectPeople);
  const page = useSelector(selectPages);
  const total = useSelector(selectTotalPages);

  const searchedPeople = useSelector(selectSearchedPeople);
  const searchQuery = useSelector(selectSearchedPeopleQuery);
  const searchPage = useSelector(selectSearchedPeoplePages);
  const searchedTotalPages = useSelector(selectSearchedPeopleTotalPages);
  const results = useSelector(selectSearchedPeopleTotalFrazes);

  return (
    <>
      <HeaderTitle
        title={"Popular people"}
        query={searchQuery}
        results={results}
      />
      <Tile people={searchQuery.length > 0 ? searchedPeople : people} />
      <Pagination
        page={searchQuery.length > 0 ? searchPage : page}
        fetchApi={
          searchQuery.length > 0 ? fetchSearchPeoplePending : fetchPeoplePending
        }
        query={searchQuery.length > 0 ? searchQuery : null}
        total={searchQuery.length > 0 ? searchedTotalPages : total}
      />
    </>
  );
};

export default Success;
