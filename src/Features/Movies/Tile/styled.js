import styled from "styled-components";
import { ReactComponent as StarIco } from "./star.svg"

export const Tile = styled.div`
width: 324px;
height: 650px;
background-color: ${({ theme }) => theme.color.white};
box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
border-radius: 5px;
padding: 16px;
display: flex;
flex-direction: column;
`;

export const Poster = styled.img`
width: 292px;
height: 434px;
border-radius: 5px;
margin-bottom: 8px;
`;

export const Title = styled.h2`
font-weight: 500;
font-size: 22px;
margin: 0px;
`;

export const Year = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${({ theme }) => theme.color.darkerGrey};
margin: 8px 0px;
`;


export const GenersWrapper = styled.div`
display: grid;
grid-template-columns: 77px 77px 77px;
grid-gap: 8px;
margin: 8px 0px;
`
export const GenerWrapper = styled.div`
background-color: ${({ theme }) => theme.color.grey};
border-radius: 5px;
text-align: center;
`
export const Genre = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 140%;
margin: 8px 0px;

`
export const VoteWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const Star = styled(StarIco)`
max-width: 24px;
`;

export const VoteAverange = styled.p`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 150%;
padding: 8px;
margin: 0px;
`;

export const VoteCount = styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${({ theme }) => theme.color.grey};
margin: 0px;
`;