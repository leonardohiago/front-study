/* eslint-disable no-unused-vars */
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import {
  Container, LoginText, LoginBox, ButtonTheme
} from './styles';

import logo from '../../assets/images/logo-frontstudy.svg';
import exit from '../../assets/images/icons/exit.svg';

import { UserContext } from '../../contexts/GlobalContext';

const description = 'É necessário apenas realizar a autenticação com sua conta Google, garantindo assim um acesso rápido e seguro.';

function responseGoogle(response) {
  if (response.googleId) {
    // const user = React.useContext(UserContext);
    // user.user = response;
    window.redirect('/courses');
  } else {
    // eslint-disable-next-line no-alert
    alert('Não Conseguimos Realizar a Autenticação.');
  }
}

export default function Login() {
  return (
    <Container>
      <LoginText>
        <img src={logo} alt="Logotipo FrontStudy" />
        <h1>
          Realize seu
          {' '}
          <span>login</span>
          {' '}
          na plataforma
        </h1>
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
        <Link to="/">
          <img src={exit} alt="Seta apontando para o lado esquerdo sinalizando o botão de voltar" />
          Voltar
        </Link>
      </LoginBox>
    </Container>
  );
}
