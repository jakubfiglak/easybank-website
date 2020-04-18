import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/Theme';
import Header from '../components/organisms/Header/Header';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
  </ThemeProvider>
);

export default IndexPage;
