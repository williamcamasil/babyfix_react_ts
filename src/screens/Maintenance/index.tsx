import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Maintence } from './styles';
import BoxRegisterList from './BoxRegisterList';

const RegisterListMaintenance = () => {
  return (
    <>
      <Header />
      <Container>
        <Maintence>
          <h1>Manutenção para o veículo [NOME]</h1>
          <BoxRegisterList />
        </Maintence>
      </Container>
      <Footer />
    </>
  );
};

export default RegisterListMaintenance;
