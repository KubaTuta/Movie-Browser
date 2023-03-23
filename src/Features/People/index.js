import PageTitle from "../../Comman/PageTitle";
import SectionPeople from "./SectionPagePeople";
import { Container } from "../../styled";

const People = () => {
  return (
    <>
      <Container>
        <PageTitle title="Popular people" />
        <SectionPeople/>
      </Container>
    </>

  )
};

export default People;