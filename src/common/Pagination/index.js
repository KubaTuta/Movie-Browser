import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Button, Text, InnerButtonText, RightArrow, LeftArrow, Bold } from "./styled";
import { fetchMoviesPending, selectPages } from "../../Features/Movies/popularMoviesSlice";

const Pagination = () => {

  const page = useSelector(selectPages);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button
        page={page}
        disabled={page === 1}
        onClick={() => dispatch(fetchMoviesPending(1))}
      >
        <LeftArrow page={page} /><LeftArrow page={page} />&nbsp;<InnerButtonText>First</InnerButtonText>
      </Button>
      <Button
        page={page}
        disabled={page === 1}
        onClick={() => dispatch(fetchMoviesPending(page - 1))}
      >
        <LeftArrow page={page} />&nbsp;<InnerButtonText>Previous</InnerButtonText>
      </Button>
      <Text>Page</Text><Bold>{page}</Bold><Text>of</Text><Bold>500</Bold>
      <Button
        page={page}
        total={500}
        disabled={page === 500}
        onClick={() => dispatch(fetchMoviesPending(page + 1))}
      >
        <InnerButtonText>Next&nbsp;</InnerButtonText><RightArrow page={page} />
      </Button>
      <Button
        page={page}
        total={500}
        disabled={page === 500}
        onClick={() => dispatch(fetchMoviesPending(500))}
      >
        <InnerButtonText>Last&nbsp;</InnerButtonText><RightArrow page={page} /><RightArrow page={page} />
      </Button>
    </Wrapper>
  )
};

export default Pagination;