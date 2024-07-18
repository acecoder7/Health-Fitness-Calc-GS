import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Analytics } from "@vercel/analytics/react"
import './index.css';
import App from './App';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#38A169',
    },
    background: {
      100: '#F0FFF4',
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <ChakraProvider theme={theme}>
    <Router>
      <App />
      <Analytics />
    </Router>
  </ChakraProvider>
);
