import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: underline;
  }
`;

export const Header = styled.header`
  max-width: 1164px;
  margin: 0 auto;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
  padding: 0px 32px;

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

export const Main = styled.div`
  max-width: 1164px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
  padding: 0px 32px;

  h1 {
    font-size: 40px;
    margin-bottom: 24px;
  }

  img {
    max-width: 514px;
  }

  p {
    max-width: 472px;
    margin-bottom: 36px;
    text-transform: none;
  }

  a {
    padding: 10px 16px;
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.secundary.dark};
    text-transform: none;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.4s;

    &:hover {
      padding: 10px 20px;
      background: #FFF;
    }
  }
`;

export const WhatLearn = styled.div`
  padding: 64px 32px;
  background: ${({ theme }) => theme.colors.secundary.dark};

  .title {
    font-size: 32px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

export const MatterCardList = styled.div`
  display: flex;
  justify-content: center;
`;

export const MatterCard = styled.div`
  background: ${({ theme }) => theme.colors.secundary.main};
  width: 200px;
  height: 240px;
  padding: 16px 20px;
  margin: 12px;

  .icon {
    margin: auto;
    display: block;
    width: 64px;
  }

  .title {
    display: flex;
    justify-content: center;
    color: #FFF;
    margin: 16px 0px;
    font-size: 24px;
  }

  .description {
    display: flex;
    color: ${({ theme }) => theme.colors.secundary.light};
    text-align: justify;
    text-align-last: center;
    font-size: 12px;
    text-transform: none;
  }
`;

export const CommonQuestions = styled.div`
  padding: 64px 32px;

  .title {
    font-size: 32px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

export const QuestionList = styled.div`
  display: grid;
  justify-content: center;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.secundary.dark};
  width: 880px;
  height: 56px;
  text-align: center;
  text-transform: uppercase;

  cursor: pointer;

  & + & {
    margin-top: 16px;
  }
`;

export const LastCall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 32px;
  background: ${({ theme }) => theme.colors.primary.main};

  .title {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.secundary.main};
    margin-bottom: 24px;
    text-align: center;
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.dark};
    text-transform: none;
    max-width: 800px;
    text-align: center;
    margin-bottom: 24px;
  }

  a {
    cursor: pointer;
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    padding: 16px 24px;
    background: ${({ theme }) => theme.colors.secundary.main};
    transition: all 0.6s;

    &:hover {
      padding: 16px 28px;
      background: #FFF;
      color: ${({ theme }) => theme.colors.secundary.main};
    }

    .underline {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0px;
`;
