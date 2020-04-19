import React from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/icons/logo-bright.inline.svg';
import Facebook from '../../../assets/icons/icon-facebook.inline.svg';
import Youtube from '../../../assets/icons/icon-youtube.inline.svg';
import Twitter from '../../../assets/icons/icon-twitter.inline.svg';
import Pinterest from '../../../assets/icons/icon-pinterest.inline.svg';
import Instagram from '../../../assets/icons/icon-instagram.inline.svg';
import { footerMenuItems } from '../../../data';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.footer`
  display: grid;
  background: ${({ theme }) => theme.colors.primary};
  padding: 4rem 8rem;
  place-items: center center;
  gap: 3.2rem;

  @media screen and (min-width: 992px) {
    grid-template-areas: 
      "logo nav button"
      "icons nav copyright";
    justify-items: start;
  }
`;

const StyledLogo = styled(Logo)`
   @media screen and (min-width: 992px) {
    grid-area: logo;
  }
`;

const StyledIconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 1.6rem;

  @media screen and (min-width: 992px) {
    grid-area: icons;
  }
`;

const StyledIcon = styled.a`
  path {
    transition: all 0.3s;
  }

  &:hover path {
    fill: ${({ theme }) => theme.colors.secondary}
  }
`;

const StyledMenuList = styled.ul`
  display: grid;
  gap: 0.8rem;
  list-style: none;
  place-items: center center;

  @media screen and (min-width: 992px) {
    grid-area: nav;
    grid-template-columns: repeat(2,1fr);
    justify-items: start;
  }
`;

const StyledMenuItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.7;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const StyledMenuLink = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const StyledButton = styled(Button)`
   @media screen and (min-width: 992px) {
    justify-self: end;
  }
`;

const StyledParagraph = styled(Paragraph)`
   @media screen and (min-width: 992px) {
    justify-self: end;
  }
`;

const Footer = () => (
  <StyledWrapper>
    <StyledLogo />
    <StyledIconWrapper>
      <StyledIcon href="https://www.facebook.com/"><Facebook /></StyledIcon>
      <StyledIcon href="https://www.youtube.com/"><Youtube /></StyledIcon>
      <StyledIcon href="https://twitter.com/"><Twitter /></StyledIcon>
      <StyledIcon href="https://pinterest.com/"><Pinterest /></StyledIcon>
      <StyledIcon href="https://instagram.com"><Instagram /></StyledIcon>
    </StyledIconWrapper>
    <StyledMenuList>
      {footerMenuItems.map((item) => (
        <StyledMenuItem key={item}>
          <StyledMenuLink href={`#${item}`}>{item}</StyledMenuLink>
        </StyledMenuItem>
      ))}
    </StyledMenuList>
    <StyledButton>Request Invite</StyledButton>
    <StyledParagraph>© Easybank. All Rights Reserved</StyledParagraph>
  </StyledWrapper>
);

export default Footer;
