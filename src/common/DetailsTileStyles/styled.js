import styled from "styled-components";

export const TileDetailsWrapper = styled.section`
  margin: 0 auto;
  max-width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr;
  grid-gap: 16px;
  margin: 64px 0 64px 0;
  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns:  1fr 3fr; 
    padding: 16px;
    grid-gap: 16px;
  };
`;

export const PosterWrapper = styled.div`
  min-width: 311px;
  min-height: 464px;
  margin-right: 24px;
  grid-column: 1/2;
  grid-row: 1/3;
  align-items: center;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      min-width: 114px;
      min-height: 169px;
      grid-row: 1/2;
    };
`;

export const Poster = styled.img`
    width: 100%;
  border-radius: 5px;
 // object-fit: cover;
  object-position: top;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      height: 169px;
      width: 114px;
    };
`;

export const TextWrapper = styled.div`
  grid-row-start: 1;
  grid-column-start: 2;     
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin: 0;
  margin-bottom: 24px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      font-weight: 500;
      line-height: 130%;
      font-size: 16px;
      margin-bottom: 4px;
    };
`;

export const InfoWrapper= styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const InfoCategory = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  color: ${({ theme }) => theme.color.stormGrey};
  margin: 0;
  padding-right: 10px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      display: none;
    };
`;

export const InfoText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  padding-right: 8px;
  margin: 0;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      font-size: 12px;
    };
`;

export const OverviewWrapper = styled.div`
  grid-row-start: 2;
  grid-column-start: 2;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      grid-column: 1/3;  
      grid-row: 2/3;
    };
`;

export const Overview = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  margin: 0;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      font-size: 14px;
    };
`;

