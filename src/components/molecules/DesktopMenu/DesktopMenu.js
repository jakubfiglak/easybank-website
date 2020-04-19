import React from 'react';
import styled from 'styled-components';
import { menuItems } from '../../../data';

const StyledMenuList = styled.ul`
  list-style: none;
  display: none;

  @media screen and (min-width: 992px) {
    display: flex;
  }
`;

const StyledMenuItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0 3rem;

`;

const StyledMenuLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grayishBlue};
  transition: all 0.3s;
  position: relative;
  text-transform: capitalize;
  
  &:hover {
  color: ${({ theme }) => theme.colors.primary};

    &::after {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::after {
    position: absolute;
    left: -10%;
    bottom: -10px;
    display: block;
    content: '';
    width: 120%;
    height: 4px;
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateX(-50%);
    opacity: 0;
    transition: all 0.3s;
  }
`;

const DesktopMenu = () => (
  <StyledMenuList>
    {menuItems.map((item) => (
      <StyledMenuItem key={item}>
        <StyledMenuLink href={`#${item}`}>{item}</StyledMenuLink>
      </StyledMenuItem>
    ))}
  </StyledMenuList>
);

export default DesktopMenu;
