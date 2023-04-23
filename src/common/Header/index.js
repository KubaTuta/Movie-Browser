import { useLocation } from "react-router-dom";
import { Header } from "./styled";
import { useSelector } from "react-redux";
import { selectSearchedQuery, selectSearchedTotalFrazes } from "../Navigation/Input/Search/searchSlice";
import { selectSearchedPeopleQuery, selectSearchedPeopleTotalFrazes } from "../Navigation/PeopleInput/Search/searchPeopleSlice";

const HeaderTitle = () => {

  const location = useLocation();

  const isMoviesPage = location.pathname === "/" || location.pathname.startsWith("/movie/");

  const query = useSelector(selectSearchedQuery);
  const results = useSelector(selectSearchedTotalFrazes);

  const queryPeople = useSelector(selectSearchedPeopleQuery);
  const resultsPeople = useSelector(selectSearchedPeopleTotalFrazes);

  return (
    <Header>
      {
        isMoviesPage
          ?
          query.length > 0
            ?
            results === 0
              ?
              `Sorry, there are no results for "${query}"`
              :
              `Search results for "${query}" (${results})`
            :
            "Popular movies"
          :
          queryPeople.length > 0
            ?
            resultsPeople === 0 ?
              `Sorry, there are no results for "${queryPeople}"`
              :
              `Search results for "${queryPeople}" (${resultsPeople})`
            :
            "Popular people"
      }
    </Header>
  )
};

export default HeaderTitle;