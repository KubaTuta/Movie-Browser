import styled from "styled-components";

export const MoviesGridWrapper = styled.div`
display: grid;
  grid-template-columns: repeat(4, minmax(288px, 1fr));
  grid-gap: 16px;
  justify-items: start;    
    @media(max-width: ${({ theme }) => theme.breakpoint.moviesMedium}) {
      grid-template-columns: repeat(3,  1fr);
    };
      @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
        grid-template-columns: repeat(2,  1fr);
        grid-gap: 16px;
        justify-items: center;
      };
        @media(max-width: ${({ theme }) => theme.breakpoint.creditsSmall}) {
          grid-template-columns: 1fr;
          grid-gap: 16px;
          justify-items: center;
        };
`;
