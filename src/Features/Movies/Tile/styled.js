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
    max-width: 288px;
    max-height: 201px;
  }
`;

export const Poster = styled.img`
max-width: 292px;
border-radius: 5px;
margin-bottom: 8px;
@media(max-width: ${({ theme }) => theme.breakpoint.full}) {
    max-width: 100%;
  }
  @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
    max-width: 114px;
    max-height: 169px;
  }
`;

export const TextInfoWrapper = styled.div`
`;

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

export const GenersWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 81px);
grid-gap: 8px;
margin: 8px 0px;
@media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
  grid-template-columns: repeat(2, 48px);
}
`;

export const GenerWrapper = styled.div`
background-color: ${({ theme }) => theme.color.grey};
border-radius: 5px;
text-align: center;
`;

export const Genre = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 140%;
margin: 8px 8px;
@media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
  font-size: 10px;
  margin: 4px 4px;
  }
`;

export const VoteWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const Star = styled(StarIco)`
max-width: 24px;
@media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
  max-width: 16px;
  }
`;

export const VoteAverange = styled.p`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 150%;
padding: 8px;
margin: 0px;
@media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
  font-size: 13px;
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