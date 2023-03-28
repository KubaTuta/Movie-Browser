import { useSelector } from "react-redux";
import Pagination from "../../../../common/Pagination";
import { fetchMoviesPending, selectPages } from "../../popularMoviesSlice";
import Tile from "../../Tile";

const Success = () => {
  const page = useSelector(selectPages);

  return (
    <>
      <Tile />
      <Pagination page={page} fetchApi={fetchMoviesPending} />
    </>
  )
}
  ;

export default Success;

