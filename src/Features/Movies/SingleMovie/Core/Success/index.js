
import { useSelector } from "react-redux";
import { Header3 } from "../../../../../common/Header/styled";
import Backdrop from "../Backdrop";
import TileDetails from "../TileDetails";
import Credits from "../Credits";
import { SingleMovieContainer, Wrapper } from "../../styled";
import { selectMovie, selectCredits } from "../../movieSlice";

const Success = () => { 

  const movie = useSelector(selectMovie);
  const credits = useSelector(selectCredits);

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
          poster={movie.poster_path}
          title={movie.title}
          year={movie.release_date}
          countries={movie.production_countries}
          release={movie.release_date}
          genres={movie.genres}
          vote={movie.vote_average}
          votes={movie.vote_count}
          overview={movie.overview}
        />
        <Header3>Cast</Header3>
        <Credits
          credits={credits.cast}
        />
        <Header3>Crew</Header3>
        <Credits
          credits={credits.crew} />
      </Wrapper>
    </SingleMovieContainer>
  )
};

export default Success;

