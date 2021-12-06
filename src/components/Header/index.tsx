import { Link } from 'react-router-dom';
import { Container, HeaderComponent, ImageLogo, Menu } from './styles';
import Logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <>
      <Container>
        <HeaderComponent>
          <ImageLogo>
            <Link to="/">
              <img src={Logo} alt="Logo babyfix" />
            </Link>
          </ImageLogo>

          <Menu>
            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/manutencao">Manutenção</Link>
              </li>
            </ul>
          </Menu>
        </HeaderComponent>
      </Container>
    </>
  );
};

export default Header;
