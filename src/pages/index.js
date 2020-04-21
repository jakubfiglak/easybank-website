import React from 'react';
import styled from 'styled-components';
import Header from '../components/organisms/Header/Header';
import FeaturesSection from '../components/organisms/FeaturesSection/FeaturesSection';
import ArticlesSection from '../components/organisms/ArticlesSection/ArticlesSection';
import Footer from '../components/organisms/Footer/Footer';

const MainWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const IndexPage = () => (
  <MainWrapper>
    <Header />
    <main>
      <FeaturesSection />
      <ArticlesSection />
    </main>
    <Footer />
  </MainWrapper>
);

export default IndexPage;
