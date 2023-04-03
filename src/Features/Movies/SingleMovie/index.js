import { Header3 } from "../../../common/Header/styled";
import Backdrop from "./Backdrop";
import TileDetails from "./TileDetails";
import Credits from "./Credits";
import { SingleMovieContainer, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMovie, setMovieId } from "./movieSlice";
import { useEffect } from "react";
import { fetchMoviePending } from "./movieSlice";
import { useParams } from "react-router-dom";

const SingleMovie = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const movie = useSelector(selectMovie);

  //const credits = useSelector(selectCredits);

  useEffect(() => {
    dispatch(setMovieId(id))
    dispatch(fetchMoviePending());
  }, [id, dispatch]);


  return (
    <SingleMovieContainer>
      <Backdrop
        title={movie.title}
        poster={movie.backdrop_path}
        vote={movie.vote_average}
        votes={movie.vote_count}
      />
      <Wrapper>
        <TileDetails
        />
        <Header3>Cast</Header3>
        <Credits/>
        <Header3>Crew</Header3>
        <Credits />
      </Wrapper>
    </SingleMovieContainer>
  )
};

export default SingleMovie;