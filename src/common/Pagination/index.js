import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Wrapper, Button, Text, InnerButtonText, RightArrow, LeftArrow, Bold } from "./styled";

const Pagination = ({ page, fetchApi, query, total, frazes }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    if (page !== 1) {
      window.scrollTo({ top: document.body.scrollHeight });
    }
  }, [page]);

  console.log(total);

  return (
    <Wrapper>
      <Button
        page={page}
        disabled={page === 1}
        onClick={() => dispatch(fetchApi({ page: 1, query: query }))}
      >
        <LeftArrow page={page} /><LeftArrow page={page} />&nbsp;<InnerButtonText>First</InnerButtonText>
      </Button>
      <Button
        page={page}
        disabled={page === 1}
        onClick={() => dispatch(fetchApi({ page: page - 1, query: query }))}
      >
        <LeftArrow page={page} />&nbsp;<InnerButtonText>Previous</InnerButtonText>
      </Button>
      <Text>Page</Text><Bold>{page}</Bold><Text>of</Text><Bold>{total > 500 ? 500 : total}</Bold>
      <Button
        page={page}
        total={total > 500 ? 500 : total}
        disabled={total > 500 ? page === 500 : page === total}
        onClick={() => dispatch(fetchApi({ page: page + 1, query: query }))}
      >
        <InnerButtonText>Next&nbsp;</InnerButtonText><RightArrow page={page} />
      </Button>
      <Button
        page={page}
        total={total > 500 ? 500 : total}
        disabled={total > 500 ? page === 500 : page === total}
        onClick={() => dispatch(fetchApi({ page: total, query: query }))}
      >
        <InnerButtonText>Last&nbsp;</InnerButtonText><RightArrow page={page} /><RightArrow page={page} />
      </Button>
    </Wrapper>
  )
};

export default Pagination;