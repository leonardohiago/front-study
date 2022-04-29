import GoogleLogin from 'react-google-login';
import {
  Container, LoginText, LoginBox, ButtonTheme
} from './styles';

import logo from '../../assets/images/logo-frontstudy.svg';
import exit from '../../assets/images/icons/exit.svg';

const description = 'É necessário apenas realizar a autenticação com sua conta Google, garantindo assim um acesso rápido e seguro.';

function responseGoogle(response) {
  // eslint-disable-next-line no-console
  console.log(response);
}

export default function Login() {
  return (
    <Container>
      <LoginText>
        <img src={logo} alt="Logotipo FrontStudy" />
        <h1>Realize seu login na plataforma</h1>
        <p>{description}</p>
      </LoginText>
      <LoginBox>
        <p>Clique no botão abaixo para realizar a autenticação.</p>
        <ButtonTheme>
          <GoogleLogin
            className="googleButton"
            clientId="175871065805-nrre53q2kldsnlfh64cg2it7aghh1hdd.apps.googleusercontent.com"
            buttonText="Acessar com o Google"
            onSuccess={responseGoogle}
            onFail={responseGoogle}
          />
        </ButtonTheme>
        <a href="/">
          <img src={exit} alt="Seta apontando para o lado esquerdo sinalizando o botão de voltar" />
          Voltar
        </a>
      </LoginBox>
    </Container>
  );
}
