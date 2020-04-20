import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionHeading } from '../../atoms/Headings';
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

const ArticlesSection = () => {
  const data = useStaticQuery(graphql`
    query queryArticles {
      allDatoCmsArticle {
        nodes {
          id
          slug
          title
          author
          featuredImage {
            url
          }
          articleContent
        }
      }
    }
  `);

  const { nodes } = data.allDatoCmsArticle;

  return (
    <StyledWrapper id="blog">
      <SectionHeading>Latest Articles</SectionHeading>
      <StyledArticlesWrapper>
        {nodes.map((node) => (
          <ArticleCard key={node.id} author={node.author} title={node.title} text={node.articleContent} image={node.featuredImage.url} slug={node.slug} />
        ))}
      </StyledArticlesWrapper>
    </StyledWrapper>
  );
};

export default ArticlesSection;
