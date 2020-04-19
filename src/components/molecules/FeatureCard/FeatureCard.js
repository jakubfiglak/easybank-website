import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ArticleHeading } from '../../atoms/Headings';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: grid;
  gap: 1.6rem;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 992px) {
    justify-items: start;
    text-align: left;
  }
`;

const StyledIconWrapper = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%);
  margin-bottom: 0.8rem;
`;

const FeatureCard = ({ Icon, title, text }) => (
  <StyledWrapper>
    <StyledIconWrapper>
      <Icon />
    </StyledIconWrapper>
    <ArticleHeading>{title}</ArticleHeading>
    <Paragraph>{text}</Paragraph>
  </StyledWrapper>
);

FeatureCard.propTypes = {
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeatureCard;
