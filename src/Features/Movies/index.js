import { Container } from "../../Common/Container/styled";
import { Header } from "../../Common/Header/styled";
import Pagination from "../../Common/Pagination/index";
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





