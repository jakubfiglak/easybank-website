import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/icons/logo.inline.svg';
import Hamburger from '../../../assets/icons/icon-hamburger.inline.svg';
import Close from '../../../assets/icons/icon-close.inline.svg';

const StyledWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  max-height: 68px;
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
`;

const Navbar = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => setMobileMenuVisibility(!isMobileMenuVisible);

  return (
    <StyledWrapper>
      <Logo />
      <MenuButton onClick={toggleMobileMenu}>
        {!isMobileMenuVisible ? <Hamburger /> : <Close />}
      </MenuButton>
    </StyledWrapper>
  );
};

export default Navbar;
