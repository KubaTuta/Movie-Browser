import styled from "styled-components";
import { ReactComponent as StarIco } from "./star.svg"

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;

  @media(max-width: ${({ theme }) => theme.breakpoint.full}) {
    grid-template-columns: repeat(3, 1fr);
  }
    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      grid-template-columns: repeat(2, 1fr);
    }
      @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
        grid-template-columns: 1fr;
      }
`;

export const TileWrapper = styled.div`
max-width: 324px;
background-color: ${({ theme }) => theme.color.white};
box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
border-radius: 5px;
padding: 16px;
display: flex;
flex-direction: column;
@media(max-width: ${({ theme }) => theme.breakpoint.full}) {
   max-width: 400px;
}
  @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
    display: flex;
    flex-direction: row;
    padding: 16px;
    gap: 16px;
  } 
`;

export const Poster = styled.img`
width: 292px;
height: 434px;
border-radius: 5px;
margin-bottom: 8px;
  @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 114px;
    height: 169px;
  }
`;

export const TextInfoWrapper = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
@media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
  justify-content: flex-start;
  }
`;

export const TextWrapper = styled.div``

export const Title = styled.h3`
font-weight: 500;
font-size: 22px;
margin: 0px;
@media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
}
`;

export const Year = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${({ theme }) => theme.color.darkerGrey};
margin: 8px 0px;
@media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
}
`;



export const VoteWrapper = styled.div`
display: flex;
align-items: center;
`;

export const Star = styled(StarIco)`
padding: 0px 8px 0px 0px;
max-width: 24px;
max-height: 24px;
@media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
  max-width: 16px;
  max-height: 16px;
  padding: 0px;
}
`;

export const VoteAverange = styled.p`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 150%;
padding: 0px 8px 0px 0px;
margin: 0px;
@media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
  font-size: 13px;
  padding: 0px 8px 0px 8px;
}
`;

export const VoteCount = styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${({ theme }) => theme.color.grey};
margin: 0px;
@media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
  font-size: 13px;
}
`;