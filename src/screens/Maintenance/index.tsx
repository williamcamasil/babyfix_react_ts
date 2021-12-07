import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { Container, Maintence, Buttons } from './styles';
import BoxRegisterList from './BoxRegisterList';
import LinkButton from '../../components/LinkButton';

const RegisterListMaintenance = () => {
  // const { path, url } = useRouteMatch();
  return (
    <>
      <Header />
      <Container>
        <Maintence>
          <h1>Manutenção para o veículo [NOME]</h1>

          <BoxRegisterList />

          <Buttons>
            <Button
              text={'Excluir'}
              click={() => {
                console.log('teste');
              }}
            />
            <Button
              text={'Salvar'}
              click={() => {
                console.log('teste');
              }}
            />
            <Button
              text={'Veículos'}
              click={() => {
                console.log('teste');
              }}
            />

            <LinkButton to="/manutencao/registrar" text="Registrar" />
            <LinkButton to="/manutencao/lista" text="Lista" />
          </Buttons>
        </Maintence>
      </Container>
      <Footer />
    </>
  );
};

export default RegisterListMaintenance;
