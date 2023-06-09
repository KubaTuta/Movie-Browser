import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchSingleMoviePending, setMovieId } from "./movieSlice";
import Core from "./Core";

const SingleMovie = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(setMovieId(id))
    dispatch(fetchSingleMoviePending());
  }, [id, dispatch]);

  return (
  <Core />
  )
};

export default SingleMovie;