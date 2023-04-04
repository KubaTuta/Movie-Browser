import styled from "styled-components";
import { ReactComponent as StarIco } from "../../../../../common/Image/star.svg"
import { Header } from "../../../../../common/Header/styled";

export const BlackContainer = styled.div`
 background: ${({ theme }) => theme.color.black};
 max-height: 770px; 
`;

export const HeadContainer = styled.section`
  background-image: ${({ backdrop }) =>
    `url(https://image.tmdb.org/t/p/original/${backdrop})`};  
  background-size: cover;
  background-position: center;
  box-shadow: inset 0px 0px 45px 65px rgba(0, 0, 0, 1);
  margin: 0 auto;
  max-width: 1368px;
  max-height: 770px;
  display: grid;
  grid-template-rows: 3fr 1fr;
    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      max-height: 600px;
      max-width: 1067px;
    };
      @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
        grid-template-rows: 2fr 1fr;
        max-width: 320px;
        max-height: 148px;
        box-shadow: inset 0px 0px 28px 23px rgba(0, 0, 0, 1);
      };
`;

export const TextWrapper = styled.div`
  grid-row-start: 2;
  justify-content: start;
  align-items: center;
    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      grid-row-start: 2;
      grid-row-end: 3;
      
    };
`;

export const WhiteHeader = styled(Header)`
  color: ${({ theme }) => theme.color.white};
  font-size: 64px;
  line-height: 120%;
  font-weight: 600;
  margin: 24px 0 24px 0;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      font-size: 24px;
      margin: 0px;
    };
`;

export const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      flex-direction: row;
    };
`;

export const VoteAverangeWrapper = styled.div`
  display: flex;
  flex-direction: row;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      padding-bottom: 10px;
    };

  `;

export const Star = styled(StarIco)`
  padding: 0px 8px 0px 0px;
  height: 40px;
  width: 40px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
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
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      font-size: 13px;
      padding: 0px 3px 0px 8px;
    };
`;

export const Scale = styled.p`
  color:  ${({ theme }) => theme.color.white};
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  padding-left: 7px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
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
  margin: 0;
  margin-bottom: 56px;

    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      font-size: 10px;
      padding: 4px 8px 0px 8px;
      margin: 0;
    };
`;