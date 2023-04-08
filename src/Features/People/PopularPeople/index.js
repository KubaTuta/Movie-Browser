import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../../common/Container/styled";
import Core from "./Core";
import { fetchPeoplePending } from "./popularPeopleSlice";

const People = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeoplePending(1));
    // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <HeaderTitle />
      <Core />
    </Container>
  )
};

export default People;