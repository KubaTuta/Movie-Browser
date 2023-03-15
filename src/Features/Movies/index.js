import { Container } from "../../styled";
import { GridWrapper, Header } from "./styled";
import Pagination from "./Pagination";
import Tile from "./Tile";
const exampleData = require("./examplePopularMovies.json");

const Movies = () => {
  return (
    <Container>
      <Header>
        Popular movies
      </Header>
      <GridWrapper>
        {exampleData.results.map(({ original_title, id, release_date, vote_average, vote_count, genre_ids, poster_path }) => (
          <Tile key={id} />
        ))}
      </GridWrapper>
      <Pagination 
      page={exampleData.page}
      total={exampleData.total_pages}
      />
    </Container>
  )
};

export default Movies;