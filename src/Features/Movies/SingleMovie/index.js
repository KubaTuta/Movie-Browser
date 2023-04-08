import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchPending, setMovieId } from "./movieSlice";
import Core from "./Core";
import { selectSearchedQuery } from "../../../common/Navigation/Input/Search/searchSlice";
import Movies from "../PopularMovies";

const SingleMovie = ({ cleaningHandler }) => {

  const dispatch = useDispatch();

  const { id } = useParams();
  const query = useSelector(selectSearchedQuery);

  useEffect(() => {
    dispatch(setMovieId(id))
    dispatch(fetchPending());
    cleaningHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  return (
   query.length > 0 ? <Movies /> : <Core />
  )
};

export default SingleMovie;