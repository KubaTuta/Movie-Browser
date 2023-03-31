import styled from "styled-components";
import { ReactComponent as StarIco } from "../../../../common/image/star.svg"
import { Header } from "../../../../common/Header/styled";

export const BlackContainer = styled.div`
 background: ${({ theme }) => theme.color.woodsmoke};
 max-height: 770px; 
`;

export const HeadContainer = styled.section`
  margin: 0 auto;
  max-width: 1368px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
    @media(max-width: ${({ theme }) => theme.breakpoint.full}) {
      max-height: 600px;
      max-width: 1067px;
    };
      @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
        max-width: 320px;
        max-height: 148px;
      };
`;

export const TextWrapper = styled.div`
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 2;
  justify-content: start;
    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 2;
    };
`;

export const WhiteHeader = styled(Header)`
  color: ${({ theme }) => theme.color.white};
  font-size: 64px;
  line-height: 120%;
  font-weight: 600;
  margin: 24px 0 24px 0;
    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      font-size: 24px;
    };
`;

export const Poster = styled.img`
  margin: 0 auto;
  border-radius: 30px;
  max-height: 100%;
  max-width: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;  
    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      max-width: 228px;
      max-height: 114px;
    };
`;

export const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      flex-direction: row;
    };
`;

export const VoteAverangeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  `;

export const Star = styled(StarIco)`
  padding: 0px 8px 0px 0px;
  height: 40px;
  width: 40px;
    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      max-width: 16px;
      max-height: 16px;
      padding: 0px;
    };
`;

export const VoteAverange = styled.p`
  color:  ${({ theme }) => theme.color.white};
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;
  padding: 0px;
  margin: 0px;
    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      font-size: 13px;
      padding: 0px 3px 8px 8px;
    };
`;

export const Scale = styled.p`
  color:  ${({ theme }) => theme.color.white};
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  padding-left: 7px;
    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      font-size: 10px;
      margin: 0;
      padding: 0px;
      padding-top: 4px;
    };
    `;

export const VoteCount = styled.p`
  color:  ${({ theme }) => theme.color.white};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      font-size: 10px;
      padding: 4px 8px 0px 8px;
      margin: 0;
    };
`;