import styled from "styled-components";


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
    
  @media(max-width:${({ theme }) => theme.breakpoint.full}) {
    margin:0 10px;
  }
  @media(max-width:${({ theme }) => theme.breakpoint.medium}) {
    justify-content:center;
    margin:auto;
    flex-wrap:wrap;
    flex-basis:80%;
  }
`;

export const NavBoxLine = styled.div`
    display:flex;
    align-items: center;
    
  @media(max-width:${({ theme }) => theme.breakpoint.small}) {
    flex-basis:90%;
   
  } 
`;

export const NavH1 = styled.h1`
    font-weight: 500;
    font-size: 24px;
    margin-left:16px;
    flex-wrap:nowrap;
    letter-spacing: -1.5px;
    text-transform: capitalize;
  
  @media(max-width:${({ theme }) => theme.breakpoint.small}) {
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
    
  @media(max-width:${({ theme }) => theme.breakpoint.small}) {
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

  @media(max-width:${({ theme }) => theme.breakpoint.small}) {
    margin:auto;
    font-size:12px;
    padding:20px 10px;
  };
`;

export const NavWrapperInput = styled.div`
    flex-basis: 432px;
    display: flex;
    padding: 16px;
`;

export const NavIconInput = styled.span`
    position: absolute;
    justify-content: center;
    align-items:center;
    align-self:center;
    margin-left: 20px;
 
  @media(max-width:${({ theme }) => theme.breakpoint.small}) {
    flex-basis: 90%;}
`;

export const NavInput = styled.input`
    border-radius: 33px;
    border: white;
    padding: 11px;
    font-size: 16px;
    font-weight: 400;
    padding-inline-start: 52px;
    flex-basis: 432px;
    width: 48px;
    border-radius: 33px;
    border: 1px solid #E4E6F0;
  
  &:focus{
    outline:none
  }
 
  ::placeholder {
    color:${({ theme }) => theme.color.waterloo}
  }
`;
