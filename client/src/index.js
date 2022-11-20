import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Redux/store/index.js';
import { Provider } from 'react-redux';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Auth0Provider } from "@auth0/auth0-react";
import axios from 'axios';

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

axios.defaults.baseURL = "https://wcfixture-back-production.up.railway.app" || "http://localhost:3001";

export default theme

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Provider store={store}>
      <Auth0Provider domain='dev-gc27ick5rtn5sejy.us.auth0.com' clientId='oZJ2xUiU5CKmEno9apmtGt6QkOyJmawN' redirectUri={window.location.origin}>
        <App />
        </Auth0Provider>
    </Provider>
  </ChakraProvider>
);