import { Container } from "../../../common/Container/styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesPending } from "./popularMoviesSlice";
import { fetchGenresPending } from "../../../common/Genres/genresSlice";
import Core from "./Core";
import HeaderTitle from "../../../common/Header";

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
      <HeaderTitle />
      <Core />
    </Container>
  )
};

export default Movies;





