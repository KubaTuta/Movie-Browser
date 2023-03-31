import styled from "styled-components";

export const CreditWrapper = styled.div`
display: grid;
grid-template-columns: repeat(6 1fr);
  grid-gap: 24px;

  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    grid-gap: 16px;
  };
`

export const Role = styled.p`
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: ${({ theme }) => theme.color.darkerGrey};
`;