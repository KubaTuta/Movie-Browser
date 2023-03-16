const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
  #root {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;    
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
`;