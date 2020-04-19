import React from 'react';
import styled from 'styled-components';
import { SectionHeading } from '../../atoms/Headings';
import { articles } from '../../../data';
import ArticleCard from '../../molecules/ArticleCard/ArticleCard';

const StyledWrapper = styled.section`
  padding: 9rem 2.4rem;
  background: ${({ theme }) => theme.colors.veryLightGray};
  text-align: center;
`;

const StyledArticlesWrapper = styled.div`
  display: grid;
  gap: 2.4rem;
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4,1fr);
  }
`;

const ArticlesSection = () => (
  <StyledWrapper id="blog">
    <SectionHeading>Latest Articles</SectionHeading>
    <StyledArticlesWrapper>
      {articles.map((article) => (
        <ArticleCard author={article.author} title={article.title} text={article.text} />
      ))}
    </StyledArticlesWrapper>
  </StyledWrapper>
);

export default ArticlesSection;
