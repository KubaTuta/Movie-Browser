import styled from "styled-components";
import { ReactComponent as danger } from "./danger.svg";

export const Danger = styled(danger)`
  margin: 195px 0 38px 0;
`;

export const StyledH1 = styled.h1`
  margin: 24px;
`;

export const Text = styled.p`
  font-size: 22px;
  margin: 0;
  font-weight: 500;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.active};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 5px;
  height: 51px;
  width: 181px;
  font-size: 14px;
  margin: 24px 0 500px 0;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;