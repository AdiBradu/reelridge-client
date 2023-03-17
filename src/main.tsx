import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
// styles
import './styles/reset.css';
// material ui
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';
// redux
import { Provider } from 'react-redux';
import { store } from './api/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <ThemeProvider theme={theme}>
  //       <App />
  //     </ThemeProvider>
  //   </Provider>
  // </React.StrictMode>,
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
);
