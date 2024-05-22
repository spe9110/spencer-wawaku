import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from './component/Header/DarkMode';
import { ChakraProvider } from '@chakra-ui/react';
import { AlertProvider } from './component/Main/AlertMessage/AlertContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AlertProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </AlertProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
