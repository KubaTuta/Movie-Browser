import styled from "styled-components";
import { ReactComponent as StarIco } from "../../../../common/image/star.svg";
import { GenreWrapper } from "../../../../common/Genres/styled";



export const VoteWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: row;
`;

export const VoteAverangeWrapper = styled.div`
display: flex;
flex-direction: row;
`;

export const Star = styled(StarIco)`
padding: 0px 8px 0px 0px;
max-width: 24px;
max-height: 24px;

`;

export const VoteAverange = styled.p`
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 130%;
padding: 0px;
margin: 0px;
`;

export const Scale = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 120%;
padding-left: 7px;
margin-top: 8px;
`

export const VoteCount = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 120%;
margin-top: 8px;
padding-left: 7px;
`;

export const GenreWrapperTD = styled(GenreWrapper)`
margin-right: 16px;
margin-top: 16px;
`;

