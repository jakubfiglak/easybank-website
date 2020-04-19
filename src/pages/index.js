import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/Theme';
import Header from '../components/organisms/Header/Header';
import FeaturesSection from '../components/organisms/FeaturesSection/FeaturesSection';
import ArticlesSection from '../components/organisms/ArticlesSection/ArticlesSection';

const MainWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <MainWrapper>
      <GlobalStyle />
      <Header />
      <main>
        <FeaturesSection />
        <ArticlesSection />
      </main>
    </MainWrapper>
  </ThemeProvider>
);

export default IndexPage;
