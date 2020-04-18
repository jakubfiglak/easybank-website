import styled from 'styled-components';

export const MainHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: 1.2;
`;

export const SectionHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 1.15;
`;

export const ArticleHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.4;
`;
