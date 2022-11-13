import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/store/index.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
);