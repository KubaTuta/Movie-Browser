import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Button, Text, InnerButtonText, RightArrow, LeftArrow } from "./styled";
import { fetchMoviesPending, selectPages, selectTotal } from "../../Features/Movies/popularMoviesSlice";

const Pagination = () => {

  const page = useSelector(selectPages);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button page={page}
        onClick={() => dispatch(fetchMoviesPending(1))}
      >
        <LeftArrow /><LeftArrow />&nbsp;<InnerButtonText>First</InnerButtonText>
      </Button>
      <Button page={page}
        onClick={() => dispatch(fetchMoviesPending(page - 1))}
      >
        <LeftArrow />&nbsp;<InnerButtonText>Previous</InnerButtonText>
      </Button>
      <Text>Page</Text><b>{page}</b><Text>of</Text><b>500</b>
      <Button page={page} total={total}
        onClick={() => dispatch(fetchMoviesPending(page + 1))}
      >
        <InnerButtonText>Next</InnerButtonText>&nbsp;<RightArrow />
      </Button>
      <Button page={page} total={total}
        onClick={() => dispatch(fetchMoviesPending(500))}
      >
        <InnerButtonText>Last</InnerButtonText>&nbsp;<RightArrow /><RightArrow />
      </Button>
    </Wrapper>
  )
};

export default Pagination;