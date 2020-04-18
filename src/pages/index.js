import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/Theme';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <h1>Hello</h1>
  </ThemeProvider>
);

export default IndexPage;
