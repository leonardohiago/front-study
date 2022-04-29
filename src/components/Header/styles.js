import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.secundary.dark};
  width: 100%;
  height: 80px;
`;

export const HeaderAplication = styled.header`
  max-width: 1164px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
  padding: 26px 32px;

  a {
    color: #FFF;
    text-transform: none;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
      transition: all 0.2s ease-in;
      font-size: 18px;
    }
  }

  img {
    margin-right: 8px;
  }
`;
