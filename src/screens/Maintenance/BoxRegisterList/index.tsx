import { Route, Switch } from 'react-router-dom';
import List from './List';
import Register from './Register';

const BoxRegisterList = () => {
  return (
    <>
      {/* <h1>Teste</h1> */}
      {/* <Register /> */}
      <Switch>
        <Route path="/manutencao">
          <Register />
          {/* <h1>OLA MUNDO</h1> */}
        </Route>
        <Route path="/manutencao/lista">
          {/* <List /> */}
          <h1>OLA MUNDO DE LISTA</h1>
        </Route>
      </Switch>
    </>
  );
};

export default BoxRegisterList;
