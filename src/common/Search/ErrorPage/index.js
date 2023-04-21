import { NavLink } from "react-router-dom";
import { Button, Danger, StyledH1, Text } from "./styled";
import { Wrapper } from "../styled";

const ErrorPage = () => (
  <Wrapper>
    <Danger />
    <StyledH1>Oooops! Something went wrong...</StyledH1>
    <Text>Please check your network connection</Text>
    <Text>and try again</Text>
    <NavLink to="/">
      <Button>Back to homepage</Button>
    </NavLink>
  </Wrapper>
);

export default ErrorPage;