import { Header3 } from "../../../common/Header/styled";
import Backdrop from "./Backdrop";
import TileDetails from "./TileDetails";
import { Container } from "../../../common/Container/styled"
import Credits from "./Credits";

const SingleMovie = () => {
  return (
    <>
      <Backdrop />
      <Container>
        <TileDetails />
        <Header3>Cast</Header3>
        <Credits />
        <Header3>Crew</Header3>
        <Credits />
      </Container>
    </>
  )
};

export default SingleMovie;