import { useLocation } from "react-router-dom";
import { Header } from "./styled";

const HeaderTitle = () => {

  const location = useLocation();

  const isMoviesPage = location.pathname === "/";

  return (
    <Header>
      {isMoviesPage ? "Popular movies" : "Popular people"}
    </Header>
  )
};

export default HeaderTitle;