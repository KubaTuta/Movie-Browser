import styled from "styled-components";

export const Container = styled.main`
    margin: 0 auto;
    max-width: 1368px;
    @media(max-width: ${({ theme }) => theme.breakpoint.full}) {
        max-width: 1020px;
  }
  @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
    max-width: 592px;
  }
  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    max-width: 288px;
  }
  `;