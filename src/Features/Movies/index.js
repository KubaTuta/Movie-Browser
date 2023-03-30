import { Container } from "../../common/Container/styled";
import { Header } from "../../common/Header/styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesPending } from "./popularMoviesSlice";
import { fetchGenresPending } from "../../common/MovieTile/Genres/genresSlice";
import Core from "./Core";

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesPending(1));
    // eslint-disable-next-line
  }, []);
 
  useEffect(() => {
    dispatch(fetchGenresPending())
    // eslint-disable-next-line
  }, []);
  return (
    <Container>
      <Header>
        Popular movies
      </Header>
      <Core />
    </Container>
  )
};

export default Movies;





