import styled from "styled-components";

export const MoviesGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  grid-gap: 24px;

  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    grid-gap: 16px;
  };
`;
