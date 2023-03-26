import { useSelector } from "react-redux";
import { selectPages } from "./popularMoviesSlice";
import { fetchMoviesPending } from "./popularMoviesSlice";
import { Container } from "../../common/Container/styled";
import { Header } from "../../common/Header/styled";
import Pagination from "../../common/Pagination/index";
import Tile from "./Tile";

const Movies = () => {
  const page = useSelector(selectPages);

  return (
    <Container>
      <Header>
        Popular movies
      </Header>
      <Tile />
      <Pagination page={page} fetchApi={fetchMoviesPending}/>
    </Container>
  )
};

export default Movies;





