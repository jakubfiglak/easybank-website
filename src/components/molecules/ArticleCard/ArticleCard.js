import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { ArticleHeading } from '../../atoms/Headings';

const StyledWrapper = styled.div`
 border-radius: 5px;
 background: ${({ theme }) => theme.colors.white}; 
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0px 0px;
`;

const StyledTitle = styled(ArticleHeading)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary}
  }
`;

const StyledContentWrapper = styled.div`
  display: grid;
  gap: 0.8rem;
  padding: 3rem 2.4rem;
  text-align: left;
`;

const ArticleCard = ({
  author, title, text, image,
}) => (
  <StyledWrapper>
    <StyledImg src={image} alt="" />
    <StyledContentWrapper>
      <Paragraph xs>
        By
        {' '}
        {author}
      </Paragraph>
      <StyledTitle as="a" href="#">{title}</StyledTitle>
      <Paragraph>{text}</Paragraph>
    </StyledContentWrapper>
  </StyledWrapper>
);

ArticleCard.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ArticleCard;
