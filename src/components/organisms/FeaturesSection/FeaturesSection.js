import React from 'react';
import styled from 'styled-components';
import { SectionHeading } from '../../atoms/Headings';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import FeatureCard from '../../molecules/FeatureCard/FeatureCard';
import { featureCardsContent } from '../../../data';

const StyledWrapper = styled.section`
  padding: 6.4rem 2.4rem;
  background: ${({ theme }) => theme.colors.lightGrayishBlue};
  display: grid;
  gap: 5rem;
  text-align: center;

  @media screen and (min-width: 992px) {
    padding: 10rem 16.5rem;
    gap: 7.2rem;
  }
`;

const StyledTitleWrapper = styled.div`
  display: grid;
  gap: 5rem;

  @media screen and (min-width: 992px) {
    gap: 1.6rem;
    text-align: left;
    width: 635px;
  }
`;

const StyledCardsWrapper = styled.div`
  display: grid;
  gap: 3.2rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4,1fr);
  }
`;

const FeaturesSection = () => (
  <StyledWrapper id="about">
    <StyledTitleWrapper>
      <SectionHeading>Why choose Easybank?</SectionHeading>
      <Paragraph>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before</Paragraph>
    </StyledTitleWrapper>
    <StyledCardsWrapper>
      {featureCardsContent.map((card) => (
        <FeatureCard key={card.title} Icon={card.icon} title={card.title} text={card.text} />
      ))}
    </StyledCardsWrapper>
  </StyledWrapper>
);

export default FeaturesSection;
