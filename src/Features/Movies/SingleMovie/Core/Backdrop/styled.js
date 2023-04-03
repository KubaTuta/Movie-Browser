import styled from "styled-components";
import { ReactComponent as StarIco } from "../../../../../common/image/star.svg"
import { Header } from "../../../../../common/Header/styled";

export const BlackContainer = styled.div`
 background: ${({ theme }) => theme.color.woodsmoke};
 max-height: 770px; 
`;

export const HeadContainer = styled.section`
  margin: 0 auto;
  max-width: 1368px;
  display: grid;
  grid-template-rows: 1fr 1fr 1f;
  grid-template-columns: 1fr;
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
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 2;
    };
`;

export const Plexa = styled.div`
background: linear-gradient(269.75deg, #000000 8.69%, rgba(0, 0, 0, 0.873268) 10.09%, 
rgba(0, 0, 0, 0.720529) 12.16%, rgba(0, 0, 0, 0.294577) 17.19%, rgba(0, 0, 0, 0.159921) 19.93%, 
rgba(0, 0, 0, 0) 25.43%), linear-gradient(90.09deg, #000000 8.05%, rgba(0, 0, 0, 0.984059) 9.4%, 
rgba(0, 0, 0, 0.967732) 10.59%, rgba(0, 0, 0, 0.865569) 11.79%, rgba(0, 0, 0, 0.230315) 20.89%, 
rgba(0, 0, 0, 0) 26.12%), linear-gradient(180deg, #000000 -2.7%, rgba(0, 0, 0, 0.689555) 2.36%, 
rgba(0, 0, 0, 0.439033) 7.46%, rgba(0, 0, 0, 0.20628) 13.79%, rgba(0, 0, 0, 0) 23.65%), 
linear-gradient(192.09deg, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.106473) 69.25%, 
rgba(0, 0, 0, 0.235359) 74.4%, rgba(0, 0, 0, 0.492821) 82.77%, 
rgba(0, 0, 0, 0.740286) 89.82%, #000000 96.18%);
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;  
    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 2;
    };
`

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
  margin: 0;
  margin-bottom: 56px;

    @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
      font-size: 10px;
      padding: 4px 8px 0px 8px;
      margin: 0;
    };
`;