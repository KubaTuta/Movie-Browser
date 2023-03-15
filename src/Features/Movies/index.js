import { Container } from "../../styled";
import { GridWrapper, Header } from "./styled";
import Pagination from "./Pagination";
import {
  Tile,
  Poster,
  Title,
  Year,
  GenersWrapper,
  Genre,
  Star,
  VoteWrapper,
  VoteAverange,
  VoteCount,
  GenerWrapper
} from "./Tile/styled";
const exampleData = require("./examplePopularMovies.json");

const Movies = () => {
  return (
    <Container>
      <Header>
        Popular movies
      </Header>
      <GridWrapper>
        {exampleData.results.map(({ original_title, id, release_date, vote_average, vote_count }) => (
          <Tile key={id}>
            <Poster />
            <Title>{original_title}</Title>
            <Year>{release_date}</Year>
            <GenersWrapper>
              <GenerWrapper><Genre>Action</Genre></GenerWrapper>
              <GenerWrapper><Genre>Comedy</Genre></GenerWrapper>
              <GenerWrapper><Genre>Drama</Genre></GenerWrapper>
            </GenersWrapper>
            <VoteWrapper>
              <Star />
              <VoteAverange> {vote_average}</VoteAverange>
              <VoteCount>{vote_count} votes</VoteCount>
            </VoteWrapper>
          </Tile>
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





