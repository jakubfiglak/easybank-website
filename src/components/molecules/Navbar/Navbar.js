import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/icons/logo.inline.svg';
import Hamburger from '../../../assets/icons/icon-hamburger.inline.svg';
import Close from '../../../assets/icons/icon-close.inline.svg';
import MobileMenu from '../MobileMenu/MobileMenu';
import DesktopMenu from '../DesktopMenu/DesktopMenu';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  max-height: 68px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1440px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 999;

  @media screen and (min-width: 992px) {
    padding: 3.2rem 8rem;
    max-height: 80px;
  }
`;

const MenuButton = styled.button`
  border: 0;
  background: 0;
  cursor: pointer;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.secondary}
  }

  g {
    transition: all 0.3s;
  }

  &:hover g {
    fill: ${({ theme }) => theme.colors.secondary}
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const StyledButton = styled(Button)`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(!isMobileMenuVisible);
  };

  return (
    <StyledWrapper>
      <Logo />
      <DesktopMenu />
      <MenuButton onClick={toggleMobileMenu} aria-expanded={isMobileMenuVisible} aria-label="Toggle mobile menu">
        {!isMobileMenuVisible ? <Hamburger /> : <Close />}
      </MenuButton>
      <StyledButton>Request invite</StyledButton>
      <MobileMenu open={isMobileMenuVisible} aria-hidden={!isMobileMenuVisible} closeMenuFn={toggleMobileMenu} />
    </StyledWrapper>
  );
};

export default Navbar;
