import { Route, Switch } from 'react-router-dom';
import List from './List';
import Register from './Register';

const BoxRegisterList = () => {
  return (
    <>
      {/* <h1>Teste</h1> */}
      {/* <Register /> */}
      <Switch>
        {/* <Route path="/manutencao/registrar"> */}
        <Route path="/manutencao">
          <Register />
        </Route>
        <Route path="/manutencao/lista">
          {/* <Route path="/manutencao"> */}
          <List />
        </Route>
      </Switch>
    </>
  );
};

export default BoxRegisterList;
