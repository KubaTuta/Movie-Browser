import { useLocation } from "react-router-dom";
import { Header } from "./styled";
import { useSelector } from "react-redux";
import { selectSearchedQuery, selectSearchedTotalFrazes } from "../Navigation/Input/Search/searchSlice";

const HeaderTitle = () => {

  const location = useLocation();

  const isMoviesPage = location.pathname === "/";

  const query = useSelector(selectSearchedQuery);
  const results = useSelector(selectSearchedTotalFrazes);

  return (
    <Header>
      {
        isMoviesPage
          ?
          query.length > 0 ? `Search results for "${query}" (${results})` : "Popular movies"
          :
          "Popular people"
      }
    </Header>
  )
};

export default HeaderTitle;