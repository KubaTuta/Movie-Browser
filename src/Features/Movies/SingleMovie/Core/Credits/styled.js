import styled from "styled-components";

export const CreditWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(208px, 1fr));
  grid-gap: 16px;
  justify-items: start;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.creditMedium}) {
      grid-template-columns: repeat(4, minmax(226px, 1fr));
    };
      @media(max-width: ${({ theme }) => theme.breakpoint.creditsMediumSmaller}) {
        grid-template-columns: repeat(3, minmax(226px, 1fr));
      };
        @media(max-width: ${({ theme }) => theme.breakpoint.creditsSmall}) {
          grid-template-columns: repeat(3, minmax(136px, 1fr));
          grid-gap: 8px;
        };
          @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
            grid-template-columns: repeat(2, minmax(136px, 1fr));
            grid-gap: 16px;
            justify-items: center;
          };
`;

export const CreditPeopleWrapper = styled.div`
  height: 100%;
  max-width: 100%;
  padding: 16px;
  border-radius: 5px;
  background:${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      padding: 8px;
    };
`;

export const Role = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkerGrey};
  margin: 0;
  margin-top: 8px;
  text-align: center;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      font-size: 13px;
    };
`;

export const PosterPerson = styled.img`
  max-height: 100%;
  max-width: 100%;
  border-radius: 5px;
`;

export const PosterWrapper = styled.div`
  justify-items: center;
`;