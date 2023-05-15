import styled from "styled-components";

export const CrewPoster = styled.img`
  width: 100%;
  height: 100%;
  object-position: top;
  border-radius: 5px;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      max-width: 114px;      
    };
`;

export const CrewTextInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      width: 180px;
      justify-content: unset;

    };
`;

export const MoviesTileWrapper = styled.div`
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
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
       };
     
        @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
          max-width: 330px;
          display: flex;
        flex-direction: row;
        gap: 16px;
        width: 100%;
        };
          @media(max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
            max-width: 298px;
          };
`;
