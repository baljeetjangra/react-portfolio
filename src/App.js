import React from 'react';
import {CssBaseline} from '@material-ui/core';
import Home from './components/index';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
    <CssBaseline />
      <Home />
      </ThemeProvider>
      
    </>
  );
}

export default App;
