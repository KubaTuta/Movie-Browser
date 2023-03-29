import styled from "styled-components";
import { ReactComponent as rightArrow } from "./rightArrow.svg";
import { ReactComponent as leftArrow } from "./leftArrow.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 40px;
  margin-bottom: 100px;
  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    font-size: 10px;
    gap: 4px;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
  transition: 0.2s;
  background-color: ${({ page, theme, total }) => ((page === total) ? theme.color.grey : theme.color.lightBlue)};

  &:hover {
    cursor: pointer;
    box-shadow: 1px -1px 12px 0px rgba(15, 14, 14, 0.48);
  };

  &:disabled {
    box-shadow: unset;
    cursor: not-allowed;
    background-color: ${({ page, theme }) => ((page === 1) ? theme.color.grey : theme.color.grey)}
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    height: 34px;
  }
`;

export const InnerButtonText = styled.span`
  @media(max-width: ${({theme})=>theme.breakpoint.small}) {
    display: none;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.darkerGrey};
`;

export const Bold = styled.b`
`;

export const RightArrow = styled(rightArrow)`
  height: 11px;
  path {
    fill: ${({page, theme})=> page === 500 ? theme.color.inactive : theme.color.active}
  };
  @media(max-width: ${({theme})=>theme.breakpoint.small}) {
    height: 7px;
  }
`;

export const LeftArrow = styled(leftArrow)`
  height: 11px;
  path {
    fill: ${({page, theme})=> page === 1 ? theme.color.inactive : theme.color.active}
  };
  @media(max-width: ${({theme})=>theme.breakpoint.small}) {
    height: 7px;
  }
`;