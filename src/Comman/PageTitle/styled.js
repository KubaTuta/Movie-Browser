import styled from "styled-components";

export const Title = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
  }
`;