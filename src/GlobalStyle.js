const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
 html {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.color.background};
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  #root {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif; 
  }
 
`
