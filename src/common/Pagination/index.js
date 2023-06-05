import { useEffect } from "react";
import {
  Wrapper,
  Button,
  Text,
  InnerButtonText,
  RightArrow,
  LeftArrow,
  Bold,
} from "./styled";
import { useReplaceQueryParameter } from "../hooks/useParameter";

const Pagination = ({ page, total }) => {

  const replaceQueryParameter = useReplaceQueryParameter();

  const setPage = (destinationPage) => {
    replaceQueryParameter([
      {
        key: "page",
        value: destinationPage,
      },
    ]);
  };

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
        onClick={() => setPage(1)}
      >
        <LeftArrow page={page} />
        <LeftArrow page={page} />
        &nbsp;<InnerButtonText>First</InnerButtonText>
      </Button>
      <Button
        page={page}
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        <LeftArrow page={page} />
        &nbsp;<InnerButtonText>Previous</InnerButtonText>
      </Button>
      <Text>Page</Text>
      <Bold>{page}</Bold>
      <Text>of</Text>
      <Bold>{total > 500 ? 500 : total}</Bold>
      <Button
        page={page}
        total={total > 500 ? 500 : total}
        disabled={total > 500 ? page === 500 : page === total}
        onClick={() => setPage(page + 1)}
      >
        <InnerButtonText>Next&nbsp;</InnerButtonText>
        <RightArrow page={page} />
      </Button>
      <Button
        page={page}
        total={total > 500 ? 500 : total}
        disabled={total > 500 ? page === 500 : page === total}
        onClick={() => setPage(total > 500 ? 500 : total)}
      >
        <InnerButtonText>Last&nbsp;</InnerButtonText>
        <RightArrow page={page} />
        <RightArrow page={page} />
      </Button>
    </Wrapper>
  );
};

export default Pagination;
