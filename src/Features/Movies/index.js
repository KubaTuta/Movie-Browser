import { Container } from "../../common/Container/styled";
import { Header } from "../../common/Header/styled";
import Pagination from "../../common/Pagination/index";
import Tile from "./Tile";

const Movies = () => {
  return (
    <Container>
      <Header>
        Popular movies
      </Header>
      <Tile />
      <Pagination />
    </Container>
  )
};

export default Movies;





