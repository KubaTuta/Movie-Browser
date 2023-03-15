const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
 html {
  background-color: ${({ theme }) => theme.color.background};
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif; 
  padding: 0 16px;
 }
 
 #root {
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  h1 {
    font-size: 36px;
    margin: 24px 0 ;
    font-weight: 600;
  }
`