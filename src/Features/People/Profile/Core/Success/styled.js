import styled from "styled-components";


export const CrewPosterWrapper = styled.div`
  min-height: 434px;
  margin-bottom: 8px;  
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      min-width: 114px;
      min-height: 169px;
    };
`;

export const CrewTileWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  height: 100%;
  border-radius: 5px;
  padding: 16px;
  display: grid;
  grid-template-rows: 2fr 1fr; 
    @media(max-width: ${({ theme }) => theme.breakpoint.moviesMedium}) {
    grid-template-rows: 3fr 1fr; 
    };
      @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        max-width: 400px;
        display: flex;
        flex-direction: row;
        gap: 16px;
      };
`;