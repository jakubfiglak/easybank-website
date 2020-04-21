import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { MainHeading } from '../components/atoms/Headings';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

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
  max-width: 992px;
  margin: 0 auto;
`;

const StyledImage = styled.img`
  width: 90%;
  max-width: 500px;
  margin: 3rem 0;
  border-radius: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s;
  align-self: start;
  margin-top: 2rem;

  &:hover {
   color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ArticleLayout = ({ data }) => {
  const {
    title, author, featuredImage, articleContent,
  } = data.datoCmsArticle;

  return (
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
  );
};

ArticleLayout.propTypes = {
  data: PropTypes.shape({
    datoCmsArticle: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      featuredImage: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      articleContent: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ArticleLayout;
