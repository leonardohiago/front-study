import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1104px;
  /* max-width: 1160px; */
  margin: 0 auto;
  text-transform: uppercase;
`;

export const Header = styled.header`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;

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
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 40px;
    margin-bottom: 24px;
  }

  img {
    max-width: 514px;
  }

  p {
    max-width: 472px;
    margin-bottom: 24px;
    text-transform: none;
  }
`;

export const WhatLearn = styled.div`
  padding-top: 80px;

  .title {
    font-size: 32px;
    margin-bottom: 40px;
    margin-top: 64px;
    display: flex;
    justify-content: center;
  }
`;

export const MatterCardList = styled.div`
  display: flex;
  justify-content: center;
`;

export const MatterCard = styled.div`
  background: ${({ theme }) => theme.colors.secundary.dark};
  width: 200px;
  height: 240px;
  padding: 16px 20px;
  margin: 12px;
  /* padding-right: 24px;
  padding-left: 24px; */

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
  padding: 64px 0px;

  .title {
    font-size: 32px;
    margin-bottom: 40px;
    margin-top: 64px;
    display: flex;
    justify-content: center;
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
  padding: 64px 0 ;
  background: ${({ theme }) => theme.colors.primary.main};

  .title {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.secundary.main};
    margin-bottom: 24px;
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
    padding: 16px 24px;
    background: ${({ theme }) => theme.colors.secundary.main};

    &:hover {
      font-size: 18px;
      transition: all ease-in-out 0.4s ;
      background: #FFF;
      color: ${({ theme }) => theme.colors.secundary.main};
    }
  }
`;
