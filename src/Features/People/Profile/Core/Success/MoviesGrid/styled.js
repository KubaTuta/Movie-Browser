import styled from "styled-components";

export const MoviesGrid = styled.div`
  display: grid;
  margin:0;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 24px;
    @media(max-width: ${({ theme }) => theme.breakpoint.moviesMedium}) {
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    }
      @media(max-width: ${({ theme }) => theme.breakpoint.creditsMediumSmaller}) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      }
        @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
          grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
          grid-gap: 16px;
        };
          @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
            grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
            grid-gap: 16px;
          };
`;
