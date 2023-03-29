import styled from "styled-components";

export const GenresWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;

export const GenreWrapper = styled.div`
background-color: ${({ theme }) => theme.color.grey};
border-radius: 5px;
text-align: center;
margin: 0px 8px 8px 0px;
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