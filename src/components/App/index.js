import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Routes from '../../Routes';

const history = createBrowserHistory({
  basename: '/'
});
window.redirect = history.push;

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
