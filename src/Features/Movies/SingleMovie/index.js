import { Header3 } from "../../../common/Header/styled";
import Backdrop from "./Backdrop";
import TileDetails from "./TileDetails";
import Credits from "./Credits";
import { SingleMovieContainer, Wrapper } from "./styled";

const SingleMovie = () => {
  return (
    <SingleMovieContainer>
      <Backdrop />
      <Wrapper>
      <TileDetails />
      <Header3>Cast</Header3>
      <Credits />
      <Header3>Crew</Header3>
      <Credits />
      </Wrapper>
    </SingleMovieContainer>
  )
};

export default SingleMovie;