import styled, { keyframes } from "styled-components";
import {ReactComponent as spinner} from "./spinner.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const anime = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(spinner)`
  animation: ${anime} 1s linear infinite;
  margin-top: 120px;
  width: 91px;

  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    margin-top: 24px;
    width: 35px;
  }
`;