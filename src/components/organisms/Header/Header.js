import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import MobilePattern from '../../../assets/backgrounds/bg-intro-mobile.svg';
import DesktopPattern from '../../../assets/backgrounds/bg-intro-desktop.svg';
import Navbar from '../../molecules/Navbar/Navbar';
import { MainHeading } from '../../atoms/Headings';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';

const StyledContainer = styled.header`
  max-width: 1440px;
  margin: 0 auto;
`;

const StyledHero = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 350px;
  background: url(${MobilePattern}) no-repeat center center;
  background-size: 100%;
  /* z-index: -1; */

  @media screen and (min-width: 992px) {
    background: url(${DesktopPattern}) no-repeat;
    background-position: 10% center;
    height: 100%;
    z-index: auto;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  width: 375px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 992px) {
    width: 732px;
    left: 65%;
    bottom: 0;
  }
`;

const StyledContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 1.6rem;
  margin: 4rem 2.4rem;

  @media screen and (min-width: 992px) {
    order: -1;
    padding: 17rem 0;
    margin-left: 16.5rem;
    justify-items: start;
    text-align: left;
  }
`;

const StyledWelcomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 68px;

  @media screen and (min-width: 992px) {
    grid-template-columns: 2fr 3fr;
    background: ${({ theme }) => theme.colors.veryLightGray};
    margin-top: 80px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 1.6rem;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
  {
    file(name: { eq: "image-mockups" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1200, quality: 100) {
          src
          srcSet
          sizes
        }
      }
    }
  }
  `);

  const { src, srcSet, sizes } = data.file.childImageSharp.fluid;

  return (
    <StyledContainer>
      <Navbar />
      <StyledWelcomeWrapper>
        <StyledHero>
          <StyledImg src={src} srcSet={srcSet} sizes={sizes} alt="" />
        </StyledHero>
        <StyledContentWrapper>
          <MainHeading>Next generation digital banking</MainHeading>
          <Paragraph>Take your financial life online. Your Easybank account will be a one-step-shop for spending, saving, budgeting, investing, and much more</Paragraph>
          <StyledButton>Request invite</StyledButton>
        </StyledContentWrapper>
      </StyledWelcomeWrapper>
    </StyledContainer>
  );
};

export default Header;
