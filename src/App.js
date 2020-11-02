import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import Header from './Header';

function App() {
  // test change
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/search">Search</Route>
          <Route path="/">Home</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
