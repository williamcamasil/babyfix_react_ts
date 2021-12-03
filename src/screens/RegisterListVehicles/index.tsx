import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { Container } from './styles';

const RegisterListVehicles = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Informações sobre o Veículo</h1>
        <Button text={'Excluir'} />
        <Button text={'Salvar'} />
        <Button text={'Veículos'} />
        <Button text={'Manutenções'} />
      </Container>
      <Footer />
    </>
  );
};

export default RegisterListVehicles;
