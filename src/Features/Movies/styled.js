import styled from "styled-components";

export const Header = styled.h1`
  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    font-size: 18px;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;

  @media(max-width: ${({theme})=>theme.breakpoint.full}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(max-width: ${({theme})=>theme.breakpoint.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: ${({theme})=>theme.breakpoint.small}) {
    grid-template-columns: 1fr;
  }
`;