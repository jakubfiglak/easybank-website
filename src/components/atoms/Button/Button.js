import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  padding: 0.8rem 4rem;
  background: linear-gradient(164.89deg, #33D35E 0%, #2AB6D9 99.58%);
  border-radius: 22px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 2;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }
`;

export default Button;
