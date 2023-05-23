import { Container } from "../../../common/Container/styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesPending } from "./popularMoviesSlice";
import { fetchGenresPending } from "../../../common/Genres/genresSlice";
import Core from "./Core";
import { useQueryParameter } from "../../../common/hooks/useParameter";
import { fetchSearchPending } from "../../../common/SearchBar/searchMoviesSlice";

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenresPending());
    // eslint-disable-next-line
  }, []);

  const queryParam = useQueryParameter("search");
  const queryPage = useQueryParameter("page");

  useEffect(() => {
    queryParam !== null
      ? dispatch(
          fetchSearchPending({ page: queryPage ?? 1, query: queryParam })
        )
      : dispatch(
          fetchMoviesPending({ page: queryPage ?? 1, query: queryParam })
        );
    // eslint-disable-next-line
  }, [queryParam, queryPage]);

  return (
    <Container>
      <Core queryParam={queryParam} />
    </Container>
  );
};

export default Movies;
