import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Wrapper, Button, Text, InnerButtonText, RightArrow, LeftArrow, Bold } from "./styled";

const Pagination = ({ page, fetchApi }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    if (page !== 1) {
      window.scrollTo({ top: document.body.scrollHeight });
    }
  }, [page]);

  return (
    <Wrapper>
      <Button
        page={page}
        disabled={page === 1}
        onClick={() => dispatch(fetchApi(1))}
      >
        <LeftArrow page={page} /><LeftArrow page={page} />&nbsp;<InnerButtonText>First</InnerButtonText>
      </Button>
      <Button
        page={page}
        disabled={page === 1}
        onClick={() => dispatch(fetchApi(page - 1))}
      >
        <LeftArrow page={page} />&nbsp;<InnerButtonText>Previous</InnerButtonText>
      </Button>
      <Text>Page</Text><Bold>{page}</Bold><Text>of</Text><Bold>500</Bold>
      <Button
        page={page}
        total={500}
        disabled={page === 500}
        onClick={() => dispatch(fetchApi(page + 1))}
      >
        <InnerButtonText>Next&nbsp;</InnerButtonText><RightArrow page={page} />
      </Button>
      <Button
        page={page}
        total={500}
        disabled={page === 500}
        onClick={() => dispatch(fetchApi(500))}
      >
        <InnerButtonText>Last&nbsp;</InnerButtonText><RightArrow page={page} /><RightArrow page={page} />
      </Button>
    </Wrapper>
  )
};

export default Pagination;