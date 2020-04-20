import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { MainHeading } from '../components/atoms/Headings';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import { theme } from '../theme/Theme';
import GlobalStyle from '../theme/GlobalStyle';

export const query = graphql`
  query querySingleArticle($id: String!) {
  datoCmsArticle(id: {eq: $id}) {
    title
    author
    featuredImage {
      url
    }
    articleContent
  }
}
`;

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  place-items: center center;
  padding: 5rem;
`;

const StyledImage = styled.img`
  width: 90%;
  max-width: 500px;
  margin: 3rem 0;
  border-radius: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: hsl(233, 26%, 24%);
  transition: all 0.3s;
  align-self: start;
  margin-top: 2rem;

  &:hover {
    color: hsl(136, 65%, 51%);
  }
`;

const ArticleLayout = ({ data }) => {
  const {
    title, author, featuredImage, articleContent,
  } = data.datoCmsArticle;

  console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledWrapper>
        <MainHeading>{title}</MainHeading>
        <Paragraph small>
          Author:
          {' '}
          {author}
        </Paragraph>
        <StyledImage src={featuredImage.url} />
        <Paragraph>{articleContent}</Paragraph>
        <StyledLink to="/">Go back</StyledLink>
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default ArticleLayout;
