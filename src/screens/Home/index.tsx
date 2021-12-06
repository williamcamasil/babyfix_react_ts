import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Banner, BoxInformation } from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Banner>
          <h1>Seus veículo em boas mãos</h1>
        </Banner>
        <BoxInformation backgroundColor="#fff">
          <h2>Deveres que temos para com o nosso veículo</h2>
          <p>
            Todos nós temos um sonho que muitas vezes é adquirir um veículo,
            seja para transporte, hobbie ou lazer. O que não sabemos na maior
            parte das vezes é como cuidar desse bem, em que lugar leva-lo ou até
            mesmo como encontrar peças e lugares onde eu vou poder dar mais
            valor ao meu veículo, e o mais importante, como eu saberei ou
            poderei gerenciar todas essas manutenções. O nosso site tem todas
            essas soluções, para você que é novato, e até mesmo experiente,
            temos como objetivo facilitar sua vida e cuidar daquilo que te move
            e te proporciona muita felicidade.
          </p>
        </BoxInformation>
        <BoxInformation backgroundColor="#EEEEEE">
          <h2>Benefícios</h2>
          <p>
            Todos nós temos um sonho que muitas vezes é adquirir um veículo,
            seja para transporte, hobbie ou lazer. O que não sabemos na maior
            parte das vezes é como cuidar desse bem, em que lugar leva-lo ou até
            mesmo como encontrar peças e lugares onde eu vou poder dar mais
            valor ao meu veículo, e o mais importante, como eu saberei ou
            poderei gerenciar todas essas manutenções. O nosso site tem todas
            essas soluções, para você que é novato, e até mesmo experiente,
            temos como objetivo facilitar sua vida e cuidar daquilo que te move
            e te proporciona muita felicidade.
          </p>
        </BoxInformation>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
