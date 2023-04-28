import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1368px;
  padding: 8px;
  margin-bottom: 100px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      padding: 4px;
    };
  `;
