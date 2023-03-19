import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './GlobalStyle';
<<<<<<< HEAD
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
=======
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from "./theme";
import store from "./store";
>>>>>>> main

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
=======
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
    </Provider>
>>>>>>> main
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
