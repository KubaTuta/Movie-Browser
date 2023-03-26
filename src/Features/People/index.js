import { Container } from "../../common/Container/styled";
import { Header } from "../../common/Header/styled";
import PagePeople from "./PagePeople";

const People = () => {
  return (
    <Container>
      <Header>
        Popular people
      </Header>
      <PagePeople />
    </Container>
  )
};

export default People;