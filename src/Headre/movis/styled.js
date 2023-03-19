import styled from "styled-components";
import elipse from "../../image/elipse.svg"

export const NavigationBoxStyled = styled.div`
    background:${({ theme }) => theme.color.woodsmoke};
    max-height:94px auto;
`;

export const Navigation = styled.div`
    max-width: 1368px;
    margin:auto;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items:center;
    
  @media(max-width:${({ theme }) => theme.breakpoint.full}px) {
    margin:0 10px;
  };
  @media(max-width:${({ theme }) => theme.breakpoint.medium}px) {
    justify-content:center;
    margin:auto;
    flex-wrap:wrap;
    flex-basis:80%;
  };
`;

export const NavBoxLine = styled.div`
    display:flex;
    align-items: center;
  @media(max-width:${({ theme }) => theme.breakpoint.small}px) {
    flex-basis:90%;
   
  } ;
`;

export const NavH1 = styled.h1`
    font-weight: 500;
    font-size: 24px;
    margin-left:16px;
    flex-wrap:nowrap;
    letter-spacing: -1.5px;
    text-transform: capitalize;
  
  @media(max-width:${({ theme }) => theme.breakpoint.medium}px) {
   
  }
  @media(max-width:${({ theme }) => theme.breakpoint.small}px) {
    font-size: 80%;
    flex-wrap:nowrap;
  } 
`;

export const NavLinks = styled.ul`
    display:flex;
    list-style:none;
    align-items:flex-start;
    flex: auto;
    margin-left:5px;
    flex-wrap:nowrap;
    
  @media(max-width:${({ theme }) => theme.breakpoint.small}px) {
    margin:auto;
    font-size:12px;
  }; 
`;

export const NavLinkStyled = styled.li`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    padding:20px;
    align-self: flex-end;
 
  @media(max-width:${({ theme }) => theme.breakpoint.small}px) {
    
    margin:auto;
    font-size:12px;
    padding:20px 10px;
  };
`;

export const NavIconInput = styled.label`
    background-image:url("${elipse}") ;
    background-color:white;
    background-repeat: no-repeat;
    background-position:17px 50%;
    border-radius: 33px;
    border: 1px solid #E4E6F0;
    flex-basis: 432px;
    display: flex;
  
  @media(max-width:${({ theme }) => theme.breakpoint.small}px) {
    flex-basis: 90%;}
`;

export const NavInput = styled.input`
    border-radius: 33px;
    border: white;
    padding: 11px;
    font-size: 16px;
    flex-basis: 432px;
    margin-left: 40px;
    
  &:focus{
    border:none;
    color: none;
    background-color: none;
    background: none;
    border-color: none;
  }
  ::placeholder {
    color:${({ theme }) => theme.color.waterloo}
     
  }
`;
