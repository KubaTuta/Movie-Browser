import PageTitle from "../../Comman/PageTitle";
import { Container } from "../../styled";

import Pagination from "./Pagination";
import Tile from "./Tile";

const exampleData = require("./examplePopularMovies.json");

const Movies = () => {
  return (
    <Container>
      <PageTitle title="Popular movies"/>
      <Tile />
      <Pagination
        page={exampleData.page}
        total={exampleData.total_pages}
      />
    </Container>
  )
};

export default Movies;





