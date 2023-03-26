import { useSelector } from "react-redux";
import { selectPages } from "./popularPeopleSlice";
import { fetchPeoplePending } from "./popularPeopleSlice";
import { Container } from "../../common/Container/styled";
import { Header } from "../../common/Header/styled";
import Pagination from "../../common/Pagination";
import PagePeople from "./PagePeople";

const People = () => {
  const page = useSelector(selectPages);

  return (
    <Container>
      <Header>
        Popular people
      </Header>
      <PagePeople />
      <Pagination page={page} fetchApi={fetchPeoplePending}/>
    </Container>
  )
};

export default People;