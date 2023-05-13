import styled from "styled-components";

export const Header = styled.h2`
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 120%;
  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    font-size: 18px;
  }
`;

export const Header3 = styled.h3`
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 120%;
  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    font-size: 18px;
  }
`;