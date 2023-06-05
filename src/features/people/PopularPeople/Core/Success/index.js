import { useSelector } from "react-redux";
import { selectPages, selectTotalPages } from "../../popularPeopleSlice";
import Pagination from "../../../../../common/Pagination";
import Tile from "../Success/Tile/index";
import HeaderTitle from "../../../../../common/HeaderTitle";
import {
  selectSearchedPeoplePages,
  selectSearchedPeopleTotalFrazes,
  selectSearchedPeopleTotalPages,
} from "../../../../../common/SearchBar/searchPeopleSlice";
import { useQueryParameter } from "../../../../../common/hooks/useParameter";

const Success = ({ people }) => {
  const peoplePage = useSelector(selectPages);
  const total = useSelector(selectTotalPages);

  const searchParam = useQueryParameter("search");
  const searchPage = useSelector(selectSearchedPeoplePages);
  const searchedTotalPages = useSelector(selectSearchedPeopleTotalPages);
  const searchedResults = useSelector(selectSearchedPeopleTotalFrazes);

  return (
    <>
      <HeaderTitle
        title={"Popular people"}
        query={searchParam}
        results={searchedResults}
      />
      <Tile people={people} />
      <Pagination
        page={searchParam !== null ? searchPage : peoplePage}
        total={searchParam !== null ? searchedTotalPages : total}
      />
    </>
  );
};

export default Success;
