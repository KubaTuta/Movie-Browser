import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationBoxStyled = styled.div`
  background: ${({ theme }) => theme.color.woodsmoke};
  width: 100vw;
`;

export const NavBoxFrame = styled.div`
    max-width: ${({ theme }) => theme.breakpoint.full};
    padding: 0 16px;
    margin: 0 auto;
`;

export const NavigationWrapper = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  max-height: 94px auto;
  align-items: center; 
  flex-wrap: wrap;
  @media(max-width:${({ theme }) => theme.breakpoint.medium}) {
    justify-content: center;
  };
  @media(max-width:${({ theme }) => theme.breakpoint.medium}) {
    justify-content: center;
  };
`;

export const NavBoxLine = styled.div`
  display: flex;
  align-items: center;
  @media(max-width:${({ theme }) => theme.breakpoint.medium}) {
    padding-left: 40px;
  };
  @media(max-width:${({ theme }) => theme.breakpoint.small}) {
    padding-left: 25px;
  };
  @media(max-width:${({ theme }) => theme.breakpoint.mobile}) {
    padding-left: unset;
  };
`;

export const NavH1 = styled.h1`
  font-weight: 500;
  font-size: 24px;
  margin-left: 16px;
  letter-spacing: -1.5px;
  text-transform: capitalize;

  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 80%;
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 80%;
  };
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: flex-start;
  flex: auto;
  margin-left: 5px;
  flex-wrap: nowrap;
`;

export const NavLi = styled.li`
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  padding: 0 20px;
  align-self: flex-end;

  @media(max-width:${({ theme }) => theme.breakpoint.small}) {
    font-size:12px;
  };
  
  @media(max-width:${({ theme }) => theme.breakpoint.mobile}) {
    font-size:12px;
  };
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  padding: 8px 24px;    

  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 8px 12px;    
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 8px 12px;    
  };
    
  &:hover {
    cursor: pointer;
  };
  
  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;         
  };
`;

export const NavWrapperInput = styled.div`
  flex-basis: 432px;
  display: flex;
  padding: 16px;
  @media(max-width:${({ theme }) => theme.breakpoint.medium}) {
    flex-basis: 543px;
  };
  @media(max-width:${({ theme }) => theme.breakpoint.small}) {
    flex-basis: 432px;
  };
  @media(max-width:${({ theme }) => theme.breakpoint.mobile}) {
    
  };
`;

export const NavIconInput = styled.span`
  position: absolute;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-left: 20px;

  @media(max-width:${({ theme }) => theme.breakpoint.small}) {
    flex-basis: 90%;
  };
`;

export const NavInput = styled.input`
  border-radius: 33px;
  border: white;
  padding: 11px;
  font-size: 16px;
  font-weight: 400;
  padding-inline-start: 52px;
  flex-basis: 100%;
  width: 48px;
  border-radius: 33px;
  border: 1px solid #E4E6F0;
  
  &:focus{
    outline: none;
  };
 
  ::placeholder {
    color: ${({ theme }) => theme.color.waterloo};
  };
`;
