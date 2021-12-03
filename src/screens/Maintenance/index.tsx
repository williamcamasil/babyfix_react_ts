import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
// import Register from './Register';
// import List from './List';
import { Container, Maintence, Buttons } from './styles';
import BoxRegisterList from './BoxRegisterList';
import { NavLink } from 'react-router-dom';

const RegisterListMaintenance = () => {
  // const { path, url } = useRouteMatch();
  return (
    <>
      <Header />
      <Container>
        <Maintence>
          <h1>Manutenção para o veículo [NOME]</h1>
          {/* <Register /> */}
          {/* <List /> */}

          <BoxRegisterList />

          {/* TODO: corrigir o nesting - https://v5.reactrouter.com/web/example/nesting */}
          {/* <NavLink to="/manutencao">Registrar</NavLink>
          <NavLink to="/manutencao/lista">Lista</NavLink> */}

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
            <Button
              text={'Manutenções'}
              click={() => {
                console.log('teste');
              }}
            />
          </Buttons>
        </Maintence>
      </Container>
      <Footer />
    </>
  );
};

export default RegisterListMaintenance;
