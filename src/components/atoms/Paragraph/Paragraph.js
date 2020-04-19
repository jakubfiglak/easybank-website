import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 1.67;

  ${({ small }) => small && css`
    font-size: ${({ theme }) => theme.fontSize.xxs};
    line-height: 1.38; 
  `};

  ${({ xs }) => xs && css`
    font-size: 1rem;
    line-height: 1.8;
  `}
`;

export default Paragraph;
