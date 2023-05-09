import { Container } from "../../../common/Container/styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesPending } from "./popularMoviesSlice";
import { fetchGenresPending } from "../../../common/Genres/genresSlice";
import Core from "./Core";
import { useQueryParameter } from "../../../common/useParameter";
import { fetchSearchPending } from "../../../common/Navigation/Input/Search/searchSlice";

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

  const queryParam = useQueryParameter("search");
  const queryPage = useQueryParameter("page");

  useEffect(()=>{
    if (queryParam !==null) {
      dispatch(fetchSearchPending({page: queryPage ?? 1, query: queryParam}))
    }
}, [queryParam])

  return (
    <Container>
      <Core queryParam={queryParam} />
    </Container>
  )
};

export default Movies;





