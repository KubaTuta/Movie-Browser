import styled from "styled-components";

export const TileDetailsWrapper = styled.section`
margin: 0 auto;
max-width: 100%;
max-height: 544px;
background-color: ${({ theme }) => theme.color.white};
box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
padding: 16px;
display: flex;
flex-direction: row;
gap: 40px;
margin: 64px 0 64px 0;
`;

export const PosterWrapper = styled.div`
  min-width: 311px;
  min-height: 464px;
  margin-bottom: 8px;

`;

export const Poster = styled.img`
  width: 100%;
  height: 464px;
  border-radius: 5px;
  object-fit: cover;
  object-position: top;
   `;

export const TextWrapper = styled.div`
`

export const Title = styled.h3`
font-weight: 600;
font-size: 36px;
line-height: 120%;
margin: 0;
margin-bottom: 24px;
`
export const InfoWrapper= styled.div`
display: flex;
flex-direction: row;
margin-bottom: 8px;

`
export const InfoCategory = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 120%;
color: ${({ theme }) => theme.color.stormGrey};
margin: 0;
`
export const InfoText = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 120%;
margin: 0;
`


export const Overview = styled.p`
font-weight: 400;
font-size: 20px;
line-height: 160%;
margin-right: 40px;
`

