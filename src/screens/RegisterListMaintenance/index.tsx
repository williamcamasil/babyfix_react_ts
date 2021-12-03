import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { Container, Maintence, FormBox, Form, Buttons } from './styles';

const RegisterListMaintenance = () => {
  return (
    <>
      <Header />
      <Container>
        <Maintence>
          <h1>Manutenção para o veículo [NOME]</h1>
          <FormBox>
            <Form></Form>
          </FormBox>
          <Buttons>
            <Button text={'Excluir'} />
            <Button text={'Salvar'} />
            <Button text={'Veículos'} />
            <Button text={'Manutenções'} />
          </Buttons>
        </Maintence>
      </Container>
      <Footer />
    </>
  );
};

export default RegisterListMaintenance;
