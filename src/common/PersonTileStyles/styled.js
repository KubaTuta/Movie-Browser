import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperPeople = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 24px;
  justify-items: start;
  justify-content: space-between;
    @media(max-width: ${({ theme }) => theme.breakpoint.creditsSmall}) {
      grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
      grid-gap: 16px;
    };
`;

export const TileWrapperPeople = styled.div`
  min-height: 339px;
  background:${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-rows: 5fr 1fr; 
  padding: 16px;
  padding-bottom: 0;
  gap: 16px;
    @media(max-width: ${({ theme }) => theme.breakpoint.creditsSmall}) {
      min-height: 225px;
      max-width: 300px;
      padding: 8px;
      border-radius: 5px;
      grid-template-rows: auto auto; 
      gap: 8px;
    };
`;

export const PeoplePosterWrapper = styled.div`
  min-width: 180px;
  min-height: 260px;  
    @media(max-width: ${({ theme }) => theme.breakpoint.creditsSmall}) {
      min-width: 120px;
      min-height: 178px;
    };
`;

export const PosterPeople = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  `;

export const NamePeopleWrapper= styled.div`
  min-height: 64px;
  max-width: 190px;
  margin: 0 auto;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      min-height: 42px;
    };
`;

export const NamePeople = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 0px;
  text-align: center;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      font-size: 14px;
    };   
`;

export const StyledNavLink = styled(Link)`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-decoration:none;
  padding:none;
  color:${({ theme }) => theme.color.woodsmoke};
  transition: all 1s;
&:active {
  text-decoration:none;
  }
&:hover {
  transform: scale(1.03);
  }
`;