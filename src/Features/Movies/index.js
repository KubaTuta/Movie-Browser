import { Container } from "../../styled";
import { Header } from "./styled";
import Pagination from "./Pagination";
import Tile from "./Tile";
const exampleData = require("./examplePopularMovies.json");

const Movies = () => {
  return (
    <Container>
      <Header>
        Popular movies
      </Header>
      <Tile />
      <Pagination
        page={exampleData.page}
        total={exampleData.total_pages}
      />
    </Container>
  )
};

export default Movies;





