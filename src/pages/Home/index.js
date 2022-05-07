import {
  Container, Header, Main, WhatLearn, MatterCard, MatterCardList, CommonQuestions,
  QuestionList, Question, LastCall, Footer
} from './styles';

import logo from '../../assets/images/logo-frontstudy.svg';
import persona from '../../assets/images/main-persona.png';
import code from '../../assets/images/icons/code.svg';
import login from '../../assets/images/icons/login.svg';

const description = 'Inicie do zero e vá até a criação de seus primeiros projetos front-end de maneira totalmente gratuíta.';
const lastCallDescription = 'Essa é a sua oportunidade de iniciar uma carreira na área de desenvolvimento, obtendo uma base de conhecimento sólida para se tornar um desenvolvedor de sucesso.';
const matters = [
  {
    id: 0,
    title: 'Web',
    subtitle: 'Você irá aprender como a web funciona, o que acontece quando você acessa um site e etc.',
    image: code
  },
  {
    id: 1,
    title: 'Html',
    subtitle: 'É o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.',
    image: code
  },
  {
    id: 2,
    title: 'Css',
    subtitle: 'É usado para estilizar elementos escritos em uma linguagem de marcação como HTML.',
    image: code
  },
  {
    id: 3,
    title: 'Javascript',
    subtitle: 'É uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe.',
    image: code
  },
  {
    id: 4,
    title: 'React',
    subtitle: 'Foi criado em 2011 pelo time do Facebook e é uma biblioteca JavaScript para a criação de interfaces de usuário.',
    image: code
  }
];

export default function Home() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Logotipo FrontStudy" />
        <span className="material-icons-outlined" />
        <a href="/login">
          <img src={login} alt="Ícone de representação do login" />
          Entrar
        </a>
      </Header>
      <Main>
        <div>
          <h1>
            Aprenda programação
            {' '}
            <span>front-end</span>
            {' '}
            do
            {' '}
            <span>zero</span>
            .
          </h1>
          <p>{description}</p>
          <a href="/login">Estudar Agora</a>
        </div>
        <div>
          <img src={persona} alt="Homem sorrindo segurando um notebook em sua mão" />
        </div>
      </Main>
      <WhatLearn>
        <h2 className="title">
          O que você irá &nbsp;
          <span>aprender</span>
          ?
        </h2>
        <MatterCardList>
          {matters.map((matter) => (
            <MatterCard
              key={matter.id}
            >
              <img className="icon" src={matter.image} alt="Code" />
              <h4 className="title">{matter.title}</h4>
              <p className="description">{matter.subtitle}</p>
            </MatterCard>
          ))}
        </MatterCardList>
      </WhatLearn>
      <CommonQuestions>
        <h2 className="title">
          <span>Perguntas</span>
          &nbsp; Frequentes
        </h2>
        <QuestionList>
          <Question>
            <p>O que eu preciso saber para fazer o curso?</p>
          </Question>
          <Question>
            <p>Como posso acessar a plataforma?</p>
          </Question>
          <Question>
            <p>Como saber se esse curso é para mim?</p>
          </Question>
        </QuestionList>
      </CommonQuestions>
      <LastCall>
        <h3 className="title">O que você está esperando?</h3>
        <p>{lastCallDescription}</p>
        <a href="/login">
          Estudar Agora
        </a>
      </LastCall>
      <Footer>
        <img className="teste" src={logo} alt="Logotipo FrontStudy localizado no rodapé da página" />
      </Footer>
    </Container>
  );
}
