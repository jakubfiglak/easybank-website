import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { menuItems } from '../../../data';

const StyledOuterWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: calc(100vh - 68px);
  top: 68px;
  left: 0;
  background: linear-gradient(180deg, #2D314D 0%, rgba(45, 49, 77, 0.0001) 100%);
  z-index: 999;
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: opacity 0.3s;
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};
`;

const StyledInnerWrapper = styled.div`
  position: absolute;
  top: -100vh;
  left: 50%;
  transform: ${({ open }) => (open ? 'translate(-50%, calc(100vh + 2.4rem))' : 'translateX(-50%)')};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  transition: transform 0.3s;
  z-index: 1000;
`;

const StyledMenuList = styled.ul`
  display: grid;
  text-align: center;
  gap: 2.4rem;
  list-style: none;
  padding: 3.2rem 13rem;
`;

const StyledMenuItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledMenuLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;

const MobileMenu = ({ open, closeMenuFn }) => (
  <StyledOuterWrapper open={open}>
    <StyledInnerWrapper open={open}>
      <StyledMenuList>
        {menuItems.map((item) => (
          <StyledMenuItem key={item}>
            <StyledMenuLink href={`#${item}`} onClick={closeMenuFn}>{item}</StyledMenuLink>
          </StyledMenuItem>
        ))}
      </StyledMenuList>
    </StyledInnerWrapper>
  </StyledOuterWrapper>
);

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  closeMenuFn: PropTypes.func.isRequired,
};

export default MobileMenu;
