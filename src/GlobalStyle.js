const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
 html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  body {
    background-color: ${({ theme }) => theme.color.background};
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif; 
    padding: 0 16px;
 }
 
`