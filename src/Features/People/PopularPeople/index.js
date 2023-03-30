import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../../common/Container/styled";
import { Header } from "../../../common/Header/styled";
import Core from "./Core";
import { fetchPeoplePending } from "../PopularPeople/popularPeopleSlice";

const People = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeoplePending(1));
    // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Header>
        Popular people
      </Header>
      <Core />
    </Container>
  )
};

export default People;