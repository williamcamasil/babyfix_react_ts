import { Container, FooterComponent, Img } from './styles';
import imgEmail from '../../assets/images/email.png';
import imgInstagram from '../../assets/images/instagram.png';
import imgLinkedin from '../../assets/images/linkedin.png';

const Footer = () => {
  return (
    <>
      <Container>
        <FooterComponent>
          <div className="social-images">
            <Img src={imgEmail} alt="logo email" />
            <Img src={imgInstagram} alt="logo instagram" />
            <Img src={imgLinkedin} alt="logo linkedin" />
          </div>
          <hr />
          <p>© 2021 Todos os direitors reservados.</p>
        </FooterComponent>
      </Container>
    </>
  );
};

export default Footer;
