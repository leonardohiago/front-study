import styled from 'styled-components';

export const Title = styled.div`
  margin: 64px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 32px;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    max-width: 720px;
    margin-top: 24px;
    text-align: center;
  }
`;

export const CourseList = styled.div`
  margin: 64px 32px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 32px;
    color: #FFF;
    margin-bottom: 32px;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const Course = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.secundary.dark};
  width: 880px;
  height: 96px;
  padding: 16px 24px;
  transition: width 0.4s;
  cursor: pointer;

  &:hover {
    width: 900px;
    background: ${({ theme }) => theme.colors.primary.main};

    p, h3 {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }

  & + & {
    margin-top: 16px;
  }

  .title {
    display: flex;
    align-items: center;
  }

  .number {
    text-align: left;
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 52px;
    margin-right: 32px;
  }

  .text {
    text-transform: uppercase;
    max-width: 116px;
    font-size: 18px;
  }

  .description {
    color: ${({ theme }) => theme.colors.secundary.light};
    width: 480px;
    text-align: justify;
    text-align-last: left;
  }
`;
