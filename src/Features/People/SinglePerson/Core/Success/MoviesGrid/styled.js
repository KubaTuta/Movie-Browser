import styled from "styled-components";

export const MoviesGrid = styled.div`
  display: grid;
  margin:0;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 24px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
      grid-gap: 16px;
      justify-items: center;
};
`;
