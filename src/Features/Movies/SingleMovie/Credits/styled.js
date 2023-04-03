import styled from "styled-components";
import { WrapperPeople, TileWrapperPeople } from  "../../../../common/PersonTileStyles/styled";

export const CreditWrapper = styled(WrapperPeople)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 24px;
  justify-items: start;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
      grid-gap: 16px;
    };
`;

export const CreditPeopleWrapper = styled(TileWrapperPeople)`
  min-height: 339px;
  width: 208px;
  padding: 16px;
  border-radius: 5px;
  grid-template-rows: 3fr 1fr; 
  gap: 8px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      min-height: 245px;
      width: 136px;
      padding: 8px;
      border-radius: 5px;
      grid-template-rows: 2fr auto; 
      gap: 8px;
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

