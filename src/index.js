import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { theme } from "./theme";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Normalize/>
      <GlobalStyle />
      <App />
    </ThemeProvider>
    </Provider>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
