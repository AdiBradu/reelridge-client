import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
// styles
import './styles/reset.css';
// material ui
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
