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
  height: 100vh;
`;

const StyledHero = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 350px;
  background: url(${MobilePattern}) no-repeat center center;
  background-size: 100%;
`;

const StyledImg = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledWrapper = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 1.6rem;
  margin: 4rem 2.4rem;
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
      <StyledHero>
        <StyledImg src={src} srcSet={srcSet} sizes={sizes} alt="" />
      </StyledHero>
      <StyledWrapper>
        <MainHeading>Next generation digital banking</MainHeading>
        <Paragraph>Take your financial life online. Your Easybank account will be a one-step-shop for spending, saving, budgeting, investing, and much more</Paragraph>
        <StyledButton>Request invite</StyledButton>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Header;
