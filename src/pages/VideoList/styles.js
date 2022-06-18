import styled from 'styled-components';

export const Container = styled.div`
  width: 1104px;
  margin: 0 auto;
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: underline;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 24px;

  h2 {
    font-size: 24px;
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

export const Content = styled.div`
  height: 680px;
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-gap: 1.6rem;
  grid-template-areas: 'videos selectedVideo' ;
`;

export const Videos = styled.div`
  grid-area: videos;
  overflow: auto;
  display: flex;
  flex-direction: column;

  .selected {
    background: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secundary.dark};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.secundary.light};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const VideoItem = styled.div`
  margin-bottom: 10px;
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.secundary.dark};
  cursor: pointer;
  transition: all 0.4s;
  text-transform: capitalize;

  &:last-child {
    margin-bottom: 0px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
    font-weight: bold;
    color: #FFF;
  }
`;

export const SelectedVideo = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.secundary.dark};
  grid-area: selectedVideo;
  width: 759px;

  .alert {
    margin: auto;
    text-align: center;
    align-items: center;
    color: #FFF;
  }
`;

export const VideoDescription = styled.div`
  padding: 24px;
  text-overflow: ellipsis;

  .title {
    color: ${({ theme }) => theme.colors.primary.main};
    margin-bottom: 4px;
    margin-top: 16px;
  }

  .channel {
    text-decoration: none;
    color: #FFF;
    transition: all 0.4s;
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  .description {
    margin-top: 32px;
    text-transform: none;
    text-align: justify;
    font-size: 14px;
  }
`;
