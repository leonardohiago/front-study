import { Link } from 'react-router-dom';

import { Container, HeaderAplication } from './styles';

import logo from '../../assets/images/logo-frontstudy.svg';
import logout from '../../assets/images/icons/logout.svg';

export default function Header() {
  return (
    <Container>
      <HeaderAplication>
        <img src={logo} alt="Logotipo FrontStudy" />
        <Link to="/">
          <img src={logout} alt="Ícone de representação do logout" />
          Sair
        </Link>
      </HeaderAplication>
    </Container>
  );
}
