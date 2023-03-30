import { Header3 } from "../../../common/Header/styled";
import Backdrop from "./Backdrop";
import TileDetails from "./TileDetails";
import { Container } from "../../../common/Container/styled"

const SingleMovie = () => {
  return (
    <>
      <Backdrop />
      <Container>
        <TileDetails />
        <Header3>Cast</Header3>
        <Header3>Crew</Header3>
      </Container>
    </>
  )
};

export default SingleMovie;