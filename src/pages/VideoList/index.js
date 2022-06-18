import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Header from '../../components/Header';

import {
  Container, Title, Content, Videos, VideoItem, SelectedVideo, VideoDescription
} from './styles';
import exit from '../../assets/images/icons/exit.svg';

export default function VideoList() {
  const [videos, setVideos] = useState();
  const [selectedVideo, setSelectedVideo] = useState();

  function getSelectedVideo(video) {
    setSelectedVideo(video);
  }

  let playlistId;
  const { href } = window.location;

  function getCourse() {
    if (href.match(/web/)) {
      playlistId = 'PL8M6AAmKUKzevIGg_OL9l33OqE1AL6YnO';
      return 'Conceitos da Web';
    } if (href.match(/html/)) {
      playlistId = 'PLwXQLZ3FdTVGKl3iPEyEWpFoYkMUxWW5O';
      return 'HTML';
    } if (href.match(/css/)) {
      playlistId = 'PLx4x_zx8csUi47Bnugpk78nqJN6rYvEnV';
      return 'CSS';
    } if (href.match(/javascript/)) {
      playlistId = 'PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm';
      return 'JavaScript';
    }
    playlistId = 'PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO';
    return 'React';
  }

  useEffect(() => {
    api
      .get(`?part=snippet&playlistId=${playlistId}&maxResults=50&key=AIzaSyCB2nH-iEQXpK8V6bXLZWV-bxeGbz_LH0w`)
      .then((response) => setVideos(response.data))
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert(`opssss! ocorreu um erro :( -> ${err}`);
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h2>
            Curso de
            {' '}
            {getCourse()}
          </h2>
          <Link to="/courses">
            <img src={exit} alt="Seta apontando para o lado esquerdo sinalizando o botão de voltar" />
            Voltar
          </Link>
        </Title>
        <Content>
          {
            videos
            && (
            <Videos>
              {videos.items.map((video) => (
                <VideoItem
                  key={video.id}
                  onClick={() => getSelectedVideo(video)}
                  className={selectedVideo?.id === video?.id ? 'selected' : null}
                >
                  {video.snippet.title}
                </VideoItem>
              ))}
            </Videos>
            )
          }
          { selectedVideo ? (
            <SelectedVideo>
              <iframe width="100%" height="63%" src={`https://www.youtube.com/embed/${selectedVideo?.snippet.resourceId.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              <VideoDescription>
                <h3 className="title">
                  { selectedVideo?.snippet.title }
                </h3>
                <p>
                  Autor:
                  {' '}
                  <a className="channel" target="_blank" href={`https://www.youtube.com/channel/${selectedVideo?.snippet.videoOwnerChannelId}`} rel="noreferrer">
                    { selectedVideo?.snippet.videoOwnerChannelTitle }
                  </a>
                </p>
                <p className="description">Seja um apoiador do autor do curso. Você pode ajudar ele de diversas formas. Como por exemplo, se inscrevendo em seu canal, se tornando membro ou compartilhando seu trabalho nas redes sociais. Sua ajuda é essencial para manter conteúdo de qualidade de maneira gratuíta.</p>
              </VideoDescription>
            </SelectedVideo>
          ) : (
            <SelectedVideo>
              <h3 className="alert">Clique na aula que deseja assistir e o vídeo será renderizado.</h3>
            </SelectedVideo>
          )}
        </Content>
      </Container>
    </>
  );
}
