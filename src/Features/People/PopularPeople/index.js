import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../../common/Container/styled";
import Core from "./Core";
import { fetchPeoplePending } from "./popularPeopleSlice";
import { fetchSearchPeoplePending } from "../../../common/Navigation/PeopleInput/Search/searchPeopleSlice";
import { useQueryParameter } from "../../../common/useParameter";

const People = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeoplePending(1));
    // eslint-disable-next-line
  }, [])

  const queryParam = useQueryParameter("search");
  const queryPage = useQueryParameter("page");

  useEffect(() => {
    queryParam !== null
      ? dispatch(
          fetchSearchPeoplePending({ page: queryPage ?? 1, query: queryParam })
        )
      : dispatch(
          fetchPeoplePending({ page: queryPage ?? 1, query: queryParam })
        );
    // eslint-disable-next-line
  }, [queryParam, queryPage]);

  return (
    <Container>
      <Core queryParam={queryParam} />
    </Container>
  )
};

export default People;