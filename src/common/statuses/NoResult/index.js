import HeaderTitle from "../../HeaderTitle";
import { Wrapper } from "../styled";
import { Cloud } from "./styled";

const NoResult = ({ query }) => {
  return (
    <>
      <HeaderTitle query={query} />
      <Wrapper>
        <Cloud />
      </Wrapper>
    </>
  );
};

export default NoResult;
