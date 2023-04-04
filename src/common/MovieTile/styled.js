import styled from "styled-components";
import { ReactComponent as StarIco } from "../image/star.svg"
import { Link } from "react-router-dom";


export const TileWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  height: 100%;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      flex-direction: row;
      gap: 16px;
    };
`;

export const PosterWrapper = styled.div`
  min-width: 208px;
  min-height: 434px;
  margin-bottom: 8px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      min-width: 114px;
      min-height: 169px;
    };
`;

export const Poster = styled.img`
   width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 5px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      height: 169px;
      width: 114px;
    };
`;

export const TextInfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MovieData = styled.div`
`;


export const Title = styled.h3`
  font-weight: 500;
  font-size: 22px;
  margin: 0px;  
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      font-style: normal;
      font-size: 16px;
    };
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkerGrey};
  margin: 8px 0px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      font-style: normal;
      font-size: 13px;
    };
`;

export const VoteWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Star = styled(StarIco)`
  padding: 0px 8px 0px 0px;
  max-width: 24px;
  max-height: 24px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      max-width: 16px;
      max-height: 16px;
      padding: 0px;
    };
`;

export const VoteAverange = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  padding: 0px 8px 0px 0px;
  margin: 0px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      font-size: 13px;
      padding: 0px 8px 0px 8px;
    };
`;

export const VoteCount = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.grey};
  margin: 0px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
    };
`;

export const StyledLink = styled(Link)`
 text-decoration: none;
 color: ${({ theme }) => theme.color.woodsmoke};
 transition: 1s;
 :hover{
  transform: scale(1.1);
 };
`