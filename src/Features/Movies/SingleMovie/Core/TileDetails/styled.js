import styled from "styled-components";
import { ReactComponent as StarIco } from "../../../../../common/image/star.svg";
import { GenreWrapper } from "../../../../../common/Genres/styled";

export const Year = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin: 8px 0px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      color: ${({ theme }) => theme.color.darkerGrey};
      font-style: normal;
      font-size: 13px;
    };
`;

export const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      flex-direction: row;
    };
`;

export const VoteAverangeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Star = styled(StarIco)`
  padding: 0px 8px 0px 0px;
  max-width: 24px;
  max-height: 24px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      max-width: 16px;
      max-height: 16px;
    };
`;

export const VoteAverange = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  padding: 0px;
  margin: 0px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      font-weight: 600;
      font-size: 13px;
      line-height: 130%;
    };
`;

export const Scale = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  padding-left: 7px;
  margin-top: 8px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: none;
    };
`;

export const VoteCount = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  margin-top: 8px;
  padding-left: 7px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      font-size: 13px;
      line-height: 130%;
      color: ${({ theme }) => theme.color.inactive};
      margin: 0;
    };
`;

export const GenreWrapperTD = styled(GenreWrapper)`
  margin-right: 16px;
  margin-top: 16px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      margin-right: 8px;
      margin-top: 0px;
    };
`;

