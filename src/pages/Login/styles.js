import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  text-transform: uppercase;
  max-width: 1164px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 180px;

  p {
    text-transform: none;
  }
`;

export const LoginText = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    margin-bottom: 48px;
    width: 124px;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 24px;
  }

  span {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: underline;
  }
`;

export const LoginBox = styled.div`
  background: ${({ theme }) => theme.colors.secundary.dark};
  width: 480px;
  height: 336px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    text-align-last: center;
    margin-bottom: 32px;
  }

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

export const ButtonTheme = styled.div`

  .googleButton {
    width: 424px;
    height: 64px;
    background: ${({ theme }) => theme.colors.secundary.main} !important;
    color: ${({ theme }) => theme.colors.primary.main} !important;
    padding: 8px 0px !important;
    border: none !important;
    margin-bottom: 32px !important;

    span {
      margin-left: 50px;
      font-size: 28px !important;
      font-weight: bold !important;
    }

    div {
      display: none;
    }

    svg {
      display: none;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.secundary.main} !important;
      background: ${({ theme }) => theme.colors.primary.main} !important;
      transition: all ease-in-out 0.4s !important;
      font-weight: bold !important;
    }
  }
`;
