import styled from "styled-components";



export const NavigationBoxStyled = styled.div`
    background: #18181B; // uwaga dodać to thema
    height:94px;
`;
export const Navigation = styled.div`
    max-width: 1368px;
    margin:auto;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items:center;
    
`;
export const NavH1 = styled.h1`
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;

    
`;

export const NavLinks = styled.ul`
    display:flex;
    list-style:none;
    align-items:flex-start;
    flex: auto;
    margin-left:5px;
   
`
export const NavLinkStyled = styled.li`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    padding:20px;
    align-self: flex-end;
    
    
   
    
    

  
`;
export const NavInput = styled.input`
    border-radius: 33px;
    border: 1px solid #E4E6F0;
    padding: 15px;
    flex-basis: 432px;
   
   
`;
